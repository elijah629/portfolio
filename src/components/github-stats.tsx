import { GithubContributionGraph } from "@/components/github-contribution-graph";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CACHE_SECONDS = 60 * 60;
const HACKATIME_CARD =
  "https://github-readme-stats.hackclub.dev/api/wakatime?username=10968&api_domain=hackatime.hackclub.com&&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=catppuccin_mocha";

const GITHUB_QUERY = `
  query PortfolioCodeActivity($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
      repositories(
        first: 100
        isFork: false
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        nodes {
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              node {
                color
                name
              }
              size
            }
          }
        }
      }
    }
  }
`;

const contributionLevels = {
  FOURTH_QUARTILE: 4,
  FIRST_QUARTILE: 1,
  NONE: 0,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
} as const;

interface GithubResponse {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              contributionLevel: keyof typeof contributionLevels;
              date: string;
            }>;
          }>;
        };
      };
      repositories: {
        nodes: Array<{
          languages: {
            edges: Array<{
              node: { color: string | null; name: string };
              size: number;
            }>;
          } | null;
        } | null>;
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
}

interface LanguageShare {
  bytes: number;
  color: string | null;
  name: string;
  percent: number;
}

async function getCodeActivity() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return null;
  }

  const response = await fetch("https://api.github.com/graphql", {
    body: JSON.stringify({
      query: GITHUB_QUERY,
      variables: { login: "elijah629" },
    }),
    cache: "force-cache",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    method: "POST",
    next: {
      revalidate: CACHE_SECONDS,
      tags: ["github-code-activity"],
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL returned ${response.status}`);
  }

  const payload = (await response.json()) as GithubResponse;
  const user = payload.data?.user;

  if (!user || payload.errors?.length) {
    throw new Error(payload.errors?.[0]?.message ?? "GitHub user not found");
  }

  const calendar = user.contributionsCollection.contributionCalendar;
  const contributions: Activity[] = calendar.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      count: day.contributionCount,
      date: day.date,
      level: contributionLevels[day.contributionLevel],
    })),
  );

  const languageBytes = new Map<
    string,
    { bytes: number; color: string | null }
  >();

  for (const repository of user.repositories.nodes) {
    for (const edge of repository?.languages?.edges ?? []) {
      const current = languageBytes.get(edge.node.name);
      languageBytes.set(edge.node.name, {
        bytes: (current?.bytes ?? 0) + edge.size,
        color: edge.node.color ?? current?.color ?? null,
      });
    }
  }

  const sortedLanguages = [...languageBytes.entries()]
    .map(([name, language]) => ({ name, ...language }))
    .sort((a, b) => b.bytes - a.bytes);
  const totalBytes = sortedLanguages.reduce(
    (total, language) => total + language.bytes,
    0,
  );
  const primaryLanguages = sortedLanguages.slice(0, 7);
  const otherBytes = sortedLanguages
    .slice(7)
    .reduce((total, language) => total + language.bytes, 0);
  const displayedLanguages = otherBytes
    ? [...primaryLanguages, { bytes: otherBytes, color: null, name: "Other" }]
    : primaryLanguages;
  const languages: LanguageShare[] = displayedLanguages.map((language) => ({
    ...language,
    percent: totalBytes ? (language.bytes / totalBytes) * 100 : 0,
  }));

  return {
    contributions,
    languages,
    totalContributions: calendar.totalContributions,
  };
}

function LanguageMeter({ languages }: { languages: LanguageShare[] }) {
  return (
    <div className="flex flex-col gap-5">
      <div
        aria-label="Programming language percentages by bytes of code"
        className="flex h-3 w-full overflow-hidden rounded-sm bg-muted"
        role="img"
      >
        {languages.map((language) => (
          <span
            key={language.name}
            style={{
              backgroundColor: language.color ?? "var(--muted-foreground)",
              width: `${language.percent}%`,
            }}
            title={`${language.name} ${language.percent.toFixed(1)}%`}
          />
        ))}
      </div>
      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {languages.map((language) => (
          <div
            className="grid grid-cols-[auto_1fr_auto] items-center gap-2 text-sm"
            key={language.name}
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-xs"
              style={{
                backgroundColor: language.color ?? "var(--muted-foreground)",
              }}
            />
            <span>{language.name}</span>
            <span className="font-mono text-muted-foreground tabular-nums">
              {language.percent.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function GithubStats() {
  let activity: Awaited<ReturnType<typeof getCodeActivity>> = null;

  try {
    activity = await getCodeActivity();
  } catch {
    // Hackatime still renders if GitHub is unavailable or the token is absent.
  }

  return (
    <section className="w-full px-6 py-16" id="code-activity">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <h2 className="text-4xl font-bold md:text-6xl">Code activity</h2>

        {activity?.contributions.length ? (
          <Card>
            <CardHeader>
              <CardTitle>GitHub contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <GithubContributionGraph
                contributions={activity.contributions}
                totalContributions={activity.totalContributions}
              />
            </CardContent>
          </Card>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Language mix</CardTitle>
            </CardHeader>
            <CardContent>
              {activity?.languages.length ? (
                <LanguageMeter languages={activity.languages} />
              ) : (
                <p className="text-sm text-muted-foreground">
                  GitHub language data unavailable.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hackatime</CardTitle>
            </CardHeader>
            <CardContent>
              {/* The provided endpoint returns a self-contained SVG card. */}
              {/* biome-ignore lint/performance/noImgElement: remote SVG stats endpoint */}
              <img
                alt="Eli Özcan's Hackatime coding statistics"
                className="h-auto w-full"
                height="190"
                loading="lazy"
                src={HACKATIME_CARD}
                width="495"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";

export function GithubContributionGraph({
  contributions,
  totalContributions,
}: {
  contributions: Activity[];
  totalContributions: number;
}) {
  return (
    <ContributionGraph
      className="mx-auto font-mono text-xs"
      data={contributions}
      totalCount={totalContributions}
    >
      <ContributionGraphCalendar>
        {({ activity: day, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={day}
            aria-label={`${day.count} contributions on ${day.date}`}
            className='stroke-border stroke-[1px] data-[level="1"]:fill-primary/25 data-[level="2"]:fill-primary/45 data-[level="3"]:fill-primary/70 data-[level="4"]:fill-primary'
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="text-muted-foreground">
              {totalCount} contributions in the past year
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

import resume from "@/data/resume.json";

export function PrintableResume() {
  const leadership = resume.experience.filter((entry) =>
    [
      "President & Treasurer",
      "Vice President",
      "Cadet Airman (C/Amn)",
    ].includes(entry.role),
  );
  const engineering = resume.experience.filter(
    (entry) =>
      ![
        "President & Treasurer",
        "Vice President",
        "Cadet Airman (C/Amn)",
      ].includes(entry.role),
  );

  return (
    <article
      className="print-resume"
      aria-label={`${resume.identity.name} résumé`}
    >
      <ResumePage>
        <ResumeHeader />
        <ResumeSection title="Professional Summary">
          <p>{resume.summary}</p>
        </ResumeSection>

        <ResumeSection title="Technical Competencies">
          <div className="resume-skills">
            {resume.skills.map((skill) => (
              <p key={skill.category}>
                <strong>{skill.category}:</strong> {skill.items.join(" · ")}
              </p>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Leadership & Service">
          <ResumeEntries entries={leadership} />
        </ResumeSection>
      </ResumePage>

      <ResumePage>
        <ResumePageHeader title="Engineering Experience" />
        <ResumeEntries entries={engineering} />

        <ResumeSection title="Selected Technical Projects">
          <div className="resume-project-list">
            {resume.projects.map((project) => (
              <section className="resume-project" key={project.name}>
                <h3>
                  <a href={project.href}>{project.name}</a>
                  <span> · {project.label}</span>
                </h3>
                <p>{project.details}</p>
              </section>
            ))}
          </div>
        </ResumeSection>
      </ResumePage>

      <ResumePage>
        <ResumePageHeader title="Education & Recognition" />
        <ResumeSection title="Honors & Recognition">
          <ul>
            {resume.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Education">
          <h3>{resume.education.school}</h3>
          <p>
            <strong>{resume.education.period}</strong> ·{" "}
            {resume.education.location}
          </p>
          <p>{resume.education.focus}</p>
        </ResumeSection>
      </ResumePage>
    </article>
  );
}

function ResumeHeader() {
  return (
    <header className="resume-header">
      <h1>{resume.identity.name}</h1>
      <p className="resume-headline">{resume.identity.headline}</p>
      <p className="resume-contact">
        <span>{resume.identity.location}</span>
        {resume.identity.links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </p>
    </header>
  );
}

function ResumePage({ children }: { children: React.ReactNode }) {
  return <div className="resume-page">{children}</div>;
}

function ResumePageHeader({ title }: { title: string }) {
  return <p className="resume-page-header">{title}</p>;
}

function ResumeEntries({
  entries,
}: {
  entries: (typeof resume.experience)[number][];
}) {
  return (
    <div className="resume-entries">
      {entries.map((entry) => (
        <section className="resume-entry" key={`${entry.role}-${entry.period}`}>
          <div className="resume-entry-heading">
            <div>
              <h3>{entry.role}</h3>
              {entry.href ? (
                <a href={entry.href}>{entry.organization}</a>
              ) : (
                <p>{entry.organization}</p>
              )}
            </div>
            <strong>{entry.period}</strong>
          </div>
          <ul>
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

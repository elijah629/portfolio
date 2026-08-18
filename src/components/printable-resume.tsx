import resume from "@/data/resume.json";

export function PrintableResume() {
  return (
    <article
      className="print-resume"
      aria-label={`${resume.identity.name} résumé`}
    >
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

      <ResumeSection title="Profile">
        <p>{resume.summary}</p>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <div className="resume-skills">
          {resume.skills.map((skill) => (
            <p key={skill.category}>
              <strong>{skill.category}:</strong> {skill.items.join(" · ")}
            </p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Engineering Leadership">
        <div className="resume-entries">
          {resume.experience.map((entry) => (
            <section
              className="resume-entry"
              key={`${entry.role}-${entry.period}`}
            >
              <div className="resume-entry-heading">
                <div>
                  <h3>{entry.role}</h3>
                  <a href={entry.href}>{entry.organization}</a>
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
      </ResumeSection>

      <ResumeSection title="Selected Engineering Projects">
        <div className="resume-project-grid">
          {resume.projects.map((project) => (
            <section className="resume-project" key={project.name}>
              <h3>
                <a href={project.href}>{project.name}</a>
                <span> — {project.label}</span>
              </h3>
              <p>{project.details}</p>
            </section>
          ))}
        </div>
      </ResumeSection>

      <div className="resume-bottom-grid">
        <ResumeSection title="Results & Recognition">
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
      </div>
    </article>
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

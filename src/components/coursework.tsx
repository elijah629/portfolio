import { Wrench } from "lucide-react";
import coursework from "@/data/coursework.json";

export function Coursework() {
  return (
    <section className="px-6 py-20" id="coursework">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase text-primary">
          Engineering coursework
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
          Class work will use the same evidence standard.
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
          POE and IED projects will track the problem, calculations, CAD, build
          revisions, test data, and result. Empty project arrays already live in
          <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
            src/data/coursework.json
          </code>
          .
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {coursework.courses.map((course) => (
            <article
              className="rounded-lg border bg-secondary/20 p-6"
              key={course.id}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-sm text-primary">
                    {course.code}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">{course.name}</h3>
                </div>
                <Wrench className="text-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {course.status} · {course.projects.length} projects logged
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.focus.map((item) => (
                  <span
                    className="rounded-full border px-3 py-1 text-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

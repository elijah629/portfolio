import { ProjectCategoryCarousel } from "./project-category-carousel";

export function Work() {
  return (
    <section id="work" className="min-h-screen w-full px-6 py-16">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <p className="font-mono text-sm uppercase tracking-normal text-primary">
          Selected work
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">
          Projects, experiments, and stuff I probably learned by breaking first.
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Some are polished, some are jokes that got too real, and some are just
          me chasing a question until it turns into a repo. That is usually the
          best way I learn.
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <ProjectCategoryCarousel />
      </div>
    </section>
  );
}

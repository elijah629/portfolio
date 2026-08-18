import { ProjectCategoryCarousel } from "./project-category-carousel";

export function Work() {
  return (
    <section id="work" className="min-h-screen w-full px-6 py-16">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <h2 className="text-4xl font-bold md:text-6xl">Projects.</h2>
      </div>
      <div className="mx-auto max-w-6xl">
        <ProjectCategoryCarousel />
      </div>
    </section>
  );
}

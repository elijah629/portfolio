import { ProjectCategoryCarousel } from "./project-category-carousel";

export function Work() {
  return (
    <section id="work" className="min-h-screen w-full pt-10">
      <h1 className="font-bold text-center text-6xl border-b pb-5 mx-8">
        My work
      </h1>
      <div className="p-16">
        <ProjectCategoryCarousel />
      </div>
    </section>
  );
}

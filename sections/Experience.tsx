import Container from "@/components/Container";
import { Flame, Leaf, Users, Wine } from "lucide-react";

const experiences = [
  {
    title: "Open Fire Kitchen",
    desc: "Dishes crafted with flame, smoke, and precision.",
    icon: Flame,
  },
  {
    title: "Seasonal Ingredients",
    desc: "Fresh selections inspired by the rhythm of nature.",
    icon: Leaf,
  },
  {
    title: "Private Dining",
    desc: "An intimate setting for meaningful gatherings.",
    icon: Users,
  },
  {
    title: "Wine Pairing",
    desc: "Curated pairings to elevate every course.",
    icon: Wine,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#181818] py-32 md:py-44">
      <Container>
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
            The Experience
          </p>

          <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
            More than dinner,
            <br />
            it is a memory.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="card-premium group p-8"
              >
                <Icon className="mb-10 text-[#C7A66A]" size={34} />

                <h3 className="font-heading text-3xl font-light">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
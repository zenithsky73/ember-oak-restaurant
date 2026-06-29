import Container from "@/components/Container";
import FadeUp from "@/components/FadeUp";

const dishes = [
  {
    name: "Ribeye Steak",
    category: "Dry Aged, Smoked Butter",
    image: "/images/dishes/ribeye.jpg",
  },
  {
    name: "Hokkaido Scallop",
    category: "Cauliflower Purée, Brown Butter",
    image: "/images/dishes/scallop.jpg",
  },
  {
    name: "Dark Chocolate",
    category: "Hazelnut, Salted Caramel",
    image: "/images/dishes/dessert.jpg",
  },
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="bg-[#111111] py-32 md:py-44">
      <Container>
        <FadeUp>
            <div className="mb-16 text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
                Signature Dishes
            </p>

            <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
                Crafted to Perfection
            </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
            {dishes.map((dish, index) => (
                <FadeUp key={dish.name} delay={index * 0.15}>
                    <article
                    className="group overflow-hidden border border-white/10 bg-[#181818]"
                    >
                    <div className="relative h-[420px] overflow-hidden">
                        <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#C7A66A]">
                            Signature
                        </p>

                        <h3 className="font-heading text-3xl font-light">
                            {dish.name}
                        </h3>

                        <p className="mt-2 text-sm text-white/60">
                            {dish.category}
                        </p>

                        <a
                            href="#reservation"
                            className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C7A66A] opacity-0 transition duration-500 group-hover:opacity-100"
                        >
                            View Details →
                        </a>
                        </div>
                    </div>
                    </article>
                </FadeUp>
            ))}
            </div>

            <div className="mt-14 text-center">
            <a
                href="#reservation"
                className="text-xs font-bold uppercase tracking-[0.35em] text-[#C7A66A] transition hover:text-white"
            >
                Explore Full Menu →
            </a>
            </div>
        </FadeUp>
      </Container>
    </section>
  );
}
import Container from "@/components/Container";

export default function ChefSelection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-32 md:py-44">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative">
            <img
              src="/images/chef/chef.jpg"
              alt="Executive Chef"
              className="h-[680px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C7A66A]">
                Executive Chef
              </p>
              <h3 className="mt-3 font-heading text-4xl font-light">
                Chef Adrian
              </h3>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
              Chef&apos;s Selection
            </p>

            <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
              A table, a story,
              <br />
              a memory.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              “Great food is built on patience, precision, and passion. Every
              plate should feel personal, thoughtful, and unforgettable.”
            </p>

            <div className="mt-10 h-px w-32 bg-[#C7A66A]/40" />

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/45">
              Guided by open-fire techniques and seasonal ingredients, our chef
              curates a dining experience that balances warmth, elegance, and
              modern craftsmanship.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
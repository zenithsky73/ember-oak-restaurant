import Container from "@/components/Container";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#111111] py-32 md:py-44"
    >
      <Container>
        <FadeUp>
            <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
                Our Philosophy
                </p>

                <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
                Every dish begins
                <br />
                with intention.
                </h2>

                <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                At Ember & Oak, every ingredient is chosen with care, every flame
                is controlled with patience, and every plate is crafted to create
                a lasting memory.
                </p>

                <div className="mt-10">
                <Button href="#menu" variant="outline">
                    Discover Our Craft
                </Button>
                </div>
            </div>
            <FadeUp delay={0.2}>
                <div className="relative">
                    <div className="absolute -left-8 -top-8 h-full w-full border border-[#C7A66A]/20" />

                    <img
                    src="/images/chef/chef-plating.jpg"
                    alt="Chef plating food"
                    className="relative h-[560px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            </FadeUp>
            </div>
        </FadeUp>
      </Container>
    </section>
  );
}
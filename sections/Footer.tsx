import Container from "@/components/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-24">
      <Container>
        <div className="border-t border-white/10 pt-16">
          <h2 className="font-heading text-6xl font-light tracking-[0.12em] md:text-8xl">
            SEE YOU SOON.
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-white/10 pt-10 md:flex-row">
            <div>
                <Image
                    src="/logo/ember-oak-logo-v2.png"
                    alt="Ember & Oak"
                    width={220}
                    height={70}
                    className="h-auto w-[200px]"
                />

                <p className="mt-5 text-sm text-white/50">
                    Crafted by Fire. Served with Soul.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              {["Home", "Philosophy", "Menu", "Gallery", "Reservation", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#C7A66A]">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-12 text-xs text-white/35">
            © 2026 Ember & Oak. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
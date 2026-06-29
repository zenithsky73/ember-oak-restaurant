import Container from "@/components/Container";

export default function Location() {
  return (
    <section id="contact" className="bg-[#181818] py-32 md:py-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="min-h-[480px] border border-white/10 bg-[#111111]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Jakarta&output=embed"
              className="h-full min-h-[480px] w-full grayscale invert opacity-70"
            />
          </div>

          <div className="flex flex-col justify-center border border-white/10 bg-[#111111] p-8 md:p-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
              Visit Us
            </p>

            <h2 className="font-heading text-5xl font-light md:text-7xl">
              Find the fire.
            </h2>

            <div className="mt-10 space-y-8 text-white/60">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Address
                </p>
                <p className="mt-3 leading-7">
                  123 Oakwood Avenue
                  <br />
                  Jakarta 12190, Indonesia
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Opening Hours
                </p>
                <p className="mt-3 leading-7">
                  Mon–Sun
                  <br />
                  11.00 AM – 11.00 PM
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Contact
                </p>
                <p className="mt-3 leading-7">
                  +62 812 3456 7890
                  <br />
                  hello@emberandoak.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
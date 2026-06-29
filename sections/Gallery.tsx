import Container from "@/components/Container";

const gallery = [
  {
    image: "/images/gallery/gallery-1.jpg",
    label: "Dining Room",
    className: "md:col-span-2 md:h-[520px]",
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    label: "Open Fire",
    className: "md:h-[520px]",
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    label: "Wine Pairing",
    className: "md:h-[380px]",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    label: "Chef Plating",
    className: "md:col-span-2 md:h-[380px]",
  },
  {
    image: "/images/gallery/gallery-5.jpg",
    label: "Private Table",
    className: "md:col-span-3 md:h-[520px]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#181818] py-32 md:py-44">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
            Gallery
          </p>

          <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
            A glimpse of the evening
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.label}
              className={`group relative h-[420px] overflow-hidden border border-white/10 bg-[#111111] ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/45" />

              <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C7A66A]">
                  Ember & Oak
                </p>

                <h3 className="mt-3 font-heading text-4xl font-light">
                  {item.label}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
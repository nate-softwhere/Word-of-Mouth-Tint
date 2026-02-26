import Image from "next/image";

const images = [
  { src: "/assets/sudan.jpg", alt: "Sedan Window Tinting" },
  { src: "/assets/back of sudan.jpg", alt: "Sedan Rear Window Tinting" },
  { src: "/assets/ford black.jpg", alt: "Black Ford Window Tinting" },
  { src: "/assets/orange truck.jpg", alt: "Orange Truck Window Tinting" },
  { src: "/assets/truck grey.jpg", alt: "Grey Truck Window Tinting" },
  { src: "/assets/truck grey chevy.jpg", alt: "Grey Chevy Truck Window Tinting" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-blush"
    >
      <div className="section-content w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-crimson mb-4">Our Work</h2>
        <p className="text-crimson mb-8">Check out some of our recent tinting projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(({ src, alt }) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-16 text-center bg-gradient-to-br from-crimson-light to-blush"
    >
      <div className="section-content">
        <h1 className="text-4xl md:text-5xl font-bold text-crimson mb-4 drop-shadow-sm">
          Word of Mouth Window Tinting
        </h1>
        <p className="text-xl text-crimson/90 mb-1">Automotive Window Tinting Service</p>
        <p className="text-lg italic text-crimson/80 mb-4">Clean and professional work!</p>
        <span className="inline-block bg-crimson-light text-cream px-4 py-2 rounded-full font-semibold mt-4">
          96% recommend (19 Reviews)
        </span>
      </div>
    </section>
  );
}

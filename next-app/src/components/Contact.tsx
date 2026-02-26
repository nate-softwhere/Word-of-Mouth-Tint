export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-gradient-to-br from-blush to-cream"
    >
      <div className="section-content">
        <h2 className="text-3xl md:text-4xl font-bold text-crimson mb-4">Contact Us</h2>
        <p className="text-crimson mb-8">Visit us or give us a call</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/70 p-6 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <strong className="block text-crimson text-lg mb-2">📍 Address</strong>
            <p className="text-crimson">
              300 3rd St SW Ste A
              <br />
              Minot, ND 58701
            </p>
          </div>
          <div className="bg-white/70 p-6 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <strong className="block text-crimson text-lg mb-2">📞 Phone</strong>
            <a href="tel:7015005802" className="text-crimson hover:text-crimson-light">
              (701) 500-5802
            </a>
          </div>
          <div className="bg-white/70 p-6 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <strong className="block text-crimson text-lg mb-2">⭐ Rating</strong>
            <p className="text-crimson">
              96% recommend
              <br />
              19 Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

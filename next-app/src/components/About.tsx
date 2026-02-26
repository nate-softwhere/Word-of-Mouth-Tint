const features = [
  "Premium Quality Materials",
  "Professional Installation",
  "96% Customer Satisfaction",
  "Competitive Pricing",
  "All Vehicle Types",
  "Warranty Included",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-gradient-to-br from-cream to-blush"
    >
      <div className="section-content max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-crimson mb-6">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold text-crimson mb-4">
              Professional Window Tinting Services
            </h3>
            <p className="text-crimson mb-4 leading-relaxed">
              At Word of Mouth Window Tinting, we specialize in providing clean and
              professional automotive window tinting services. With years of experience
              and a commitment to quality, we ensure every vehicle receives the best
              treatment.
            </p>
            <p className="text-crimson mb-6 leading-relaxed">
              Our team uses premium materials and state-of-the-art techniques to deliver
              results that not only look great but also provide protection from UV rays
              and heat.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-crimson">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crimson-light text-cream flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream p-6 rounded-xl shadow-lg">
            <h3 className="text-crimson font-bold text-lg mb-4">Why Choose Us?</h3>
            <p className="text-crimson leading-relaxed mb-4">
              We take pride in our attention to detail and customer service. Every job is
              completed with precision and care, ensuring your vehicle looks its best
              while providing the protection you need.
            </p>
            <p className="text-crimson leading-relaxed">
              Located in Minot, North Dakota, we serve customers throughout the region
              with reliable, professional window tinting services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

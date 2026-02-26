"use client";

import { useState } from "react";

export default function Messaging() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <section
      id="messaging"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-16 bg-cream"
    >
      <div className="section-content flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-crimson mb-4">Messaging</h2>
        <p className="text-crimson mb-8">Get in touch with us</p>
        <div className="w-full max-w-xl mx-auto bg-white/90 p-8 rounded-xl shadow-lg text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="messageName" className="block text-crimson font-semibold mb-1">
                  Your Name *
                </label>
                <input
                  id="messageName"
                  name="messageName"
                  type="text"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="messageEmail" className="block text-crimson font-semibold mb-1">
                  Your Email *
                </label>
                <input
                  id="messageEmail"
                  name="messageEmail"
                  type="email"
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="messagePhone" className="block text-crimson font-semibold mb-1">
                Phone Number
              </label>
              <input
                id="messagePhone"
                name="messagePhone"
                type="tel"
                placeholder="(701) 555-1234"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="messageSubject" className="block text-crimson font-semibold mb-1">
                Subject *
              </label>
              <input
                id="messageSubject"
                name="messageSubject"
                type="text"
                required
                placeholder="What is your message about?"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="messageContent" className="block text-crimson font-semibold mb-1">
                Message *
              </label>
              <textarea
                id="messageContent"
                name="messageContent"
                required
                placeholder="Tell us how we can help you..."
                rows={4}
                className="form-input resize-y min-h-[120px]"
              />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
            {success && (
              <p className="bg-crimson-light text-cream p-4 rounded-md text-center">
                Thank you for your message! We&apos;ll get back to you as soon as possible.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

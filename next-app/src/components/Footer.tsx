import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#messaging", label: "Messaging" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-crimson text-cream py-12 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-8 flex-wrap mb-8">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-cream no-underline hover:text-blush transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="mb-1">© 2024 Word of Mouth Window Tinting. All rights reserved.</p>
        <p className="mb-8">300 3rd St SW Ste A, Minot, ND 58701 | (701) 500-5802</p>
        <div className="pt-8 border-t border-cream/20">
          <p className="text-blush text-sm mb-1">Powered by</p>
          <a
            href="https://soft-where.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cream font-semibold no-underline hover:opacity-80 transition-opacity"
          >
            <Image
              src="/assets/soft-where-logo.png"
              alt="Soft-Where Digital Design"
              width={120}
              height={30}
              className="h-[30px] w-auto object-contain"
            />
            <span>Soft-Where</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

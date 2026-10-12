import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "How to Order", href: "/how-it-works" },
  { label: "Products List", href: "/products-list" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "FAQ's", href: "/faq" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: BsInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: BsTwitter },
  { label: "YouTube", href: "https://youtube.com", icon: BsYoutube },
];

const Footer = () => {
  return (
    <footer className="w-full bg-green-200 text-green-100">
      {/* Main columns */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-black">
              Discover nuts, dried fruits, spices, seeds, pulses, candies and
              specialty chocolate from Parwan Roastery Abu Dhabi. Browse the
              catalog to view listed prices. For updated pricing, product
              availability and order quantities, please contact us.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white ring-1 ring-white/10 transition-colors hover:bg-green-500 hover:text-green-950"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-black">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-black transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For farmers */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-black">
              Legal Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-black transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-black">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-black font-semibold">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <span>
                  Shop 4, Building Al Danah, Sector E10 , Plot 64, Abu Dhabi,
                  UAE
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Phone className="h-4 w-4 shrink-0 text-green-400" />
                <Link href="tel:+911234567890" className="hover:text-green-400">
                  +971508221435
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-semibold">
                <Mail className="h-4 w-4 shrink-0 text-green-400" />
                <Link
                  href="mailto:info@parwanroastery.com"
                  className="hover:text-green-400"
                >
                  info@parwanroastery.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-black font-semibold">
            © {new Date().getFullYear()} Parwan Roaster L.L.C.-S.P.C. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

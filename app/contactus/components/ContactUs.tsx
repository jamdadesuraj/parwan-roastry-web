import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import ThemeBtnOne from "@/app/components/ThemeBtnOne";
import { BsWhatsapp } from "react-icons/bs";

const WHATSAPP_NUMBER = "971508221435"; // country code + number, no + or spaces
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Parwan Roastery, I would like to enquire about your products.",
)}`;

const inputCls =
  "h-11 w-full rounded-lg border border-[#dfe5da] bg-[#fafcf9] px-4 text-sm text-[#252525] outline-none transition placeholder:text-[#aaa] focus:border-[#438c35] focus:ring-2 focus:ring-[#438c35]/10";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-[#f8faf5] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-5 font-serif text-3xl font-bold text-gray-900 md:text-5xl">
            Contact Parwan Roastery Abu Dhabi
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#666] sm:text-base">
            Have a question, need help, or want to know more about our platform?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div className="rounded-2xl bg-green-200 p-6 text-black sm:p-8">
            <h2 className="font-serif text-xl font-bold">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-6 text-black">
              We’re here to help buyers connect better. Reach out to us through
              any of the channels below.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-black">Email</p>
                  <Link
                    href="mailto:info@parwanroastery.com"
                    className="mt-1 block font-serif text-sm font-semibold hover:text-green-600"
                  >
                    info@parwanroastery.com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-black">Phone</p>
                  <Link
                    href="tel:+971508221435"
                    className="mt-1 block font-serif text-sm font-semibold hover:text-green-600"
                  >
                    +971 50 822 1435
                  </Link>
                </div>
              </div>

              {/* WhatsApp (blinking icon) */}
              <div className="flex items-start gap-4">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-[#25D366] opacity-50"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <BsWhatsapp size={20} />
                  </span>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-medium text-black">
                    WhatsApp
                    <span className="flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      Online
                    </span>
                  </p>
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-serif text-sm font-semibold hover:text-green-600"
                  >
                    +971 50 822 1435
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-black">Address</p>
                  <p className="mt-1 font-serif text-sm font-semibold">
                    Shop 4, Building Al Danah, Sector E10, Plot 64, Abu Dhabi,
                    UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="mt-10 rounded-xl bg-white p-4">
              <p className="text-sm font-semibold">Need quick assistance?</p>
              <p className="mt-1 text-xs leading-5 text-black">
                Our support team is available to help you with your questions.
              </p>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-9 items-center gap-2 rounded-lg bg-[#25D366] px-4 text-xs font-semibold text-white transition hover:bg-green-600"
              >
                <BsWhatsapp size={14} />
                Chat on WhatsApp
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[#e3e8df] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-bold capitalize text-[#252525]">
              How Can We Help You?
            </h2>

            <p className="mt-2 text-sm text-[#777]">
              Thank you for your interest in Parwan Roastery Abu Dhabi. Contact
              us with questions about our products, listed prices, availability
              and ordering arrangements. Complete the inquiry form below and our
              team can follow up using your preferred contact method.
            </p>

            <form className="mt-7 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[#333]"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[#333]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold text-[#333]"
                >
                  Phone / WhatsApp No.
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className={inputCls}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold text-[#333]"
                >
                  Company Name (optional)
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  className={inputCls}
                />
              </div>

              {/* Product + Qty */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-xs font-semibold text-[#333]"
                  >
                    Product Of Interest
                  </label>
                  <input
                    id="product"
                    type="text"
                    placeholder="Enter product name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label
                    htmlFor="qty"
                    className="mb-2 block text-xs font-semibold text-[#333]"
                  >
                    Required Qty
                  </label>
                  <input
                    id="qty"
                    type="text"
                    placeholder="Enter qty"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-[#333]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-[#dfe5da] bg-[#fafcf9] px-4 py-3 text-sm text-[#252525] outline-none transition placeholder:text-[#aaa] focus:border-[#438c35] focus:ring-2 focus:ring-[#438c35]/10"
                />
              </div>

              {/* Submit */}
              <ThemeBtnOne
                text="Submit Inquiry"
                className="w-full cursor-pointer bg-green-700 px-4 py-3 font-serif text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

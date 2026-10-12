"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ThemeBtnOne from "@/app/components/ThemeBtnOne";

type Slide = {
  id: string;
  image: string;
  imageAlt: string;
  tag: string;
  heading: string;
  highlight: string;
  description: string;

  primaryCta: { label: string; url: string };
  secondaryCta: { label: string; url: string };
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    image: "/img/banner/b5.jpg",
    imageAlt: "Premium nuts, seeds, spices and specialty products",
    tag: "Parwan Roster UAE",
    heading: "Quality Nuts, Seeds, Spices &",
    highlight: "Specialty Products",
    description:
      "Welcome to Parwan Roster L.L.C. S.P.C., your destination for a diverse selection of nuts, seeds, spices, dried fruits, lentils, candies and specialty chocolate. Contact our team for product information, current pricing and order inquiries.",

    primaryCta: { label: "Explore Our Products", url: "/products-list" },
    secondaryCta: { label: "Contact Us for Orders", url: "/contactus" },
  },
  {
    id: "slide-2",
    image: "/img/banner/b5.jpg",
    imageAlt: "Premium nuts, seeds, spices and specialty products",
    tag: "Parwan Roster UAE",
    heading: "Quality Nuts, Seeds, Spices &",
    highlight: "Specialty Products",
    description:
      "Welcome to Parwan Roster L.L.C. S.P.C., your destination for a diverse selection of nuts, seeds, spices, dried fruits, lentils, candies and specialty chocolate. Contact our team for product information, current pricing and order inquiries.",

    primaryCta: { label: "Explore Our Products", url: "/products-list" },
    secondaryCta: { label: "Contact Us for Orders", url: "/contactus" },
  },
];

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 50;

const HeroBanner = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const hasMultiple = SLIDES.length > 1;
  const autoplay = hasMultiple && !reduceMotion;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) {
      next();
    } else {
      prev();
    }
  };

  // Stagger helper for the content entrance
  const reveal = (isActive: boolean, delay: string) =>
    `transition-all duration-700 ease-out ${
      isActive
        ? `translate-y-0 opacity-100 ${delay}`
        : "translate-y-6 opacity-0 delay-0"
    }`;

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber-300"
      aria-roledescription="carousel"
      aria-label="Homepage highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes hero-zoom {
          from { transform: scale(1.12); }
          to   { transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-zoom { animation: none !important; }
        }
      `}</style>

      <div className="relative min-h-170 sm:min-h-160 lg:h-175 lg:min-h-0">
        {SLIDES.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
              {...(!isActive ? { inert: true } : {})}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {/* FULL BACKGROUND IMAGE */}
              <div
                key={isActive ? `bg-active-${active}` : `bg-${slide.id}`}
                className="hero-zoom absolute inset-0"
                style={
                  isActive
                    ? {
                        animation: `hero-zoom ${AUTOPLAY_MS + 2500}ms ease-out forwards`,
                      }
                    : undefined
                }
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
                  className="object-cover object-center"
                />
              </div>

              {/* OVERLAYS: readability + depth */}
              <div className="pointer-events-none absolute inset-0 bg-slate-950/55 lg:bg-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10 max-lg:hidden" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-slate-950/80 to-transparent" />
              <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />

              {/* CONTENT */}
              <div className="relative z-10 mx-auto flex h-full w-full max-w-8xl items-center px-5 pb-28 pt-12 sm:px-10 lg:px-12 xl:px-16">
                <div className="w-full max-w-2xl">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md ${reveal(
                      isActive,
                      "delay-100",
                    )}`}
                  >
                    <span
                      className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_2px] shadow-amber-300/60"
                      aria-hidden="true"
                    />
                    {slide.tag}
                  </span>

                  {isActive ? (
                    <h1
                      className={`mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl ${reveal(
                        isActive,
                        "delay-200",
                      )}`}
                    >
                      {slide.heading}{" "}
                      <span className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h1>
                  ) : (
                    <p className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl">
                      {slide.heading}{" "}
                      <span className="text-amber-300">{slide.highlight}</span>
                    </p>
                  )}

                  <p
                    className={`mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 ${reveal(
                      isActive,
                      "delay-300",
                    )}`}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={`mt-8 flex flex-wrap items-center gap-3 sm:gap-4 ${reveal(
                      isActive,
                      "delay-500",
                    )}`}
                  >
                    <ThemeBtnOne
                      text={slide.primaryCta.label}
                      url={slide.primaryCta.url}
                      className="rounded-full bg-amber-400 px-5 py-3 font-serif font-semibold text-nowrap text-slate-900 shadow-lg shadow-amber-400/30 transition-all hover:-translate-y-0.5 hover:bg-amber-300 sm:px-7 sm:py-4"
                    />
                    <ThemeBtnOne
                      text={slide.secondaryCta.label}
                      url={slide.secondaryCta.url}
                      className="rounded-full border border-white/40 bg-white/10 px-5 py-3 font-serif text-nowrap text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 sm:px-7 sm:py-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* CONTROLS */}
        {hasMultiple && (
          <div className="absolute inset-x-0 bottom-0 z-20">
            <div className="mx-auto flex w-full max-w-8xl items-center gap-4 px-5 pb-6 sm:px-10 lg:px-12 xl:px-16">
              <p
                className="w-14 shrink-0 font-serif text-sm font-semibold tabular-nums text-white"
                aria-live="polite"
              >
                {String(active + 1).padStart(2, "0")}
                <span className="text-white/50">
                  {" "}
                  / {String(SLIDES.length).padStart(2, "0")}
                </span>
              </p>

              <div className="flex flex-1 items-center gap-2 sm:max-w-sm">
                {SLIDES.map((slide, index) => {
                  const isActive = index === active;
                  const isDone = index < active;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group relative h-6 flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    >
                      <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition-colors group-hover:bg-white/40">
                        <span
                          key={isActive ? `active-${active}` : slide.id}
                          className="block h-full origin-left rounded-full bg-amber-300"
                          style={
                            isActive && autoplay
                              ? {
                                  animation: `hero-progress ${AUTOPLAY_MS}ms linear forwards`,
                                  animationPlayState: paused
                                    ? "paused"
                                    : "running",
                                }
                              : {
                                  transform: `scaleX(${
                                    isActive || isDone ? 1 : 0
                                  })`,
                                }
                          }
                          onAnimationEnd={
                            isActive && autoplay ? next : undefined
                          }
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;

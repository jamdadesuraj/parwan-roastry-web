"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, ArrowUpDown, X } from "lucide-react";

const categories = [
  { name: "All", href: "/products" },
  { name: "Nuts", href: "/crops/vegetables" },
  { name: "Fruits", href: "/crops/fruits" },
  { name: "Organic Nuts", href: "/crops/grains-pulses" },
  { name: "Dried Fruits", href: "/crops/spices" },
  { name: "Superfoods", href: "/crops/oilseeds" },
  { name: "Breakfast", href: "/crops/dairy" },
];

const sortOptions = [
  { value: "", label: "Sort by" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const Filter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = React.useState(searchParams.get("q") ?? "");
  const [sortOpen, setSortOpen] = React.useState(false);
  const sortValue = searchParams.get("sort") ?? "";
  const sortRef = React.useRef<HTMLDivElement>(null);

  // Close sort dropdown on outside click
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams({ q: query || null });
  };

  const activeSortLabel =
    sortOptions.find((o) => o.value === sortValue)?.label ?? "Sort by";

  return (
    <div className="w-full bg-white border-b border-[#e3e8df]">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Search + Sort row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9aa596]"
            />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Nuts, fruits..."
              className="w-full rounded-lg border border-[#dfe5da] bg-[#f8faf5] py-2.5 pl-10 pr-9 text-sm text-[#252525] outline-none transition placeholder:text-[#9aa596] focus:border-[#438c35] focus:bg-white focus:ring-2 focus:ring-[#438c35]/15"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  updateParams({ q: null });
                }}
                className="absolute right-3 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center text-[#9aa596] hover:text-[#555]"
              >
                <X size={15} />
              </button>
            )}
          </form>

          {/* Price sort */}
          <div ref={sortRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition sm:w-auto ${
                sortValue
                  ? "border-[#438c35] bg-[#e7f2dc] text-[#438c35]"
                  : "border-[#dfe5da] bg-[#f8faf5] text-[#444] hover:border-[#438c35]/50"
              }`}
            >
              <ArrowUpDown size={15} />
              {activeSortLabel}
            </button>

            {sortOpen && (
              <div className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-lg border border-[#e3e8df] bg-white py-1 shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      updateParams({ sort: option.value || null });
                      setSortOpen(false);
                    }}
                    className={`block w-full cursor-pointer px-4 py-2.5 text-left text-sm transition hover:bg-[#f8faf5] ${
                      sortValue === option.value
                        ? "font-semibold text-[#438c35]"
                        : "text-[#444]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive =
              category.href === "/products"
                ? pathname === "/products"
                : pathname === category.href;

            return (
              <Link
                key={category.name}
                href={category.href}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition ${
                  isActive
                    ? "border-[#438c35] bg-[#438c35] text-white"
                    : "border-[#dfe5da] bg-white text-[#555] hover:border-[#438c35] hover:text-[#438c35]"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;

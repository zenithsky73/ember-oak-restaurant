"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-6 z-50 w-full">
        <Container>
          <nav
            className={`mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
              scrolled
                ? "h-16 max-w-6xl border-white/10 bg-[#111111]/75 px-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl md:px-8"
                : "h-20 max-w-full border-transparent bg-transparent px-0"
            }`}
          >
            <a href="#home" className="block">
              <Image
                src="/logo/ember-oak-logo-v2.png"
                alt="Ember & Oak"
                width={220}
                height={70}
                priority
                className="h-auto w-[200px]"
                />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70 transition hover:text-[#C7A66A]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#reservation"
              className="hidden items-center gap-2 rounded-full border border-[#C7A66A]/70 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-[#C7A66A] hover:text-[#111111] md:flex"
            >
              Reserve
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="flex text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </nav>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#111111] transition duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <a href="#home" onClick={() => setOpen(false)}>
            <Image
              src="/logo/ember-oak-logo-v2.png"
              alt="Ember & Oak"
              width={220}
              height={70}
              priority
              className="h-auto w-[200px]"
            />
          </a>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-80px)] flex-col px-8 pt-16 pb-10">
          <div className="space-y-5">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-heading text-4xl font-light text-white transition hover:text-[#C7A66A]"
              >
                <span className="mr-4 text-xs text-[#C7A66A]">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex w-fit rounded-full bg-[#C7A66A] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#111111]"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </>
  );
}
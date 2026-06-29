"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [0, 1], [-10, 10]);
  const y = useTransform(mouseY, [0, 1], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ x, y }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.8, ease: "easeOut" }}
        className="absolute -inset-8"
      >
        <img
          src="/images/hero/hero-steak.jpg"
          alt="Ember & Oak fine dining"
          className="h-full w-full scale-110 object-cover opacity-75"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[#111111]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.78)_76%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.75)_0%,transparent_24%,transparent_76%,rgba(0,0,0,.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-[0.035]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A66A]/10 blur-[120px]"
      />

      <div className="relative z-20 mx-auto max-w-[1500px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mb-10 text-[11px] font-bold uppercase tracking-[0.7em] text-[#C7A66A]"
        >
          Crafted by Fire.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.28 }}
          className="font-heading text-[30px] font-light leading-none tracking-[0.09em] sm:text-[72px] md:text-[118px] md:tracking-[0.12em] xl:text-[100px]"
        >
          EMBER <span className="text-[#C7A66A]">&</span> OAK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.52 }}
          className="mt-10 text-[11px] font-bold uppercase tracking-[0.7em] text-white/70"
        >
          Served with Soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.78 }}
          className="mt-12"
        >
          <Button href="#reservation">Reserve a Table</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.15 },
          y: { repeat: Infinity, duration: 1.9, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
          Scroll
        </p>
        <div className="mx-auto h-14 w-px bg-white/25" />
      </motion.div>
    </section>
  );
}
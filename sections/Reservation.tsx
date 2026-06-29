"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function Reservation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleReservation = () => {
    const whatsappNumber = "6283837017301"; // ganti nomor WA kamu

    const message = `🍽️ Reservation Request

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}

I would like to reserve a table.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="reservation" className="bg-[#111111] py-32 md:py-44">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#C7A66A]">
              Reservation
            </p>

            <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
              Reserve your
              <br />
              evening.
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/60">
              Book your table and let us prepare an unforgettable dining
              experience crafted with warmth, detail, and intention.
            </p>
          </div>

          <form className="border border-white/10 bg-[#181818] p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="input-premium"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="input-premium"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="input-premium"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                className="input-premium"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

              <input
                className="input-premium md:col-span-2"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleReservation}
              className="mt-8 w-full rounded-full bg-[#C7A66A] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#111111] transition hover:-translate-y-1 hover:bg-[#D8B875]"
            >
              Reserve Now →
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
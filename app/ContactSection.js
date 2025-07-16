"use client";
import { useState } from "react";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section id="contact" className="w-full flex flex-col items-left justify-left">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 w-full">
          <span className="text-[#fdb86b] text-lg sm:text-xl font-medium">03.</span>
          <span className="text-[#fdb86b] text-lg sm:text-xl font-medium">Contact Me</span>
          <div className="hidden sm:block flex-1 h-px bg-[#b3b3b3] ml-4" />
        </div>
        <div className="w-full">
        <h2 className="text-2xl sm:text-4xl text-[#fdb86b] font-medium mb-6 ">I’d love to hear if you see a fit!</h2>
        <p className="text-base sm:text-lg text-[#e6e6e6] mb-10 text-center">I'm seeking opportunities to leverage my experience for impactful contributions.</p>
        <div className="flex justify-end">
          <button
            type="button"
            className="mt-2 px-6 sm:px-8 py-3 rounded border border-[#fdb86b] text-[#fdb86b] text-xl sm:text-2xl font-medium transition hover:bg-[#fdb86b] hover:text-[#0a1629] shadow-[0_0_16px_#fdb86b] cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Contact Me
          </button>
        </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative">
            <ContactForm />
            <button
              type="button"
              className="absolute top-2 right-2 text-[#fdb86b] text-xl font-bold bg-transparent border-none cursor-pointer"
              aria-label="Close form"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

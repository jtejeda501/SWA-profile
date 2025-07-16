import { useState } from "react";
import ContactAlertModal from "./ContactAlertModal";
import { ContactForm } from "@/components/ui/ContactForm";

export default function Navbar({ showAllSections }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[#0a1629]/60 flex flex-col min-[660px]:flex-row min-[660px]:justify-between min-[660px]:items-center px-4 sm:px-8 pt-8 pb-4 gap-4">
      {/* Logo at the left */}
      <div className="flex items-center min-[660px]:mb-0 mb-2">
        <button
          className="border-2 border-[#fdb86b] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#fdb86b] transition hover:bg-[#fdb86b] hover:text-[#0a1629] group cursor-pointer"
          aria-label="Scroll to top"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              const main = document.querySelector('main');
              if (main) main.focus();
            }
          }}
        >
          <span className="text-[#fdb86b] font-bold text-lg group-hover:text-[#0a1629] transition">JT</span>
        </button>
      </div>
      {/* Burger button for <660px */}
      <button
        className="min-[660px]:hidden absolute right-6 top-8 z-30 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="block w-7 h-1 bg-[#fdb86b] rounded mb-1 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
        <span className={`block w-7 h-1 bg-[#fdb86b] rounded mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className="block w-7 h-1 bg-[#fdb86b] rounded transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
      </button>
      {/* Nav and Resume: submenu on mobile, inline on desktop */}
      <div className="min-[660px]:flex min-[660px]:flex-row min-[660px]:items-center min-[660px]:gap-0 flex-col w-full min-[660px]:justify-end">
        {/* Desktop nav and Resume aligned right */}
        <div className="hidden min-[660px]:flex items-center gap-4 sm:gap-8">
          <nav className="flex gap-4 sm:gap-8 text-[#fdb86b] font-medium text-base w-auto">
            <a href="#about" className="hover:underline" onClick={showAllSections}>01. About Me</a>
            <a href="#work" className="hover:underline" onClick={showAllSections}>02. Work</a>
            <a href="#contact" className="hover:underline" onClick={showAllSections}>03. Contact Me</a>
          </nav>
          <button
            type="button"
            className="px-6 py-2 rounded border border-[#fdb86b] text-[#fdb86b] font-medium shadow-[0_0_16px_#fdb86b] hover:bg-[#fdb86b] hover:text-[#0a1629] transition ml-8"
            onClick={() => setShowModal(true)}
          >
            Resume
          </button>
        </div>
        {/* Mobile submenu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#0a1629]/95 z-20 flex flex-col items-center justify-center gap-8 min-[660px]:hidden animate-fade-in">
            <nav className="flex flex-col gap-6 text-[#fdb86b] font-medium text-xl items-center">
              <a href="#about" className="hover:underline" onClick={() => { setMenuOpen(false); showAllSections(); }}>01. About Me</a>
              <a href="#work" className="hover:underline" onClick={() => { setMenuOpen(false); showAllSections(); }}>02. Work</a>
              <a href="#contact" className="hover:underline" onClick={() => { setMenuOpen(false); showAllSections(); }}>03. Contact Me</a>
            </nav>
            <button
              type="button"
              className="px-8 py-3 rounded border border-[#fdb86b] text-[#fdb86b] font-medium shadow-[0_0_16px_#fdb86b] hover:bg-[#fdb86b] hover:text-[#0a1629] transition text-center"
              onClick={() => {
                setMenuOpen(false);
                setShowModal(true);
              }}
            >
              Resume
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative">
            <ContactAlertModal 
                onClose={() => setShowModal(false)}
                onContactForm={() => setShowForm(true)} 
            />
          </div>
        </div>
      )}
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
    </header>
  );
}

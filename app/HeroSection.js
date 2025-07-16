export default function HeroSection() {
  return (
    <section className="max-w-2xl w-full flex flex-col gap-8 items-start mb-32  mt-6 text-left">
      <h1 className="text-6xl sm:text-7xl font-bold text-[#e6e6e6] mb-2" style={{fontStyle: 'italic'}}>Julio Tejeda</h1>
      <h3 className="text-3xl text-[#b3b3b3] font-medium mb-12">Full-Stack Developer</h3>
      <p className="text-xl sm:text-2xl text-[#b3b3b3] max-w-xl mt-4">
        I am a Software Developer specializing on building modern Web sites & Enterprise Applications.
        <br/>
        Actively exploring{" "}
        <a
          href="#contact"
          className="text-[#fdb86b] no-underline hover:text-[#fdb86b] focus:outline-none focus:ring-2 focus:ring-[#fdb86b] transition"
        >
          new opportunities
          <span className="align-super text-xs">&bull;</span>
        </a>
      </p>
    </section>
  );
}

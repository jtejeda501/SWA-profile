export default function AboutSection() {
  return (
    <section id="about" className="w-full flex justify-center mb-16">
      <div className="flex w-full max-w-5xl gap-12 items-start mt-16">
        <div className="flex flex-col w-2/3 pt-8 items-start text-left">
          <div className="flex items-center gap-4 mb-8 w-full">
            <span className="text-[#fdb86b] text-xl font-medium">01.</span>
            <span className="text-[#e6e6e6] text-xl font-medium">About Me</span>
            <div className="flex-1 h-px bg-[#b3b3b3] ml-4" />
          </div>
          <div className="text-lg text-[#e6e6e6] mb-6 w-full">
            <p className="mb-4">Hello and Welcome! My name is Julio and I am appasionate creator of web and enterprise applications.<br/>
            My career has been dedicated to delivering effective solutions through agile methodologies and a commitment to continuous learning.</p>
            <p className="mb-4">{`Over the past seven years, I have contributed to multiple projects across retail, financial, and healthcare/insurance industries. 
                I seek the integration of new technologies to drive innovation and enhance system performance. 
                I value sharing knowledge and fostering an environment of growth and continuous improvement.`}</p>
            <div className="mt-6 w-full">
              <span className="font-medium text-[#fdb86b]">Core competencies, which I employ to develop innovative solutions, include:</span>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 text-base w-full">
                <div>
                  <span className="text-[#fdb86b]">&raquo; Java</span><br/>
                  <span className="text-[#fdb86b]">&raquo; Javascript</span><br/>
                  <span className="text-[#fdb86b]">&raquo; TypeScript</span><br/>
                  <span className="text-[#fdb86b]">&raquo; NodeJS</span><br/>
                  <span className="text-[#fdb86b]">&raquo; RESTful</span><br/>
                  <span className="text-[#fdb86b]">&raquo; Docker</span><br/>
                </div>
                <div>
                  <span className="text-[#fdb86b]">&raquo; Spring Boot</span><br/>
                  <span className="text-[#fdb86b]">&raquo; React</span><br/>
                  <span className="text-[#fdb86b]">&raquo; Tailwind CSS</span><br/>
                  <span className="text-[#fdb86b]">&raquo; GitHub Actions</span><br/>
                  <span className="text-[#fdb86b]">&raquo; SQL & NoSQL</span><br/>
                  <span className="text-[#fdb86b]">&raquo; NextJS</span><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: About image intentionally omitted */}
      </div>
    </section>
  );
}

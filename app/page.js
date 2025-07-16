"use client";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import InfiniteScroll from "react-infinite-scroller";
import React from "react";
import Navbar from "./Navbar";


export default function Home() {
  const sectionComponents = [HeroSection, AboutSection, WorkSection, ContactSection];
  const [sectionCount, setSectionCount] = React.useState(0);
  const sectionsToShow = sectionComponents.slice(0, sectionCount);
  const hasMoreSections = sectionCount < sectionComponents.length;
  function loadMoreSections() {
    if (hasMoreSections) {
      setSectionCount(sectionCount + 1)
    }
  }
  function showAllSections() {
    setSectionCount(sectionComponents.length);
  }
  return (
    <div className="min-h-screen bg-[#0a1629] text-[#e6e6e6] font-[family-name:var(--font-geist-sans)]">
      {/* Navbar component */}
      <Navbar showAllSections={showAllSections} />

      {/* Main content with red border container */}
      <main className="flex flex-col items-start justify-start px-8 pt-24">
        <div className="flex flex-col flex-grow min-w-0 max-w-4xl p-8 mx-auto">
          <InfiniteScroll
            // pageStart={2}
            loadMore={loadMoreSections}
            hasMore={hasMoreSections}
          // loader={<div className="text-center py-8 text-[#fdb86b]">Loading...</div>}
          // useWindow={true}
          >
            {sectionsToShow.map((Section, idx) => (
              <div key={idx} className="mb-48">
                <Section />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </main>
    </div>
  );
}

"use client";

import Hero from "@/components/sections/Hero";
import Teammembers from "@/components/sections/Teammembers";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId) {
              setVisibleSections((prev) => new Set(prev).add(sectionId));
            }
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of section is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before section enters viewport
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="scroll-snap-container">
      <Hero isVisible={visibleSections.has("hero")} />
      <Teammembers isVisible={visibleSections.has("team")} />
      <Projects isVisible={visibleSections.has("projects")} />
      <About isVisible={visibleSections.has("about")} />
      <Contact isVisible={visibleSections.has("contact")} />
    </div>
  );
}

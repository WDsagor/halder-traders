// src/components/AnimatedSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getInitialTransform = () => {
      switch (direction) {
        case "left":
          return { x: -100, opacity: 0 };
        case "right":
          return { x: 100, opacity: 0 };
        case "down":
          return { y: 100, opacity: 0 };
        default:
          return { y: 50, opacity: 0 };
      }
    };

    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, getInitialTransform(), {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [direction, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;

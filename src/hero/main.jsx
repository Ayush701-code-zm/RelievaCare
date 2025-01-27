import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import consultationImage from "../assets/img.webp";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const PsychotherapySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    const textElements = element.querySelectorAll(".fade-left");
    const imageElements = element.querySelectorAll(".fade-right");

    // Animate text from the left
    gsap.fromTo(
      textElements,
      { opacity: 0, x: -400 }, // Start slightly from the left
      {
        opacity: 1,
        x: 0, // Move to the original position
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start animation when the section is 80% visible
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image from the right
    gsap.fromTo(
      imageElements,
      { opacity: 0, x: 400 }, // Start slightly from the right
      {
        opacity: 1,
        x: 0, // Move to the original position
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start animation when the section is 80% visible
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12">
      <div className="max-w-[1600px] w-full mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 fade-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Begin Your Journey to Emotional Well-being
            </h1>
            <p className="text-gray-600 mb-6">
              Experience compassionate, evidence-based psychotherapy in a safe
              and supportive environment. We specialize in helping individuals
              overcome anxiety, depression, trauma, and relationship challenges
              through personalized therapeutic approaches.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <Button
                variant="default"
                size="default"
                onClick={() => console.log("Book a Session clicked")}
              >
                Book a Session
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={() => console.log("Our Approach clicked")}
              >
                Our Approach
              </Button>
            </div>
            <div className="mt-8 flex justify-around md:justify-between mx-auto max-w-md md:max-w-none">
              <div className="fade-left">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp start={0} end={15} duration={2.5} />+
                </h3>
                <p className="text-gray-600">Years of Practice</p>
              </div>
              <div className="fade-left">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp start={0} end={1000} duration={2.5} />+
                </h3>
                <p className="text-gray-600">Lives Transformed</p>
              </div>
              <div className="fade-left">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp start={0} end={95} duration={2.5} />%
                </h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 fade-right">
            <img
              src={consultationImage}
              alt="Therapeutic consultation session"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychotherapySection;

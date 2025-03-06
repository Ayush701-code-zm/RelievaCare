import React, { useState } from "react";
// import textContainer from "../assets/icons/textContainer.svg";
// import buttonsContainer from "../assets/icons/Button.svg";
// import button1 from "../assets/icons/Button1.svg";
// import button2 from "../assets/icons/Button2.svg";
// import icon2 from "../assets/icons/icon2.svg";
import icon from "../assets/Icon.svg";
// import image from "../assets/icons/image.svg";
import line from "../assets/Line.svg";
// import text from "../assets/icons/Text.png";
import { Button } from "@/components/ui/button"; // Import Button from shdcn
import { Link } from "react-router-dom";
import RelivaIcon from "../assets/reliva.jpg";

// import logo from "../assets/icons/logoe.png";

const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Desktop Footer Section - visible only on larger screens */}
      <div className="hidden md:block">
        <div className="flex flex-col items-start gap-0 bg-absolutewhite bg-white w-full -mx-[0%] max-w-full">
          {/* Footer Section */}
          <div className="flex flex-col w-full items-start gap-[30px] pt-8 pb-[30px] px-16 relative ">
            <div className="flex items-start justify-between relative self-stretch w-full h-[200] flex-[0_0_auto]">
              {/* Contact Information */}
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img
                      src={RelivaIcon}
                      alt="Reliva Logo"
                      style={{
                        height: "70px",
                        width: "auto",
                        backgroundColor: "transparent",
                      }}
                    />
                    <span className="text-2xl font-semibold px-6 pl-2">
                      RELIVA
                    </span>
                  </Link>
                </div>
                <div className="flex mt-4 flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border inline-flex items-center gap-4 relative flex-[0_0_auto] rounded-md">
                    <img
                      className="relative w-6 h-6"
                      alt="Email Icon"
                      src={icon}
                    />
                    <div className="relative w-fit mt-[-1px] font-sans font-normal text-gray-700 text-lg  tracking-normal whitespace-nowrap">
                      info@exyntra.com
                    </div>
                  </button>
                </div>
              </div>

              {/* Additional Links */}
              <div className="flex w-[807px] items-start gap-[20px] relative">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans-SemiBold',Helvetica] font-semibold text-grey-15 text-xl tracking-[0] ">
                    Products
                  </div>
                  <Link
                    to="/aidna"
                    className="mt-[-1px] relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    AIDNA
                  </Link>
                  <Link
                    to="/chorent"
                    className="relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    Kepela
                  </Link>
                  <Link
                    to="/sephai"
                    className="relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    SephAI
                  </Link>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-semibold text-grey-15 text-xl tracking-[0]  [font-family:'DM_Sans-SemiBold',Helvetica]">
                    About Us
                  </div>
                  <Link
                    to="/preregister"
                    className="mt-[-1px] relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/terms"
                    className="relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    Privacy
                  </Link>
                  <Link
                    to="/aboutus"
                    className="relative self-stretch font-sans font-normal text-gray-400 text-lg  tracking-normal"
                  >
                    Our Stor
                  </Link>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-semibold text-grey-15 text-xl tracking-[0]  [font-family:'DM_Sans-SemiBold',Helvetica]">
                    Social Profiles
                  </div>
                  {/* <div className="flex items-center gap-4">
                    <img
                      className="w-15 h-15"
                      alt="Buttons container"
                      src={buttonsContainer}
                    />
                    <Link
                      to="https://www.instagram.com/exyntra/"
                      target="_blank"
                    >
                      <img className="w-15 h-15" alt="Button 1" src={button1} />
                    </Link>
                    <Link to="https://x.com/exyntra" target="_blank">
                      <img className="w-15 h-15" alt="Button 2" src={button2} />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={line}
            />
            <div className="flex items-center justify-center w-full h-full">
              <p className="font-sans font-normal text-gray-400 text-xl text-center ">
                © {new Date().getFullYear()} EXYNTRA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

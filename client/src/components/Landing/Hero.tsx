import React from "react";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="h-fit min-h-screen flex w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #CCC3FF 0%, #030014 100%)",
      }}
    >
      <div className="flex items-center justify-between w-full px-8 md:px-32 h-screen z-1">
        <div className="flex flex-col items-start gap-6 md:max-w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground -leading-[1.2px] -tracking-[1.2px]">
            Ace Your Next Interview with AI Voice Assistant.
          </h1>
          <p className="text-sm md:text-base max-w-[600px]">
            Practice interviews for any job with our AI voice assistant. Get
            real-time feedback and improve your interview skills from the
            comfort of your home.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/signup">
              <CustomButton variant="secondary" type="button">
                Get Started
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-2/5 -bottom-[50%] rounded-full h-[1000px] w-[1000px] blur-[150px] bg-[#030014]" />
    </div>
  );
};

export default Hero;

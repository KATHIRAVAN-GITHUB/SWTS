import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const words = [
  "textile innovators, mastering cotton ratios for optimal fabric quality..",
  "solution-driven, tackling the cotton-to-cloth puzzle head-on..",
  "tech-savvy problem solvers, refining fabric composition effortlessly..",
  "fabric perfectionists, guaranteeing the ideal cotton blend every time..",
  "your go-to for precision in textile manufacturing..",
];

const TYPING_SPEED = 20;
const ERASING_SPEED = 20;
const DELAY_BEFORE_ERASING = 2000;

const Herosection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      if (charIndex < words[wordIndex].length) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        setTimeout(() => setIsTyping(false), DELAY_BEFORE_ERASING);
      }
    } else {
      if (charIndex > 0) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, ERASING_SPEED);
      } else {
        setIsTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isTyping, wordIndex]);
  return (
    <>
      <div className="mx-auto bg-main">
        <video
          src="https://ik.imagekit.io/kathiravan/SWTS/Hero-bg.mov/ik-video.mp4"
          autoPlay
          loop
          muted
          className="border-black border shadow-2xl rounded-xl"
        />
        <div className="bg-content space-y-4">
          <h1 className="font-[Inter] font-extrabold text-center text-[50px] leading-[52px]">
            Optimize Your Textile Production with Precision!
          </h1>
          <Link
            to="/"
            className="transform transition duration-200 hover:scale-110 font-[Inter] font-medium text-center text-[20px] leading-[32px] p-2 border-yellow-500 border rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="text-4xl font-semibold text-center min-w-[280px]">
        We are
        <span className="relative inline-block text-green-600 ml-2">
          {text}
          <span className="absolute top-0 right-0 w-2 bg-white h-full border-l-2 border-orange-400 animate-blink"></span>
        </span>
      </div>
    </>
  );
};

export default Herosection;

import mobileImg from "../assets/web.png";
import webImg from "../assets/mobile.png";

function Hero() {
  return (
    <header className="w-full min-h-dvh flex flex-col-reverse items-center justify-center md:flex-row md:justify-around md:items-center md:pt-15 md:px-15 px-5 pt-15">
      <div className=" text-white  flex flex-col items-center break-words gap-5 mt-10 md:mr-10 md:items-start">
        <h1 className="uppercase  text-center lg:text-4xl font-extrabold text-3xl font-mono">
          play beyond limits.
        </h1>
        <p className="text-xl">
          Experience gaming like never before with Speedy. Dive into fast-paced
          action, sharpen your skills, and connect with a community that plays
          beyond limits.
        </p>
        <button className="md:w-30 h-10 bg-blue-300 py-2 px-3 rounded-full w-50">
          Get Started
        </button>
      </div>
      <img src={webImg} className="w-auto lg:h-100 sm:h-90 hidden md:block " />

      <img src={mobileImg} className="sm:w-130 w-120 md:hidden " />
    </header>
  );
}

export default Hero;

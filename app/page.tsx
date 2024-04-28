import { gideonRoman } from "./utils/fonts";

export default function Home() {
  return (
    <main className="bg-base-100 overflow-y-hidden">
      <section className="relative">
        <h2
          className={`text-2xl sm:text-3xl md:text-5xl   text-base-content z-10 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${gideonRoman.className}`}
        >
          #OnCloudRambaran2025
        </h2>
        <video
          className="relative opacity-60 h-screen object-cover w-full"
          src="/flowers.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
      </section>
    </main>
  );
}

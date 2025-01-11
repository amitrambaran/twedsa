"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/ui/Timeline";
import EventCard from "@/components/ui/EventCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-08-22T14:30:00Z");

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(countdown);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-[#B31E56]">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#FED6BD] z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Background Color */}
      <div className="absolute inset-0 bg-[#B31E56]"></div>

      <section className="flex items-start justify-between bg-[#B31E56]">
        {/* Image in the top left corner */}
        <div className="p-4 z-10">
          <div className="animate-pulse animate-glow">
            <Image
              src="/om.png"
              alt="om"
              width={100}
              height={200}
              layout="intrinsic"
            />
          </div>
        </div>

        {/* Centered chandelier image */}
        <div className="px-4 flex-grow flex justify-center z-10">
          <Image
            src="/chandelier.png"
            alt="chandelier"
            width={450}
            height={1000}
            layout="intrinsic"
          />
        </div>

        {/* Image in the top right corner */}
        <div className="p-4 z-10">
          <div className="animate-pulse animate-glow">
            <Image
              src="/om.png"
              alt="om"
              width={100}
              height={200}
              layout="intrinsic"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#B31E56] relative flex flex-col items-center py-6 justify-start h-full z-10 text-[#FED6BD]">
        <p className="block text-4xl text-center px-4 greatvibes-font">
          You are cordially invited to the wedding celebration of
        </p>
        <p className="block my-6 text-6xl animate-fadein greatvibes-font">
          Tricia & Amit
        </p>
        {/* Left-aligned date and location */}
        <div className="pb-6 flex justify-between text-4xl items-end noto-font">
          <p className="py-1 border-t-2 border-b-2 border-[#FED6BD]">AUG</p>
          <p className="px-4 text-6xl"> 22 & 23 </p>
          <p className="py-1 border-t-2 border-b-2 border-[#FED6BD]">2025</p>
        </div>
        <div className="flex flex-col items-center text-xl font-serif">
          <p> 📍 </p>
          <p>Triveni Mandir</p>
          <p className="">Pearson Convention Centre</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex noto-font">
          <p className="flex flex-col items-center px-4 pt-4 text-4xl">
            <span className="text-6xl">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 text-4xl">
            <span className="text-6xl">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 text-4xl">
            <span className="text-6xl">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 text-4xl">
            <span key={timeLeft.seconds} className="text-6xl">
              {timeLeft.seconds}
            </span>
            <span className="text-sm">Seconds</span>
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="my-10 px-6 py-6 text-lg bg-[#F8E6D1] text-amber-950 rounded-lg font-semibold
          hover:bg-[#e4d1b8] hover:text-amber-900 hover:shadow-lg hover:scale-110
          focus:outline-none transition-transform duration-200 ease-in-out"
            >
              RSVP Here
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] h-[90vh]">
            <div
              className="w-11/12 h-full max-h-full overflow-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <iframe
                id="google-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfMqUsa0LrbCdvAivu5NZT6zn0nZM1wcLF4lyOvm1oJZTmQxw/viewform?embedded=true"
                className="w-full h-full pl-8"
                style={{
                  border: "none",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                title="RSVP Form"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>

        <Timeline />

        {/* Preferred Accommodations Section */}
        <section className="m-16 text-center">
          <h2 className="text-xl font-bold mb-4">
            Preferred Rate Accommodations
          </h2>
          <p className="text-md mb-4">
            We have arranged discounted rates at the Hampton Inn Hotel for your
            convenience!
          </p>
          <a
            href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=YTOBMHX&groupCode=CHHMRW&arrivaldate=2025-08-21&departuredate=2025-08-24&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink&fromId=HILTONLINKDIRECT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-cyan-200 underline hover:text-[#e4d1b8]"
          >
            Click here to book your stay
          </a>
        </section>

        {/* Our Story Section */}
        <section className="text-center max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>

          <p className="text-md mb-4">
            Dearest Family and Friends,
            <br />
            <br />
            Welcome to our special corner of the internet, where love, laughter,
            and happily ever afters come to life. We are thrilled to share our
            journey with you as we prepare to embark on the most magical
            adventure of all—our wedding day! Our story began in the digital
            realm of Tinder, where a simple swipe right led to a connection that
            would change our lives forever. It was July 2020 when our paths
            first crossed, igniting a spark that would soon blossom into
            something extraordinary. From our very first date at Starbucks,
            where coffee and conversation flowed effortlessly, to the
            exhilarating adventure of an escape room, where teamwork and
            laughter brought us closer together, every moment has been a
            cherished chapter in our love story. On September 12, 2020, a
            milestone etched itself into our hearts as Amit asked Tricia to be
            their girlfriend, marking the beginning of a beautiful journey
            filled with love, laughter, and countless memories. But fate had
            even grander plans for us. Exactly three years later, on the
            anniversary of that unforgettable day, Amit knelt before Tricia,
            ring in hand, and asked for forever. In that moment, surrounded by
            the echoes of our past and the promise of our future, we knew
            without a doubt that our love was meant to last a lifetime.
            <br />
            <br />
            As we prepare to say &quot;I do&quot; and exchange vows surrounded
            by our nearest and dearest, we are filled with gratitude for each
            and every one of you who has been a part of our journey. Your love,
            support, and presence mean the world to us, and we can&apos;t wait
            to celebrate this joyous occasion with all of you. So, explore our
            website, learn more about our love story, and get ready to join us
            as we embark on the next chapter of our lives together. We
            can&apos;t wait to create unforgettable memories with you all on our
            wedding day!
            <br />
            <br />
            With love and excitement,
            <br />
            Tricia & Amit
          </p>
          <p className="text-md mb-4 italic">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honour us with a gift, a monetary gift would be very
            welcome.
          </p>
        </section>
      </section>
    </main>
  );
}

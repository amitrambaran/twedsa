"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/ui/Timeline";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function Home() {
  // Initial state to prevent layout shift
  const [timeLeft, setTimeLeft] = useState({
    days: Math.floor(
      (new Date("2025-08-22T14:30:00Z").getTime() - Date.now()) /
        (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      ((new Date("2025-08-22T14:30:00Z").getTime() - Date.now()) /
        (1000 * 60 * 60)) %
        24
    ),
    minutes: Math.floor(
      ((new Date("2025-08-22T14:30:00Z").getTime() - Date.now()) /
        (1000 * 60)) %
        60
    ),
    seconds:
      Math.floor(
        (new Date("2025-08-22T14:30:00Z").getTime() - Date.now()) / 1000
      ) % 60,
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
    <main className="relative">
      <div className="stars"></div>
      <div className="twinkling"></div>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#D8B480] z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Background Color */}
      <div className="absolute inset-0"></div>

      <section className="flex items-start justify-between">
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
      <section className="relative flex flex-col items-center py-6 justify-start h-full z-10 text-[#D8B480]">
        <Image src="/ganesha.png" alt="logo" width={70} height={70} />

        <p className="block text-2xl text-center font-bold p-4 font-cormorant">
          You are cordially invited to the wedding ceremony of
        </p>
        <p className="block text-7xl md:text-8xl animate-fadein font-luxuriousScript">
          Tricia & Amit
        </p>
        <div className="flex flex-col items-center text-xl font-cormorant">
          <p className="text-4xl">08.22.2025</p>
          <p className="font-bold mb-4">📍 Triveni Mandir</p>
          <p className="text-4xl">08.23.2025</p>
          <p className="font-bold">📍 Pearson Convention Centre</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex font-cormorant contain-layout">
          <p className="flex flex-col items-center px-4 pt-4 min-w-[100px]">
            <span className="text-4xl md:text-6xl w-10 md:w-16 text-center h-16 flex items-center justify-center">
              {timeLeft.days}
            </span>
            <span className="text-sm mt-2">Days</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 min-w-[100px]">
            <span className="text-4xl md:text-6xl w-10 md:w-16 text-center h-16 flex items-center justify-center">
              {timeLeft.hours}
            </span>
            <span className="text-sm mt-2">Hours</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 min-w-[100px]">
            <span className="text-4xl md:text-6xl w-10 md:w-16 text-center h-16 flex items-center justify-center">
              {timeLeft.minutes}
            </span>
            <span className="text-sm mt-2">Minutes</span>
          </p>
          <p className="flex flex-col items-center px-4 pt-4 min-w-[100px]">
            <span
              key={timeLeft.seconds}
              className="text-4xl md:text-6xl w-10 md:w-16 text-center h-16 flex items-center justify-center"
            >
              {timeLeft.seconds}
            </span>
            <span className="text-sm mt-2">Seconds</span>
          </p>
        </div>

        <p className="font-cormorant font-bold text-xl mt-4">
          #OnCloudRambaran2025
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-10 mb-5 px-6 py-6 font-cormorant font-bold text-lg bg-[#D8B480] text-slate-900 rounded-lg
          hover:bg-[#e4d1b8] hover:text-amber-900 hover:shadow-lg hover:scale-110
          focus:outline-none transition-transform duration-200 ease-in-out animate-pulse animate-glow"
            >
              RSVP Here
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] h-[90vh]">
            <div
              className="w-full h-full max-h-full overflow-auto mt-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <iframe
                id="google-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfMqUsa0LrbCdvAivu5NZT6zn0nZM1wcLF4lyOvm1oJZTmQxw/viewform?embedded=true"
                className="w-full h-full pb-8"
                style={{
                  border: "none",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                title="RSVP Form"
              ></iframe>
            </div>
          </DialogContent>

          <div className="opacity-90">
            <AddToCalendarButton
              name="Tricia & Amit's Wedding Ceremony"
              options={["Apple", "Google", "iCal"]}
              location="Triveni Mandir/Pearson Convention Centre"
              startDate="2025-08-22"
              endDate="2025-08-23"
              startTime="14:30"
              endTime="23:59"
              timeZone="America/Toronto"
              label="Add to Calendar"
              styleLight="--font: Cormorant; --btn-background: #2F4F4F; --btn-text: #D8B480;"
              buttonStyle="default"
              trigger="click"
              size="1"
            />
          </div>
        </Dialog>

        <Timeline />

        {/* Preferred Accommodations Section */}
        <section className="font-cormorant text-xl mx-8 mt-24 mb-16 text-center">
          <h2 className="text-xl font-extrabold mb-4">
            Preferred Rate Accommodations
          </h2>
          <p className="text-base font-semibold mb-4">
            We have arranged discounted rates at the Hampton Inn Hotel for your
            convenience!
          </p>
          <a
            href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=YTOBMHX&groupCode=CHHMRW&arrivaldate=2025-08-21&departuredate=2025-08-24&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink&fromId=HILTONLINKDIRECT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-cyan-200 underline hover:text-[#e4d1b8]"
          >
            Click here to book your stay
          </a>
        </section>

        {/* Our Story Section */}
        <section className="font-cormorant font-semibold text-center max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>

          <p className="text-md m-8">
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
            his girlfriend, marking the beginning of a beautiful journey filled
            with love, laughter, and countless memories. But fate had even
            grander plans for us. Exactly three years later, on the anniversary
            of that unforgettable day, Amit knelt before Tricia, ring in hand,
            and asked for forever. In that moment, surrounded by the echoes of
            our past and the promise of our future, we knew without a doubt that
            our love was meant to last a lifetime.
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
          <p className="text-sm m-8 italic">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honour us with a gift, a monetary gift would be very
            welcome.
          </p>
        </section>
      </section>
    </main>
  );
}

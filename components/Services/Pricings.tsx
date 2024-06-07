import { Button } from '../ui/button';

export default function Pricings() {
  return (
    <section className="py-6 flex flex-row items-center justify-center flex-wrap gap-8 sm:gap-4">
      {/* Essential */}
      <div className="w-[370px] flex flex-col items-center gap-y-4 shadow-2xl py-6 px-8">
        <h2 className="font-semibold text-2xl">Essential</h2>
        <div className="bg-[#fefefe] rounded-full shadow-md w-[100px] aspect-square relative">
          <img
            src="./black-flag.svg"
            className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-40%] z-10"
          />
          <img
            src="./white-flag.svg"
            className="absolute top-1/2 left-1/2 translate-x-[-60%] translate-y-[-60%]"
          />
        </div>
        <div className="py-2">
          <span className="font-semibold">php</span>
          <span className="font-bold text-3xl">0</span>
        </div>
        <div className="flex flex-col items-center gap-y-4 font-semibold">
          <p className="text-center">Features:</p>
          <p className="text-center">Standard Portfolio Templates</p>
          <p className="text-center">
            Basic Customization Options (picture, cover photo)
          </p>
          <p className="text-center">Social Media Links Integration</p>
          <p className="text-center">Mobile and Desktop Friendly</p>
          <p className="text-center">Secure Cloud Hosting</p>
        </div>
        <Button className="rounded-2xl w-[180px] font-bold">BASIC</Button>
        <div className="w-full flex flex-col gap-y-2 pt-2">
          <p className="font-bold">
            <span className="text-custom-green">Ideal</span> for Getting
            Started:
          </p>
          <p className="text-[12px]">
            The Essential package is our base offering that comes free with
            every NFC card purchase. It&apos;s designed to cover all the fundamental
            needs of our users, allowing them to effortlessly display their
            work, share social media links, and create a professional online
            presence.
          </p>
        </div>
      </div>
      {/* Luxe */}
      <div className="w-[370px] flex flex-col items-center gap-y-4 shadow-2xl py-6 px-8 bg-custom-black text-custom-gray relative">
        <img src="./luxe.svg" className="absolute top-0 right-10" />
        <h2 className="font-semibold text-2xl">LUXE</h2>
        <div className="bg-[#222222] rounded-full shadow-md w-[100px] aspect-square relative">
          <img
            src="./diamond.svg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="./luxe-medal.svg"
            className="absolute bottom-0 right-0 translate-y-1 -translate-x-1"
          />
        </div>
        <div className="py-2">
          <span className="font-semibold">php</span>
          <span className="font-bold text-3xl text-white">5000.00</span>
          <span className="font-semibold">/mo.</span>
        </div>
        <div className="flex flex-col items-center gap-y-4 font-semibold">
          <p className="text-center">All Essential features, plus</p>
          <p className="text-center">Fully Customizable Portfolio Templates</p>
          <p className="text-center">
            Advanced Animations and Interactive Elements
          </p>
          <p className="text-center">
            Priority Support and Consultation for Portfolio Setup
          </p>
          <p className="text-center">Maximum Cloud Storage Capacity</p>
        </div>
        <Button className="rounded-2xl w-[180px] font-bold bg-custom-green text-custom-black">
          CHOOSE THE PLAN
        </Button>
        <div className="w-full flex flex-col gap-y-2 pt-2">
          <p className="font-bold text-custom-green">
            Ultimate Customization and Engagement
          </p>
          <p className="text-[12px]">
            The Luxe package is the epitome of personalization and
            sophistication. It&apos;s designed for users who demand the highest level
            of customization and the most engaging, animated presentations for
            their portfolios.
          </p>
        </div>
      </div>
      {/* Prestige */}
      <div className="w-[370px] flex flex-col items-center gap-y-4 shadow-2xl py-6 px-8">
        <h2 className="font-semibold text-2xl">Prestige</h2>
        <div className="bg-[#fefefe] rounded-full shadow-md w-[100px] aspect-square relative">
          <img
            src="./rocket-black.svg"
            className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-40%] z-10"
          />
          <img
            src="./rocket-green.svg"
            className="absolute top-1/2 left-1/2 translate-x-[-60%] translate-y-[-60%]"
          />
        </div>
        <div className="py-2">
          <span className="font-semibold">php</span>
          <span className="font-bold text-3xl">3500.00</span>
          <span className="font-semibold text-custom-textGray">/mo</span>
        </div>
        <div className="flex flex-col items-center gap-y-4 font-semibold">
          <p className="text-center">All Essential features, plus</p>
          <p className="text-center">
            Premium Portfolio Templates with Enhanced Styling Options
          </p>
          <p className="text-center">
            Light Animations for a Dynamic User Experience
          </p>
          <p className="text-center">Additional Customization Features</p>
          <p className="text-center">Increased Cloud Storage</p>
        </div>
        <Button className="rounded-2xl w-[180px] font-bold">
          CHOOSE THE PLAN
        </Button>
        <div className="w-full flex flex-col gap-y-2 pt-2">
          <p className="font-bold text-custom-green">
            For Elevated Presentation
          </p>
          <p className="text-[12px]">
            The Essential package is our base offering that comes free with
            every NFC card purchase. It&apos;s designed to cover all the fundamental
            needs of our users, allowing them to effortlessly display their
            work, share social media links, and create a professional online
            presence.
          </p>
        </div>
      </div>
    </section>
  );
}

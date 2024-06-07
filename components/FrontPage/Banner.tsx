'use client'
import useMediaQuery from '@/hooks/useMediaQuery';
import BannerActions from './BannerActions';
import MobileBanner from './responsiveDesign/MobileBanner';
import PaymentLogos from './PaymentLogos';

export default function Banner() {
  const isMobile = useMediaQuery('(min-width: 786px)');
  
  return (
    <section className=" container pb-20 lg:pb-36">
      {!isMobile ? (
        <MobileBanner />
      ) : (
        <div className="hidden items-end justify-center gap-4 md:flex  ">
          <div className="flex flex-col gap-2">
            <BannerActions />
            <PaymentLogos />
          </div>
          <div className="flex flex-col">
            <p className="flex flex-col gap-1 font-bold text-custom-green lg:text-6xl ">
              Tap Up
              <span className="text-custom-black">Card</span>
            </p>
            <img
              src="./3-cards.svg"
              alt="Card Stack"
              width={500}
              className="-top-20 md:relative"
            />
          </div>
          <div className="relative flex flex-col justify-end">
            <img src="./chrome-card.svg" alt="Chrome Card" width={450} />
            <p className="absolute font-bold text-custom-black lg:text-6xl">
              is here.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

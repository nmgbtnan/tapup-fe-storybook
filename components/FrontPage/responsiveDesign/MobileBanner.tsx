import Image from 'next/image';
import BannerActions from '../BannerActions';

export default function MobileBanner() {
  return (
    <div className="flex flex-col items-center space-y-8 lg:hidden">
      <BannerActions />
      <img src="cardstack.svg" alt="cards" className="md:w-[900px] " />
    </div>
  );
}

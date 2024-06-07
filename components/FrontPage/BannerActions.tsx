import { Button } from '../ui/button';

export default function BannerActions() {
  return (
    <div className=" flex flex-col gap-y-7 md:w-2/3 lg:w-96">
      <div className="flex flex-col space-y-2 text-center lg:text-start ">
        <h2 className="text-3xl font-bold tracking-[-2px] text-custom-green">
          Tap to Connect
        </h2>
        <p className="text-custom-textGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          porro. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="flex justify-center gap-x-4 lg:justify-start ">
        <Button>Get a card</Button>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  );
}

import { Button } from '../ui/button';

type CustomCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  total: number;
};

export default function CustomCards({
  image,
  price,
  description,
  name,
  total,
}: CustomCardProps) {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
      <p className="text-lg font-[600]">{name}</p>
      <img src={image} width={250} />
      <div className="flex flex-col gap-2">
        <div className="flex w-[200px] flex-row items-center justify-between font-[600]">
          <p className="text-[20px]">Php {price.toFixed(2)}</p>
          <p>{total}</p>
        </div>
        <p className="text-lg text-custom-textGray">{description}</p>
        <div className="flex flex-row items-center gap-4 font-[500]">
          <Button size="icon" className="bg-[#ededed]">
            <img src="./cart-icon-black.svg" />
          </Button>
          <p>Add To Cart</p>
        </div>
      </div>
    </div>
  );
}

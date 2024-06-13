import Image from "next/image";
import { Button } from "../ui/button";

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
      <Image
        alt="Card Image"
        src={image}
        priority
        width={250}
        height={250}
        className="w-auto"
      />
      <div className="flex flex-col gap-2">
        <div className="flex w-[200px] flex-row items-center justify-between font-[600]">
          <p className="text-[20px]">Php {price.toFixed(2)}</p>
          <p>{total}</p>
        </div>
        <p className="text-lg text-custom-textGray">{description}</p>
        <div className="flex flex-row items-center gap-4 font-[500]">
          <Button size="icon" className="bg-[#ededed]">
            <Image
              alt="Cart Icon"
              src="./cart-icon-black.svg"
              height={20}
              width={20}
            />
          </Button>
          <p>Add To Cart</p>
        </div>
      </div>
    </div>
  );
}

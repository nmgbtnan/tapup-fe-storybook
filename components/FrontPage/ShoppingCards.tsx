import Image from "next/image";
import { Button } from "../ui/button";

const SHOPPING_CARDS = [
  {
    image: "./shopping-card-black.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./shopping-card-white.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./shopping-card-ocean.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./shopping-card-chrome.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./shopping-card-yellow.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./shopping-card-blue.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
] as const;

export default function ShoppingCards() {
  return (
    <section className="container py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl font-[700] md:text-5xl">
          SHOPPING CARD
        </h1>
        <p className="text-center text-sm text-custom-textGray md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="hidden gap-16 md:grid md:grid-cols-2 lg:grid-cols-3">
          {SHOPPING_CARDS.map((c, i) => {
            return <ShoppingCard {...c} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

type ShoppingCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  total: number;
};

function ShoppingCard({
  image,
  name,
  price,
  description,
  total,
}: ShoppingCardProps) {
  return (
    <div className="mt-14 space-y-12">
      <p className="text-center text-lg font-bold">{name}</p>
      <div>
        <Image src={image} width={300} height={300} alt="Tapup-Card" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex w-[200px] flex-row items-center justify-between font-[600]">
          <p className="text-[20px]">Php {price.toFixed(2)}</p>
          <p>{total}</p>
        </div>
        <p className="text-lg text-custom-textGray">{description}</p>
        <div className="flex flex-row items-center gap-4 font-[500]">
          <Button size="icon">
            <Image
              alt="Cart Icon"
              src="./cart-icon.svg"
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

// RESPONSIVE MOBILE

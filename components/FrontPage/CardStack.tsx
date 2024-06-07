export default function CardStack() {
  return (
    <div className="absolute left-1/2 top-[200px] w-[300px] -translate-x-1/2 scale-75 sm:scale-100">
      <img
        src="./yellow-card.svg"
        width={300}
        className="absolute -left-16 z-10"
      />
      <img
        src="./ocean-card.svg"
        width={300}
        className="absolute -top-24 left-0 z-20"
      />
      <img
        src="./blue-card.svg"
        width={300}
        className="absolute left-16 z-30"
      />
      <img
        src="./card-shadow.svg"
        width={300}
        className="z-5 absolute -left-6 top-[220px]"
      />
    </div>
  );
}

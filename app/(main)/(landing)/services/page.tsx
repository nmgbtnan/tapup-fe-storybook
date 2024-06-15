import Introduction from "@/components/Services/Introduction";
import Pricings from "@/components/Services/Pricings";

export default function Services() {
  return (
    <div>
      <Introduction />
      <Pricings />
      <div className="flex justify-center py-6 px-4">
        <p className="max-w-[600px] text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. the printing and typesetting industry.{" "}
        </p>
      </div>
    </div>
  );
}

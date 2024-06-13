import Image from "next/image";

export default function PaymentLogos() {
  return (
    <div className="flex items-center">
      <Image
        alt="Amazon Logo"
        src="./amazon-logo.svg"
        className="w-[106px]"
        width={100}
        height={100}
      />
      <Image
        alt="Paypal Logo"
        src="./paypal-logo.svg"
        className="w-[141px] -translate-x-2 -translate-y-[2px]"
        width={100}
        height={100}
      />
      <Image
        alt="ApplePay Logo"
        src="./applepay-logo.svg"
        className="w-[186px] -translate-x-16 -translate-y-[2px]"
        width={100}
        height={100}
      />
    </div>
  );
}

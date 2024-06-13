import Image from "next/image";

export default function NotFoundLogo() {
  return (
    <div className="center flex flex-col items-center px-4 py-6">
      <div className="">
        <Image
          alt="Not found Image"
          src="/not-found.svg"
          className="flex w-[500px] justify-center px-4 py-6"
          height={100}
          width={100}
        />
      </div>
      <h1 className="text-3xl font-bold">Page Not Found. </h1>
      <span className="md:text-base text-sm text-center mt-4">
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </span>
    </div>
  );
}

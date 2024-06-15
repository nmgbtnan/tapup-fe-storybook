import Image from "next/image";

export default function Introduction() {
  return (
    <section className="px-4 py-12">
      <div className="flex flex-col justify-center items-center w-full gap-y-6">
        <p className="text-4xl font-[500] text-center">Ready to get started?</p>
        <div className="relative ">
          <Image alt="Line image" src="./line.svg" height={300} width={300} />
        </div>
        <p className="max-w-[650px] leading-4 text-center">
          Tap Up&apos;s Individual, Corporation, and Enterprise packages are
          designed to meet you where you are and take your professional
          networking to the next level.
        </p>
        <div className="relative w-[400px] aspect-square">
          <Image alt="worker image" src="./worker.svg" fill />
        </div>
      </div>
    </section>
  );
}

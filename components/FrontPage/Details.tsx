export default function Details() {
  return (
    <section className="bg-custom-gray pb-20 pt-10">
      <div className="container flex flex-col items-center">
        <div className="flex w-full flex-col gap-4 px-4 lg:w-[1000px]">
          <div className="text-3xl font-[500] text-custom-black">
            <h3>ESTABLISHING MEANINGFUL CONNECTIONS</h3>
            <h3>WITH JUST A SINGLE TAP.</h3>
          </div>
          <p className="w-full max-w-[450px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-10 md:flex-row md:items-start md:justify-normal">
          <div className="flex h-[400px] max-w-[300px] basis-1/3 flex-col gap-y-4">
            <div className="basis-1/2 rounded-md bg-custom-black px-6 py-8 text-white shadow-md">
              <p className="pb-4 text-lg">Custom Made Card</p>
              <p className="text-[#b4b4b4]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="basis-1/2 rounded-md bg-white px-6 py-8 text-custom-black shadow-md">
              <p className="pb-4 text-lg">Custom Made Card</p>
              <p className="text-custom-textGray">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
          </div>
          <div className="flex h-[400px] max-w-[300px] basis-1/3 flex-col justify-end rounded-md bg-custom-black px-6 py-8 text-white shadow-md">
            <p className="pb-4 text-lg">Custom Made Card</p>
            <p className="text-[#b4b4b4]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="flex h-[400px] max-w-[300px] basis-1/3 flex-col gap-y-4">
            <div className="flex basis-1/2 flex-row gap-x-4">
              <div className="rounded-md bg-white px-4 py-6 text-custom-black shadow-md">
                <p className="pb-4 text-lg">Custom Made</p>
                <p className="text-custom-textGray">Lorem Ipsum is simply </p>
              </div>
              <div className="rounded-md bg-custom-black px-4 py-6 text-white shadow-md">
                <p className="pb-4 text-lg">Custom Made</p>
                <p className="text-[#b4b4b4]">Lorem Ipsum is simply </p>
              </div>
            </div>
            <div className=" basis-1/2 rounded-md bg-custom-black px-6 py-8 text-white shadow-md">
              <p className="pb-4 text-lg">Custom Made Card</p>
              <p className="text-[#b4b4b4]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

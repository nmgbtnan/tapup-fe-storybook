export default function Error404Logo() {
  return (
    <div className="center flex flex-col items-center px-4 py-6">
      <div className="">
        <img
          src="/404.svg"
          className="flex w-[500px] justify-center px-4 py-6"
        />
      </div>
      <h1 className="text-3xl font-bold">Oops! What are you doing here? </h1>
      <span>
        Looks like this business card took a detour! But fear not, your
        financial future is still on track. Check out our website or app for all
        things digital business banking.
      </span>
    </div>
  );
}

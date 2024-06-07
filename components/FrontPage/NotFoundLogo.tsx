export default function NotFoundLogo() {
  return (
    <div className="center flex flex-col items-center px-4 py-6">
      <div className="">
        <img
          src="/not-found.svg"
          className="flex w-[500px] justify-center px-4 py-6"
        />
      </div>
      <h1 className="text-3xl font-bold">Page Not Found. </h1>
      <span>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </span>
    </div>
  );
}

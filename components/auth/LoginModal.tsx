import { useModalState } from '@/hooks/modalState';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Login() {
  const { closeLoginModal, openForgotPasswordModal, openRegisterUserModal } =
    useModalState();

  return (
    <div className="flex md:flex-1 z-[3000] rounded-xl mt-24">
      <div className="z-10 absolute w-[400px] h-[180px] left-[50%] sm:right-auto scale-50 sm:scale-100 translate-y-[-45%] sm:-translate-y-[30%] sm:-translate-x-[10%]">
        <img
          src="./login-cards.png"
          className="z-10 absolute top-0 left-0 -translate-x-[-50%]"
        />
      </div>

      {/* left side */}
      <div className="bg-gray-100 p-2 rounded-l-xl">
        <button
          className="ml-auto hover:text-green-600 cursor-pointer"
          onClick={closeLoginModal}
        >
          X
        </button>
        <div className="p-16 w-[26rem] ">
          <div className="flex justify-center">
            <img src="./logo-tapup-dark.svg" width={50} />
          </div>
          <h1 className="font-bold mb-4 text-4xl">Login</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Email</label>
              <Input placeholder="Enter your Email" />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <Input placeholder="******" />
              <p
                className="ml-auto hover:text-green-600 cursor-pointer mt-1"
                onClick={openForgotPasswordModal}
              >
                Forgot Password?
              </p>
            </div>

            <Button className="bg-green-600 text-white">Login</Button>
            <p>
              Don’t have an account?{' '}
              <span
                className="cursor-pointer text-green-600"
                onClick={openRegisterUserModal}
              >
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* right side - hidden on small screens */}
      <div className="hidden sm:block p-16 w-[25rem] md:flex flex-col relative">
        <img
          src="./login-bg-texture.png"
          className="absolute inset-0 w-full h-full bg-green-500 rounded-r-xl object-cover"
          alt="Background Image"
        />
        <h1 className="text-white font-roboto text-2xl font-normal mt-auto leading-[120%] w-[15rem] z-10">
          Establishing meaningful connections with just a single tap
        </h1>
        <p className="text-white font-roboto text-sm font-normal leading-[120%] mt-2 z-10">
          Login to access your account
        </p>
      </div>
    </div>
  );
}

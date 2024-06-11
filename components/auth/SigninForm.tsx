"use client";
// import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Axios from "@/lib/Axios";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SigninForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await Axios.post("/auth/login", values).then((res) => {
        if (res) {
          router.push("/dashboard");
        }
      });
      reset();
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="flex">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-l-xl bg-gray-100 max-w-lg"
        >
          {/* left side */}
          <div className="w-[32rem] p-12 ">
            <div className="flex items-center justify-center">
              <img src="./logo-tapup-dark.svg" width={150} alt="tapup-brand" />
            </div>
            <h1 className="mb-2 mt-2 text-center text-3xl font-bold">
              Create your free account
            </h1>
            <p className="text-center">
              Create your account to search or filter through multiple cards. No
              credit card required.
            </p>
            <div className="flex flex-col gap-4">
              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Button variant={'outline'}>
                        <img src="./google-icon.svg" alt="googleIcon" width={20} /> &nbsp;Login with Google
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <Button
                variant={"outline"}
                onClick={() =>
                  (window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`)
                }
              >
                {" "}
                <img src="./google-icon.svg" alt="googleIcon" width={20} />{" "}
                &nbsp;Continue with Google
              </Button>

              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <input
                          type="email"
                          id="email"
                          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-green-600"
                          placeholder=" "
                          {...field}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="email"
                        className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      >
                        Enter your Email
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <input
                          type="password"
                          id="password"
                          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-green-600"
                          placeholder=" "
                          {...field}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="password"
                        className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      >
                        Password
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <span
                onClick={() => router.push("/forgot-password")}
                className="ml-auto mt-1 cursor-pointer text-sm text-green-600 hover:text-gray-900"
              >
                Forgot Password?
              </span>

              <div className="space-x-2 text-center">
                <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  By proceeding, you agreed to the&nbsp;
                  <span
                    onClick={() => router.push("/terms-of-service")}
                    className="cursor-pointer font-semibold underline  hover:text-green-600"
                  >
                    Terms of services
                  </span>
                  &nbsp;and&nbsp;
                  <span
                    onClick={() => router.push("/privacy-policy")}
                    className="cursor-pointer font-semibold underline hover:text-green-600"
                  >
                    Privacy policy
                  </span>
                </label>
              </div>

              <Button type="submit" className="bg-green-600 text-white">
                Continue
              </Button>

              <div className="space-x-2 text-center">
                <p>
                  Don’t have an account?&nbsp;
                  <span
                    onClick={() => router.push("/sign-up")}
                    className="cursor-pointer font-semibold hover:text-green-600"
                  >
                    Sign-up here
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </Form>

      {/* right side - hidden on small screens */}
      <div className="relative hidden w-[32rem] flex-col p-16 sm:block md:flex">
        <img
          src="./login-side-bg.png"
          className="absolute inset-0 h-full w-full rounded-r-xl bg-green-500 object-cover"
          alt="Background Image"
        />
      </div>
    </div>
  );
}

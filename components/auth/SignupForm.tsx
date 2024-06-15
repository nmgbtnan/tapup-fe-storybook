"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formAttributes } from "../../lib/auth/Formschema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Axios from "@/lib/Axios";
import { toast, Toaster } from "sonner";
import Image from "next/image";

export default function SignupForm() {
  const [toggle, setToggle] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      privacyPolicy: true,
    },
  });

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.password !== values.confirmPassword) {
      return;
    }

    const { confirmPassword, ...formData } = values;

    try {
      await Axios.post("/auth/register", formData);
      reset();
      toast.success("Success! You're registered. Welcome aboard!");
    } catch (err: any) {
      // Handle error (optional)
      toast.error(err.response.data);
      console.error("Error registering:", err);
    }
  };

  const handleToggle = (e: FormEvent) => {
    e.preventDefault();
    setToggle((c) => !c);
  };

  return (
    <>
      <Form {...form}>
        <Toaster richColors position="top-right" />
        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-lg flex-col gap-4 rounded-lg p-8 shadow-2xl"
        >
          <div className="flex flex-col gap-3">
            <span className="text-center font-bold text-custom-black md:text-start md:text-2xl">
              Create a Tap Up account
            </span>
            <div className="flex items-center justify-center gap-2 md:justify-start ">
              <p className="text-sm text-slate-400">Already have an acount?</p>
              <Link href="/sign-in" className="text-sm text-custom-green">
                Login
              </Link>
            </div>
            <Link
              href=""
              className="flex items-center justify-center gap-2 bg-gray-100 py-3 text-custom-black hover:bg-gray-200 hover:text-custom-black  "
            >
              <div className="relative w-5 aspect-square">
                <Image src="./devicon_google.svg" alt="googleIcon" fill />
              </div>
              <p className="text-sm md:text-base">Sign Up with Google</p>
            </Link>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* DIVIDER */}

          {formAttributes.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="text-sm text-custom-black">
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    {field.isPassword ? (
                      <div className="flex items-center border pr-4">
                        <Input
                          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...formField}
                          type={toggle ? "text" : "password"}
                          placeholder={toggle ? "password" : "*********"}
                        />
                        <div
                          onClick={handleToggle}
                          className="cursor-pointer p-0 hover:bg-transparent"
                        >
                          {toggle ? (
                            <Eye className="text-gray-400" />
                          ) : (
                            <EyeOff className="text-gray-400" />
                          )}
                        </div>
                      </div>
                    ) : (
                      <Input
                        className="border-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...formField}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="mt-6 w-full bg-custom-green font-semibold text-white hover:bg-custom-green/90"
          >
            Create Account
          </Button>

          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel>
                    <p className="text-xs text-custom-black">
                      By agreeing, you agree TapUp{" "}
                      <Link className="text-xs text-custom-green" href="">
                        Terms and Services
                      </Link>{" "}
                      and{" "}
                      <Link className="text-xs text-custom-green" href="">
                        Privacy Policy
                      </Link>
                    </p>
                  </FormLabel>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

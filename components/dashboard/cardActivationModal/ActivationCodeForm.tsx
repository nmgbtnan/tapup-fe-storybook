import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import SuccessfullActivation from "./SuccessfullActivation";
import { useState } from "react";
import Loader from "@/components/Common/Loader";

const FormSchema = z.object({
  code: z.string().min(6, {
    message: "Your activation code must be 6 characters.",
  }),
});

export default function ActivationCodeForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    console.log("activation code: " + values.code);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 5000);
  };

  return (
    <div className="flex items-center justify-center">
      {!isSuccess ? (
        <div className="rounded-lg bg-white p-16 shadow-xl">
          {isLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
              <Loader />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2 text-center">
            Account Activation
          </h2>
          <p className="text-center mb-4">Hi there! Welcome to Our App</p>
          <p className="text-center text-sm mb-4">
            We have sent you 6 Digit activation code <br />
            please enter the code
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="code"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-4 flex items-center justify-center">
                        <InputOTP
                          maxLength={6}
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          className="w-full">
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />
              <button
                type="button"
                className="mb-4 block w-full text-end text-red-600">
                Didn&apos;t received the code?
              </button>
              <div className="flex gap-2">
                {/* <Button
                  type="button"
                  className="flex-1 border border-black bg-transparent text-black hover:bg-gray-100"
                >
                  Cancel
                </Button> */}
                <Button
                  type="submit"
                  className="flex-1 bg-custom-green text-white hover:bg-custom-green/90 rounded-full">
                  Activate
                </Button>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <SuccessfullActivation />
      )}
    </div>
  );
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import Loader from '@/components/Common/Loader';
import ActivationCodeForm from './ActivationCodeForm';

const FormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export default function StartActivationModal() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (value: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    console.log('Submitted email:', value.email);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 5000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      {!isSuccess ? (
        <div className="rounded-lg bg-white p-16 shadow-xl">
          {isLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
              <Loader />
            </div>
          )}
            <h2 className="text-2xl font-bold mb-2 text-center">Account Activation</h2>
            <p className="text-center ">Hi there! Welcome to Our App</p>
            <p className="text-center text-sm mb-4">Please follow the Steps to activate your Account</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="mt-1 relative rounded-md shadow-sm mb-4">
                          <Input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <img src="./activationEmailInputLabel.png" alt="/" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className='text-center'/>
                    </FormItem>
                  )}
                />
                <div className="mb-4 flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                    Remember this Device
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Start
                </Button>
              </form>
            </Form>
          </div>
      ) : (
        <ActivationCodeForm />
      )}
    </div>
  );
}

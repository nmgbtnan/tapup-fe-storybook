"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  iconColor: z.string(),
  iconBgColor: z.string(),
})

const SocialsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      iconColor: "",
      iconBgColor: "#E5E7EB",
    },
  })

  
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data)
  }

  return (
    <Form {...form}>
     
      <form onSubmit={form.handleSubmit(onSubmit)} 
        className={`space-y-3`}
      >
        <FormField
          control={form.control}
          name="iconColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon Color</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field}
                  type="color"
                  className="p-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iconBgColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Color</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field}
                  type="color"
                  className="p-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SocialsForm
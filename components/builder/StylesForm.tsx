"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useBuilderColor } from "@/hooks/useBuilderColor"
const formSchema = z.object({
  fontColor: z.string(),
  bgColor: z.string(),
  nameColor: z.string()
})

const StylesForm = () => {
  const {nameColor, fontColor, bgColor} = useBuilderColor((state) => state)
  const {changeNameColor, changeFontColor, changeBgColor} = useBuilderColor((state) => state)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fontColor: fontColor,
      bgColor: bgColor,
      nameColor: nameColor
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nameColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name Color</FormLabel>
              <FormControl>
                <Input {...field}
                  type="color"
                  className="p-0"
                  value={nameColor}
                  onChange={(e) => changeNameColor(e.target.value)}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="fontColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font Color</FormLabel>
              <FormControl>
                <Input {...field}
                  type="color"
                  className="p-0"
                  value={fontColor}
                  onChange={(e) => changeFontColor(e.target.value)}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="bgColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Color</FormLabel>
              <FormControl>
                <Input {...field}
                  type="color"
                  className="p-0"
                  value={bgColor}
                  onChange={(e) => changeBgColor(e.target.value)}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  )
}

export default StylesForm
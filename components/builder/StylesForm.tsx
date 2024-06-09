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
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { styles } from "@/redux/features/stylesSlice"
import { changeColor, changeBgColor } from "@/redux/features/stylesSlice"
const formSchema = z.object({
  fontColor: z.string(),
  bgColor: z.string(),
})

const StylesForm = () => {
  const {color, bgColor} = useSelector((state:RootState) => state.styles)
  const dispatch = useDispatch<AppDispatch>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fontColor: color,
      bgColor: bgColor,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  value={color}
                  onChange={(e) => dispatch(changeColor(e.target.value))}
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
                  onChange={(e) => dispatch(changeBgColor(e.target.value))}
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
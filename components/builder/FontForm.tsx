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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { fontOptions } from "@/lib/fontOptions"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { changeNameFontFamily, changeFontFamily } from "@/redux/features/stylesSlice"

const FormSchema = z.object({
  name: z.string(),
  info: z.string(),
})

export function FontForm() {
  const {nameFontFamily, fontFamily} = useSelector((state:RootState) => state.styles)
  const dispatch = useDispatch<AppDispatch>()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: nameFontFamily,
      info: fontFamily,
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <Select onValueChange={(value)=>dispatch(changeNameFontFamily(value))} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a font style" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontOptions.map((option, i) => (
                    <SelectItem key={i} value={option.font}>{option.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Infos</FormLabel>
              <Select onValueChange={(value)=>dispatch(changeFontFamily(value))} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a font style" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontOptions.map((option, i) => (
                    <SelectItem key={i} value={option.font}>{option.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  )
}

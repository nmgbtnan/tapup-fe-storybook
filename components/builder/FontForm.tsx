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
import { fontOptions, fontSizeOptions } from "@/lib/fontOptions"
import { useBuilderFont } from "@/hooks/useBuilderFont"

const FormSchema = z.object({
  name: z.string(),
  info: z.string(),
  nameSize: z.string(),
  infoSize: z.string(),
})

export function FontForm() {
  const {nameFontFamily, fontFamily, nameSize, infoSize} = useBuilderFont((state) => state)
  const {changeNameFontFamily, changeFontFamily, changeNameSize, changeInfoSize} = useBuilderFont((state) => state)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: nameFontFamily,
      info: fontFamily,
      nameSize: nameSize,
      infoSize: infoSize
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex justify-between gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-3/4">
                <FormLabel>Display Name</FormLabel>
                <Select onValueChange={(value)=>changeNameFontFamily(value)} 
                  defaultValue={field.value}
                >
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
            name="nameSize"
            render={({ field }) => (
              <FormItem className="w-1/4">
                <FormLabel>Size</FormLabel>
                <Select onValueChange={(value)=>changeNameSize(value)} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {fontSizeOptions.map((option, i) => (
                      <SelectItem key={i} value={option.size}>{option.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <div className="flex justify-between gap-3">
          <FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="w-3/4"> 
                <FormLabel>Infos</FormLabel>
                <Select onValueChange={(value)=>changeFontFamily(value)} 
                  defaultValue={field.value}
                >
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
            name="infoSize"
            render={({ field }) => (
              <FormItem className="w-1/4">
                <FormLabel>Size</FormLabel>
                <Select onValueChange={(value)=>changeInfoSize(value)} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {fontSizeOptions.map((option, i) => (
                      <SelectItem key={i} value={option.size}>{option.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  )
}

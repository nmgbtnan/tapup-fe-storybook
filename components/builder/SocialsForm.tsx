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
import { useBuilderSocial } from "@/hooks/useBuilderSocial"
import { DialogClose } from "@radix-ui/react-dialog"

const formSchema = z.object({
  link: z.string().url(),
  iconColor: z.string(),
  iconBgColor: z.string(),
})

interface Props {
  selectedSocial: {
    type: string;
    icon: JSX.Element;
  }
}
const SocialsForm = ({selectedSocial} : Props ) => {
  const {socials, addSocial, removeSocial, updateSocial} = useBuilderSocial((state) => state)
  const social = socials.find((social) => social.name === selectedSocial.type)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: social?.link || "",
      iconColor: social?.iconColor || "#000000",
      iconBgColor: social?.iconBgColor || "#E5E7EB",
    },
  })
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    if(!social) {
      addSocial(selectedSocial.type, selectedSocial.icon, data.link, data.iconColor, data.iconBgColor)
    } else {
      updateSocial(selectedSocial.type, selectedSocial.icon, data.link, data.iconColor, data.iconBgColor)
    }
    console.log(data)
  }

  return (
    <Form {...form}>
     
      <form onSubmit={form.handleSubmit(onSubmit)} 
        className={`space-y-3`}
      >
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.com" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-5">
          <FormField
            control={form.control}
            name="iconColor"
            render={({ field }) => (
              <FormItem className="w-1/2">
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
              <FormItem className="w-1/2">
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

        </div>
        <div className="flex justify-end gap-3 mt-5">
          <DialogClose asChild>
            <Button 
              variant="destructive"
              type="button"
              onClick={() => removeSocial(selectedSocial.type)}
            >Remove</Button>            
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Save Changes</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  )
}

export default SocialsForm
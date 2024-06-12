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
import {  useSelector } from "react-redux"
import {  RootState } from "@/redux/store"
import { Textarea } from "../ui/textarea"
import { useBuilderProfile } from "@/hooks/useBuilderProfile"

const formSchema = z.object({
  name: z.string(),
  position: z.string(),
  bio: z.string().min(10),
})

const ProfileForm = () =>{
  const {activeForm} = useSelector((state:RootState) => state.menu)
  
  const {name, position, bio} = useBuilderProfile((state) => state)
  const {changeName, changePosition, changeBio} = useBuilderProfile((state) => state)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      position: position,
      bio: bio,
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
        className={`space-y-3 ${activeForm === 'profile' ? 'block' : 'hidden'}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input  {...field} 
                  value={name}
                  onChange={(e)=>changeName(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position / Business Industry</FormLabel>
              <FormControl>
                <Input  {...field} 
                  value={position}
                  onChange={(e)=>changePosition(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Short description..." {...field} 
                  value={bio}
                  onChange={(e)=>changeBio(e.target.value)}
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

export default ProfileForm
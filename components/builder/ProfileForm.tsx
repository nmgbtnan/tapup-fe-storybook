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
import { Textarea } from "../ui/textarea"
import { useBuilderProfile } from "@/hooks/useBuilderProfile"
import { useMenuState } from "@/hooks/useMenuState"
import { getCardProfile, updateCardProfile } from "@/lib/localStorage"

const formSchema = z.object({
  cover: z.string(),
  photo: z.string(),
  name: z.string(),
  position: z.string(),
  bio: z.string().min(10),
})

const ProfileForm = () =>{
  const {activeForm} = useMenuState((state) => state)
  const {name, position, bio, profilePhoto, coverPhoto} = useBuilderProfile((state) => state)
  const {changeName, changePosition, changeBio, changeProfilePhoto, changeCoverPhoto} = useBuilderProfile((state) => state)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cover: '',
      photo: '',
      name: name,
      position: position,
      bio: bio,
    },
  })
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const storageData = getCardProfile('card');
    // console.log(data);
    const saveData = {
      name,
      position,
      bio,
      coverPhoto,
      profilePhoto
    }
    if(storageData) {
      storageData.profile = saveData
      storageData.hasData = true
      updateCardProfile('card', storageData)
    }
  }

  const handleCoverChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      changeCoverPhoto(URL.createObjectURL(inputElement.files[0]));
    }
  }
  
  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      changeProfilePhoto(URL.createObjectURL(inputElement.files[0]));
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
        className={`space-y-3 ${activeForm === 'profile' ? 'block' : 'hidden'}`}
      >
        <FormField
          control={form.control}
          name="cover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Photo</FormLabel>
              <FormControl>
                <Input  {...field} 
                  type="file"
                  accept="image/*"
                  onChangeCapture={(e)=>handleCoverChange(e)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Photo</FormLabel>
              <FormControl>
                <Input  {...field} 
                  type="file"
                  accept="image/*"
                  onChangeCapture={(e)=>handleImageChange(e)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input  {...field} 
                  onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>)=>changeName(e.target.value)}
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
                  onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>)=>changePosition(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Short description..." {...field} 
                  onChangeCapture={(e: React.ChangeEvent<HTMLTextAreaElement>)=>changeBio(e.target.value)}
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
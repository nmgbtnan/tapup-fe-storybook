'use client';
import { RiContactsBookLine } from 'react-icons/ri';

import { SocialLists } from '@/lib/SOCIAL_ICONS';
import { Input } from '../ui/input';
import { useRef } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCustomCard } from '@/hooks/useCustomCard';
import { Button } from '../ui/button';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

// TODO: complete this
export default function ContactIconsAccordions() {
  const socials = useCustomCard((s) => s.socials);
  const addSocial = useCustomCard((s) => s.addSocial);
  const removeSocial = useCustomCard((s) => s.removeSocial);

  const inputRef = useRef<HTMLInputElement>(null);
  const hoverHandler = elementOutlineHandler('c-icons');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <RiContactsBookLine />
            </span>
            <span className="text-sm">Socials</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1 flex flex-row flex-wrap gap-1 justify-start">
          {SocialLists.map(({ type, icon }) => {
            const initialInputVal =
              socials.find((v) => v.socialType === type)?.socialValue ?? '';

            const bgColor = initialInputVal
              ? 'bg-blue-200 hover:bg-blue-300'
              : 'bg-gray-100 hover:bg-gray-200';
            return (
              <Dialog key={type}>
                <DialogTrigger
                  key={type}
                  className={`${bgColor} text-[#7b7b7b] text-xl p-2 rounded-sm  transition-all duration-150`}
                >
                  {icon}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Link to {type}</DialogTitle>
                    <DialogDescription className="py-8">
                      <Input
                        ref={inputRef}
                        type="text"
                        className="bg-gray-100"
                        defaultValue={initialInputVal}
                      />
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-row justify-end gap-x-4">
                    <Button
                      variant={'outline'}
                      onClick={() => {
                        const input = inputRef.current as HTMLInputElement;
                        input.value = '';
                        removeSocial(type);
                      }}
                    >
                      Clear
                    </Button>
                    <Button
                      onClick={() => {
                        const input = inputRef.current as HTMLInputElement;
                        if (input.value) {
                          addSocial(type, input.value);
                        } else {
                          removeSocial(type);
                        }
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

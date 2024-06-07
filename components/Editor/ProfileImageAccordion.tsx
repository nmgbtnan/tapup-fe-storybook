'use client';
import { CgProfile } from 'react-icons/cg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';
import { useState } from 'react';
import Cropper from './Cropper';
import { useCustomCard } from '@/hooks/useCustomCard';

// TODO: complete this
export default function ProfileImageAccordion() {
  const [fileName, setFileName] = useState('');

  const clippedFilename =
    fileName.length > 12 ? fileName.substring(0, 9) + '...' : fileName;
  const changeProfile = useCustomCard((s) => s.changeProfile);
  const hoverHandler = elementOutlineHandler('c-profile');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <CgProfile />
            </span>
            <span className="text-sm">Profile Image</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <label className="relative w-full h-full">
            <p className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {fileName ? clippedFilename : 'Choose File'}
            </p>
            {/* <Input 
                        type="file"
                        accept="image/png, image/jpeg, image/svg"                    
                        onChange={changeProfileHandler}
                        className="invisible"
                        /> */}
            <Cropper
              setFileName={setFileName}
              aspect={1 / 1}
              changeImage={changeProfile}
              circularCrop={true}
            />
          </label>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

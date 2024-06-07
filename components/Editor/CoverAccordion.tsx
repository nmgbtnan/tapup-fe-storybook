'use client';
import { SlPicture } from 'react-icons/sl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';
import Cropper from './Cropper';
import { useCustomCard } from '@/hooks/useCustomCard';

// TODO: complete this
export default function CoverAccordion() {
  const hoverHandler = elementOutlineHandler('c-cover', 2);
  const [fileName, setFileName] = useState('');
  const changeCover = useCustomCard((s) => s.changeCover);

  const clippedFilename =
    fileName.length > 12 ? fileName.substring(0, 9) + '...' : fileName;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <SlPicture />
            </span>
            <span>Cover</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <label className="relative w-full h-full">
            <p className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {fileName ? clippedFilename : 'Choose File'}
            </p>
            {/* <Input
                    type="file"
                    accept="image/png, image/jpeg"                    
                    onChange={changeCoverHandler}
                    className="invisible"
                    /> */}
            <Cropper
              setFileName={setFileName}
              aspect={16 / 6}
              changeImage={changeCover}
            />
          </label>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

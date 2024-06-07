'use client'
import { IoIosColorPalette } from 'react-icons/io';
import { Input } from '../ui/input';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCustomCard } from '@/hooks/useCustomCard';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

export default function TextColorAccordion() {
  const fontColor = useCustomCard((s) => s.fontColor);
  const changeColor = useCustomCard((s) => s.changeFontColor);
  const hoverHandler = elementOutlineHandler('c-text-color');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <IoIosColorPalette />
            </span>
            <span>Text Color</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <Input
            type="color"
            value={fontColor}
            onChange={(e) => changeColor(e.currentTarget.value)}
            className="py-0 px-16 pt-1"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

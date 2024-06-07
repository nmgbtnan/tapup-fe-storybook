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

export default function IconColorAccordion() {
  const iconColor = useCustomCard((s) => s.iconColor);
  const changeIconColor = useCustomCard((s) => s.changeIconColor);
  const hoverHandler = elementOutlineHandler('c-icon');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <IoIosColorPalette />
            </span>
            <span className="text-[12px]">Icon Color</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <Input
            type="color"
            value={iconColor}
            onChange={(e) => changeIconColor(e.currentTarget.value)}
            className="py-0 px-16 pt-1"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

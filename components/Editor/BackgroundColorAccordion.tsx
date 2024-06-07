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
import AdvancedColor from './AdvancedColor';

export default function BackgroundColorAccordion() {
  const backgroundColor = useCustomCard((s) => s.backgroundColor);
  const changeBackgroundColor = useCustomCard((s) => s.changeBackgroundColor);
  const hoverHandler = elementOutlineHandler('c-background');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <IoIosColorPalette />
            </span>
            <span className="text-[12px]">Background color</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent px-1 flex flex-col gap-1 items-center">
          <div className="relative">
            <div
              className="w-full h-full absolute top-0 left-0 pointer-events-none"
              style={{ background: backgroundColor }}
            ></div>
            <Input
              type="color"
              onChange={(e) => changeBackgroundColor(e.currentTarget.value)}
              className="py-0 px-16 pt-1 opacity-0"
            />
          </div>
          <AdvancedColor />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

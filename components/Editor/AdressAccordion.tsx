'use client'
import { MdOutlinePlace } from 'react-icons/md';
import { Input } from '../ui/input';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCustomCard } from '@/hooks/useCustomCard';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

export default function AddressAccordion() {
  const changeAddress = useCustomCard((s) => s.changeAddress);
  const address = useCustomCard((s) => s.address);
  const hoverHandlers = elementOutlineHandler('c-address');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandlers}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <MdOutlinePlace />
            </span>
            <span>Address</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <Input
            type="text"
            value={address}
            onChange={(e) => changeAddress(e.currentTarget.value)}
            className="focus:outline-none bg-gray-100"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

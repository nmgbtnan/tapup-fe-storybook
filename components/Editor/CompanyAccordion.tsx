'use client'
import { BsBuildings } from 'react-icons/bs';
import { Input } from '../ui/input';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCustomCard } from '@/hooks/useCustomCard';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

export default function CompanyAccordion() {
  const changeCompany = useCustomCard((s) => s.changeCompany);
  const company = useCustomCard((s) => s.company);

  const hoverHandlers = elementOutlineHandler('c-company');
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandlers}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <BsBuildings />
            </span>
            <span>Company</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1">
          <Input
            type="text"
            value={company}
            onChange={(e) => changeCompany(e.currentTarget.value)}
            className="focus:outline-none bg-gray-100"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

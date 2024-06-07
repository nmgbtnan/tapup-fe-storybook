'use client'
import { FaRegUser } from 'react-icons/fa6';
import { Input } from '../ui/input';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCustomCard } from '@/hooks/useCustomCard';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

export default function NameAccordion() {
  const changeFirstName = useCustomCard((s) => s.changeFirstName);
  const changeMiddleName = useCustomCard((s) => s.changeMiddleName);
  const changeLastName = useCustomCard((s) => s.changeLastName);
  const firstName = useCustomCard((s) => s.firstName);
  const middleName = useCustomCard((s) => s.middleName);
  const lastName = useCustomCard((s) => s.lastName);

  const hoverHandlers = elementOutlineHandler('c-name');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandlers}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <FaRegUser />
            </span>
            <span>Name</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent p-1 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="px-1 text-sm">first name</label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => changeFirstName(e.currentTarget.value)}
              className="focus:outline-none bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="px-1 text-sm">middle name</label>
            <Input
              type="text"
              value={middleName}
              onChange={(e) => changeMiddleName(e.currentTarget.value)}
              className="focus:outline-none bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="px-1 text-sm">last name</label>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => changeLastName(e.currentTarget.value)}
              className="focus:outline-none bg-gray-100"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

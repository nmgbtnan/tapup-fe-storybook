'use client'
import { FiChevronRight } from 'react-icons/fi';
import { RiFontSize } from 'react-icons/ri';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';
import { useCustomCard } from '@/hooks/useCustomCard';
import { elementOutlineHandler } from '@/lib/elementOutlineHandler';

const contents = [
  {
    name: 'Roboto Condensed',
    font: 'font-roboto-condensed',
  },
  {
    name: 'Racing Sans One',
    font: 'font-racing-sans-one',
  },
  {
    name: 'League Spartan',
    font: 'font-league-spartan',
  },
  {
    name: 'Montserrat',
    font: 'font-montserrat',
  },
  {
    name: 'Open Sans',
    font: 'font-open-sans',
  },
  {
    name: 'Raleway',
    font: 'font-raleway',
  },
  {
    name: 'Bebas Neue',
    font: 'font-bebas',
  },
  {
    name: 'Lato',
    font: 'font-lato',
  },
  {
    name: 'Kaushan Script',
    font: 'font-kaushan',
  },
  {
    name: 'Comic Neue',
    font: 'font-comic-neue',
  },
] as const;

export default function FontAccordion() {
  const changeCustomFont = useCustomCard((s) => s.changeCustomFont);
  const hoverHandler = elementOutlineHandler('c-font');

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger {...hoverHandler}>
          <p className="flex flex-row items-center gap-4">
            <span className="text-[#b4b4b4]">
              <RiFontSize />
            </span>
            <span>Font Style</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="border rounded-md border-t-transparent">
          {contents.map((c) => {
            return (
              <Button
                key={c.font}
                variant="ghost"
                className="flex flex-row items-center gap-x-2 px-4 w-full justify-start"
                onClick={() => {
                  changeCustomFont(c.font);
                }}
              >
                <FiChevronRight className="stroke-[#454545]" />
                <p>{c.name}</p>
              </Button>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

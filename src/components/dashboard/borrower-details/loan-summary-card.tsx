'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../ui/accordion';
import { Card, CardTitle } from '../../ui/card';

interface LoanSummaryCardProps {
  title: string;
  content?: React.ReactNode;
}

export default function LoanSummaryCard({
  title,
  content,
}: LoanSummaryCardProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={title} className="border-0">
        <AccordionTrigger>
          <Card className=" w-full bg-slate-50 shadow-none border-none dark:bg-white/5 px-4 py-2 ">
            <CardTitle className="text-sm focus:underline-offset-0">
              {title}
            </CardTitle>
          </Card>
        </AccordionTrigger>

        <AccordionContent className="px-4 pt-2 pb-4 bg-white dark:bg-white/5 rounded-xl shadow-md">
          {content || (
            <p className="text-sm text-gray-700 dark:text-white/80">
              No additional details
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

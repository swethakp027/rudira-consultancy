import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
const AccordionItem = ({
  value,
  title,
  children,
}: {
  value: any;
  title: any;
  children: React.ReactNode;
}) => {
  return (
    <Accordion.Item
      value={value}
      className="overflow-hidden rounded-xl border bg-white shadow-sm"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between p-4 text-left text-sm font-medium hover:bg-gray-50 transition-colors">
          {title}

          <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="AccordionContent">
        <div className="p-4 text-sm text-gray-700">
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
export default AccordionItem;

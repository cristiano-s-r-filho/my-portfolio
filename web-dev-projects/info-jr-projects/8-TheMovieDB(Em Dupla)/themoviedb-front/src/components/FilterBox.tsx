"use client";
import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type filterProps = {
  interator: any;
  interatorTitle: string;
  value: string;
  selectFn: (e: any) => void;
};

export function FilterBox(props: filterProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          Select a {props.interatorTitle}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${props.interatorTitle}...`}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No {props.interatorTitle} found.</CommandEmpty>
            <CommandGroup>
              {props.interator.map((item: string) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(e) => {
                    props.selectFn(e);
                    setOpen(false);
                  }}
                >
                  {item}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      props.value === item ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

const bairros = [
  { value: "morumbi", label: "Morumbi" },
  { value: "vila-madalena", label: "Vila Madalena" },
  { value: "moema", label: "Moema" },
  { value: "pinheiros", label: "Pinheiros" },
  { value: "itaim-bibi", label: "Itaim Bibi" },
  { value: "tatuape", label: "Tatuapé" },
  { value: "jardins", label: "Jardins" },
  { value: "santana", label: "Santana" },
  // Adicione mais bairros conforme necessário
];

export function ComboboxBairros() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? bairros.find((bairro) => bairro.value === value)?.label
            : "Selecione um bairro..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar bairro..." />
          <CommandList>
            <CommandEmpty>Nenhum bairro encontrado.</CommandEmpty>
            <CommandGroup>
              {bairros.map((bairro) => (
                <CommandItem
                  key={bairro.value}
                  value={bairro.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === bairro.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {bairro.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

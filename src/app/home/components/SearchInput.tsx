import * as React from "react";
import { InputProps } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <SearchIcon color="black" className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          ref={ref}
          placeholder="Pesquisar por imóveis"
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-black"
        />
      </div>
    );
  }
);

SearchInput.displayName = "Search";

export { SearchInput };

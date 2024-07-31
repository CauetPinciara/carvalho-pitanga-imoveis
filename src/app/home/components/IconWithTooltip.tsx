import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react"; // Ajuste o caminho conforme necessário

interface IconWithTooltipProps {
  icon: LucideIcon;
  tooltipText: string;
  text: string | number;
}

const IconWithTooltip = ({
  icon: Icon,
  tooltipText,
  text,
}: IconWithTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center space-x-1">
            <Icon className="text-primary" />
            <span>{text}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconWithTooltip;

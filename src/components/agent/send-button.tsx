import { cn } from "@/lib/utils";
import { ArrowUpRight, Square } from "lucide-react";

type SendButtonProps = {
  status: "awaiting_message" | "in_progress";
  input: string;
  handleSubmit: () => void;
  stop: () => void;
};

function SendButton({ status, stop, handleSubmit, input }: SendButtonProps) {
  return (
    <button
      onClick={status === "awaiting_message" ? handleSubmit : stop}
      disabled={input.trim().length === 0 && status !== "in_progress"}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 w-8 ",
        "disabled:[&_svg]:scale-80 [&_svg]:scale-100",
        "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 ",
        status === "in_progress" &&
          "w-auto px-2.5 [&_svg]:scale-80 bg-destructive gap-1  text-secondary-foreground",
        status === "in_progress" &&
          input.trim().length === 0 &&
          "hover:bg-destructive hover:text-white"
      )}
    >
      {status === "in_progress" ? <Square /> : <ArrowUpRight />}
      {status === "in_progress" && <span>Stop</span>}
    </button>
  );
}

export { SendButton };

import type { Message as MessageType } from "@ai-sdk/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Markdown } from "@/components/ai/markdown";
import React from "react";

export type MessageProps = {
  children: React.ReactNode;
  className?: string;
  role?: MessageType["role"];
} & React.HTMLProps<HTMLDivElement>;

export const MessageRoleContext = React.createContext<
  MessageType["role"] | undefined
>(undefined);
export const useMessageRole = () => {
  const context = React.useContext(MessageRoleContext);
  if (context === undefined) {
    throw new Error(
      "useMessageRole must be used within a MessageRoleContext.Provider"
    );
  }
  return context;
};

const Message = ({ children, className, role, ...props }: MessageProps) => (
  <MessageRoleContext.Provider value={role}>
    <div
      className={cn(
        "flex gap-3",
        role === "user" && "justify-end",
        role === "assistant" && "justify-start",
        className
      )}
      {...props}
    >
      {children}
    </div>
  </MessageRoleContext.Provider>
);

export type MessageAvatarProps = {
  src?: string;
  alt?: string;
  fallback?: string;
  delayMs?: number;
  className?: string;
  children?: React.ReactNode;
};

const MessageAvatar = ({
  src,
  alt,
  fallback,
  delayMs,
  className,
  children,
}: MessageAvatarProps) => {
  return (
    <Avatar className={cn("h-8 w-8 shrink-0", className)}>
      <AvatarImage src={src} alt={alt} />
      {fallback && (
        <AvatarFallback delayMs={delayMs}>{fallback}</AvatarFallback>
      )}
      {children}
    </Avatar>
  );
};

export type MessageContentProps = {
  children: React.ReactNode;
  markdown?: boolean;
  className?: string;
} & React.ComponentProps<typeof Markdown> &
  React.HTMLProps<HTMLDivElement>;

const MessageContent = ({
  children,
  markdown = false,
  className,
  ...props
}: Omit<MessageContentProps, "role">) => {
  const role = useMessageRole();
  const classNames = cn(
    "rounded-lg p-3 text-foreground bg-secondary prose break-words whitespace-normal",
    markdown &&
      "prose-h2:!mt-0 prose-h2:!scroll-m-0 px-3 bg-zinc-100 text-zinc-950 space-y-3 max-w-[95%] ",
    role === "user" && "bg-blue-100/80 text-blue-950",
    role === "assistant" && "bg-slate-100 text-slate-950",
    className
  );

  return markdown ? (
    <Markdown className={classNames} {...props}>
      {children as string}
    </Markdown>
  ) : (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export type MessageActionsProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

const MessageActions = ({
  children,
  className,
  ...props
}: MessageActionsProps) => (
  <div
    className={cn("text-muted-foreground flex items-center gap-2", className)}
    {...props}
  >
    {children}
  </div>
);

export type MessageActionProps = {
  className?: string;
  tooltip: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
} & React.ComponentProps<typeof Tooltip>;

const MessageAction = ({
  tooltip,
  children,
  className,
  side = "top",
  ...props
}: MessageActionProps) => {
  return (
    <TooltipProvider>
      <Tooltip {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className={className}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export {
  Message,
  MessageAvatar,
  MessageContent,
  MessageActions,
  MessageAction,
};

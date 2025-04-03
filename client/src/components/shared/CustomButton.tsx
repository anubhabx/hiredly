import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CustomButton = ({
  children,
  className,
  type = "button",
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}) => {
  return (
    <Button
      className={cn(
        "px-8 py-6 rounded font-semibold text-base transition duration-300 cursor-pointer",
        variant === "primary"
          ? "bg-accent text-background hover:bg-accent/80"
          : variant === "secondary"
            ? "bg-background text-foreground hover:bg-background/80"
            : "bg-accent/10 text-foreground hover:bg-accent/20",
        className
      )}
      type={type}
      disabled={disabled} // Add your disabled logic here
    >
      {children}
    </Button>
  );
};

export default CustomButton;

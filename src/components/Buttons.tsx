import React from "react";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ButtonsProps {
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  variant: string;
  onClick?: () => void;
}

export function Buttons({
  leftIcon,
  variant,
  onClick,
  children,
}: ButtonsProps) {
  const screens = useMediaQuery("(max-width: 768px)");

  return (
    <Button
      size={screens ? "md" : "lg"}
      radius="sm"
      leftIcon={leftIcon}
      variant={variant as any}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

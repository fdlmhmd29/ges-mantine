import React, { useRef } from "react";
import { Button } from "@mantine/core";
import useWidthSize from "../lib/GetScreenSizes";

interface ButtonsProps {
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  variant: string;
  onClick?: () => void;
  component?: string;
  types?: string;
  textColor?: string;
}

export function Buttons({
  leftIcon,
  variant,
  onClick,
  children,
  component,
  types,
  textColor,
}: ButtonsProps) {
  const { width } = useWidthSize({ width: undefined });
  const screens = width && width < 768 ? "md" : "lg";
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Button
      ref={ref}
      size={screens}
      radius="sm"
      leftIcon={leftIcon}
      variant={variant as any}
      onClick={onClick}
      component={component as any}
      type={types as any}
      color={textColor}
    >
      {children}
    </Button>
  );
}

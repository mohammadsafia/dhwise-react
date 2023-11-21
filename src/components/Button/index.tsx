import React from "react";

const shapes = { round: "rounded-lg" } as const;
const variants = {
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-blue_gray-200",
    red_300: "bg-red-300 text-white-A700",
    blue_gray_900: "bg-blue_gray-900",
    deep_orange_300_71: "bg-deep_orange-300_71",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    blue_gray_800: "border border-blue_gray-800 border-solid text-red-300",
    pink_A100: "border border-pink-A100 border-solid",
    red_300: "border border-red-300 border-solid text-red-300",
  },
} as const;
const sizes = { xs: "p-2", sm: "p-3.5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

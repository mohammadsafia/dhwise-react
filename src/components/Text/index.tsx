import React from "react";

const sizeClasses = {
  txtBarlowRegular16: "font-barlow font-normal",
  txtBarlowMedium14: "font-barlow font-medium",
  txtBarlowMedium16: "font-barlow font-medium",
  txtBarlowMedium14Bluegray200: "font-barlow font-medium",
  txtBarlowSemiBold14Gray50: "font-barlow font-semibold",
  txtBarlowMedium14Teal300: "font-barlow font-medium",
  txtBarlowSemiBold14WhiteA700: "font-barlow font-semibold",
  txtBarlowMedium14Gray300: "font-barlow font-medium",
  txtBarlowRegular14Gray300: "font-barlow font-normal",
  txtBarlowMedium12: "font-barlow font-medium",
  txtBarlowSemiBold28: "font-barlow font-semibold",
  txtBarlowSemiBold16Red300: "font-barlow font-semibold",
  txtBarlowSemiBold16: "font-barlow font-semibold",
  txtBarlowRegular14WhiteA700: "font-barlow font-normal",
  txtBarlowMedium12Teal300: "font-barlow font-medium",
  txtBarlowSemiBold20: "font-barlow font-semibold",
  txtBarlowMedium16Bluegray200: "font-barlow font-medium",
  txtBarlowRegular16Bluegray200: "font-barlow font-normal",
  txtBarlowRegular12: "font-barlow font-normal",
  txtBarlowSemiBold14: "font-barlow font-semibold",
  txtBarlowRegular14: "font-barlow font-normal",
  txtBarlowMedium14Red300: "font-barlow font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

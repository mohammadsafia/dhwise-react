import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "mohammad_s_application1/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder8",
  variant: "OutlineBluegray800",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};

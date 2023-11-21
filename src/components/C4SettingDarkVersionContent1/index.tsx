import React from "react";

import { Img, Line, Text } from "components";

type C4SettingDarkVersionContent1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "producttitle" | "productdescription"
> &
  Partial<{ producttitle: string; productdescription: string }>;

const C4SettingDarkVersionContent1: React.FC<
  C4SettingDarkVersionContent1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-[79%]">
          <Img
            className="h-4 mt-0.5 w-4"
            src="images/img_iconlinediscount.svg"
            alt="iconlinediscoun"
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-red-300 text-sm w-auto"
              size="txtBarlowMedium14Red300"
            >
              {props?.producttitle}
            </Text>
            <Text
              className="text-blue_gray-200 text-xs w-auto"
              size="txtBarlowRegular12"
            >
              {props?.productdescription}
            </Text>
          </div>
        </div>
        <Line className="bg-red-300 h-[39px] rounded-sm w-1" />
      </div>
    </>
  );
};

C4SettingDarkVersionContent1.defaultProps = {
  producttitle: "Products Management",
  productdescription: "Manage your product, pricing, etc",
};

export default C4SettingDarkVersionContent1;

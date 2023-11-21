import React from "react";

import { Img, Text } from "components";

type C4SettingDarkVersionContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "appearancetext" | "darklightmodetext"
> &
  Partial<{
    userimage: string;
    appearancetext: string;
    darklightmodetext: string;
  }>;

const C4SettingDarkVersionContent: React.FC<
  C4SettingDarkVersionContentProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-[73%]">
          <Img
            className="h-4 mt-0.5 w-4"
            alt="iconlineapperea"
            src={props?.userimage}
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtBarlowMedium14"
            >
              {props?.appearancetext}
            </Text>
            <Text
              className="text-blue_gray-200 text-xs w-auto"
              size="txtBarlowRegular12"
            >
              {props?.darklightmodetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C4SettingDarkVersionContent.defaultProps = {
  userimage: "images/img_iconlineappereance.svg",
  appearancetext: "Appereance",
  darklightmodetext: "Dark and Light mode, Font size",
};

export default C4SettingDarkVersionContent;

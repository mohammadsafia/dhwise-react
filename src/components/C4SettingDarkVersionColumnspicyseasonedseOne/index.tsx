import React from "react";

import { Img, Text } from "components";

type C4SettingDarkVersionColumnspicyseasonedseOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "dishname"
  | "price"
  | "ellipsefiftytwo"
  | "bowlscounter"
  | "edittext"
> &
  Partial<{
    userimage: string;
    dishname: string;
    price: string;
    ellipsefiftytwo: string;
    bowlscounter: string;
    edittext: string;
  }>;

const C4SettingDarkVersionColumnspicyseasonedseOne: React.FC<
  C4SettingDarkVersionColumnspicyseasonedseOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[127px] items-center justify-start w-[127px]">
          <div className="flex flex-col h-[127px] items-center justify-start w-[127px]">
            {!!props?.userimage ? (
              <Img
                className="h-[127px] md:h-auto rounded-[50%] w-[127px]"
                alt="imageFour"
                src={props?.userimage}
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-auto">
          {!!props?.dishname ? (
            <Text
              className="leading-[130.00%] max-w-[144px] md:max-w-full text-center text-sm text-white-A700"
              size="txtBarlowMedium14"
            >
              {props?.dishname}
            </Text>
          ) : null}
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            {!!props?.price ? (
              <Text
                className="text-blue_gray-200 text-center text-sm w-auto"
                size="txtBarlowRegular14"
              >
                {props?.price}
              </Text>
            ) : null}
            {!!props?.ellipsefiftytwo ? (
              <div className="bg-gray-400 h-1 rounded-[50%] w-1"></div>
            ) : null}
            {!!props?.bowlscounter ? (
              <Text
                className="text-blue_gray-200 text-center text-sm w-auto"
                size="txtBarlowRegular14"
              >
                {props?.bowlscounter}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="bg-red-300_70 flex flex-col items-center justify-start p-4 rounded-bl-lg rounded-br-lg w-full">
          <div className="flex flex-row gap-2 items-start justify-center w-[44%] md:w-full">
            <Img
              className="h-5 w-5"
              src="images/img_iconlineedit.svg"
              alt="iconlineedit"
            />
            <Text
              className="mt-0.5 text-red-300 text-sm"
              size="txtBarlowSemiBold14"
            >
              {props?.edittext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C4SettingDarkVersionColumnspicyseasonedseOne.defaultProps = {
  edittext: "Edit dish",
};

export default C4SettingDarkVersionColumnspicyseasonedseOne;

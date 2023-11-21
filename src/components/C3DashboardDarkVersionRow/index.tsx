import React from "react";

import { Img, Text } from "components";

type C3DashboardDarkVersionRowProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ellipsefiftythree"
  | "userimage"
  | "username"
  | "dishname"
  | "dishprice"
  | "orderstatus"
> &
  Partial<{
    ellipsefiftythree: string;
    userimage: string;
    username: string;
    dishname: string;
    dishprice: string;
    orderstatus: string;
  }>;

const C3DashboardDarkVersionRow: React.FC<C3DashboardDarkVersionRowProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
          <div className="flex md:flex-1 flex-col items-center justify-end w-[21%] md:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              <div className="md:h-8 h-[34px] relative w-[27%]">
                {!!props?.ellipsefiftythree ? (
                  <div className="absolute bg-indigo-A100 h-8 inset-x-[0] mx-auto rounded-[50%] top-[0] w-8"></div>
                ) : null}
                <div className="absolute bottom-[0] flex flex-col h-8 inset-x-[0] items-center justify-start mx-auto w-8">
                  {!!props?.userimage ? (
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      alt="3010"
                      src={props?.userimage}
                    />
                  ) : null}
                </div>
              </div>
              {!!props?.username ? (
                <Text
                  className="text-gray-300 text-sm"
                  size="txtBarlowRegular14Gray300"
                >
                  {props?.username}
                </Text>
              ) : null}
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[67px] md:mt-0 mt-[7px] text-gray-300 text-sm"
            size="txtBarlowRegular14Gray300"
          >
            {props?.dishname}
          </Text>
          <Text
            className="md:ml-[0] ml-[54px] md:mt-0 mt-1.5 text-gray-300 text-sm"
            size="txtBarlowRegular14Gray300"
          >
            {props?.dishprice}
          </Text>
          <Text
            className="bg-green-A200_3d justify-center md:ml-[0] ml-[119px] md:mt-0 mt-1.5 pb-1.5 pt-0.5 px-3 rounded-[13px] text-sm text-teal-300 w-auto"
            size="txtBarlowMedium14Teal300"
          >
            {props?.orderstatus}
          </Text>
        </div>
      </div>
    </>
  );
};

C3DashboardDarkVersionRow.defaultProps = {
  dishname: "Hot spicy fried rice with omelet",
  dishprice: "$435",
  orderstatus: "Completed",
};

export default C3DashboardDarkVersionRow;

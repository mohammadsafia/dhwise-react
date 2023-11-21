import React from "react";

import { Button, Img, Text } from "components";

type C3DashboardDarkVersionContentsummaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "p3240" | "iconlinearrow" | "price" | "totalrevenue"
> &
  Partial<{
    p3240: string;
    iconlinearrow: string;
    price: string;
    totalrevenue: string;
  }>;

const C3DashboardDarkVersionContentsummary: React.FC<
  C3DashboardDarkVersionContentsummaryProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-center w-auto">
          <Button
            className="flex h-[38px] items-center justify-center w-[38px]"
            shape="round"
            color="blue_gray_900"
            size="xs"
            variant="fill"
          >
            <Img className="h-6" src="images/img_icon.svg" alt="icon" />
          </Button>
          <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
            {!!props?.p3240 ? (
              <Text
                className="text-teal-300 text-xs w-auto"
                size="txtBarlowMedium12Teal300"
              >
                {props?.p3240}
              </Text>
            ) : null}
            <div className="bg-green-300_3d flex flex-col items-start justify-start p-0.5 rounded-[50%] w-[18px]">
              {!!props?.iconlinearrow ? (
                <Img
                  className="h-3.5 w-3.5"
                  alt="iconlinearrow"
                  src={props?.iconlinearrow}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          {!!props?.price ? (
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
              size="txtBarlowSemiBold28"
            >
              {props?.price}
            </Text>
          ) : null}
          {!!props?.totalrevenue ? (
            <Text
              className="text-blue_gray-200 text-sm w-auto"
              size="txtBarlowMedium14Bluegray200"
            >
              {props?.totalrevenue}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

C3DashboardDarkVersionContentsummary.defaultProps = {};

export default C3DashboardDarkVersionContentsummary;

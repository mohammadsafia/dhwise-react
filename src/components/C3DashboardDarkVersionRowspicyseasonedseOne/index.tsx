import React from "react";

import { Img, Text } from "components";

type C3DashboardDarkVersionRowspicyseasonedseOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "username" | "userordercount"
> &
  Partial<{ userimage: string; username: string; userordercount: string }>;

const C3DashboardDarkVersionRowspicyseasonedseOne: React.FC<
  C3DashboardDarkVersionRowspicyseasonedseOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[53px] items-center justify-start w-[53px]">
          <div className="flex flex-col h-[53px] items-center justify-start w-[53px]">
            {!!props?.userimage ? (
              <Img
                className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                alt="imageFour"
                src={props?.userimage}
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-300 text-sm w-auto"
            size="txtBarlowMedium14Gray300"
          >
            {props?.username}
          </Text>
          <Text
            className="text-blue_gray-200 text-xs w-auto"
            size="txtBarlowRegular12"
          >
            {props?.userordercount}
          </Text>
        </div>
      </div>
    </>
  );
};

C3DashboardDarkVersionRowspicyseasonedseOne.defaultProps = {
  username: "Spicy seasoned seafood noodles",
  userordercount: "200 dishes ordered",
};

export default C3DashboardDarkVersionRowspicyseasonedseOne;

import React from "react";

import { Img, Text } from "components";

type C2PopUpDarkVersionContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "creditcardtext"
> &
  Partial<{ creditcardtext: string }>;

const C2PopUpDarkVersionContent: React.FC<C2PopUpDarkVersionContentProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start mb-[3px] w-[89%] md:w-full">
          <div className="flex flex-row gap-4 items-start justify-end md:ml-[0] ml-[22px] w-[71%] md:w-full">
            <Img
              className="h-6 mt-1 w-6"
              src="images/img_iconlinecard.svg"
              alt="iconlinecard"
            />
            <Img
              className="h-4 w-4"
              src="images/img_iconfillcheckmarkcircle.svg"
              alt="iconfillcheckma"
            />
          </div>
          <Text
            className="mr-2.5 mt-[3px] text-sm text-white-A700"
            size="txtBarlowMedium14"
          >
            {props?.creditcardtext}
          </Text>
        </div>
      </div>
    </>
  );
};

C2PopUpDarkVersionContent.defaultProps = { creditcardtext: "Credit Card" };

export default C2PopUpDarkVersionContent;

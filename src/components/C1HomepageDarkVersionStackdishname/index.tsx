import React from "react";

import { Img, Text } from "components";

type C1HomepageDarkVersionStackdishnameProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "dishname"
  | "price"
  | "p20bowlsavailablone"
  | "imagefourOne"
  | "imagefourTwo"
  | "imagefourThree"
  | "imagefourFour"
  | "imagefourFive"
  | "imagefourSix"
  | "imagefourSeven"
  | "imagefourEight"
> &
  Partial<{
    dishname: string;
    price: string;
    p20bowlsavailablone: string;
    imagefourOne: string;
    imagefourTwo: string;
    imagefourThree: string;
    imagefourFour: string;
    imagefourFive: string;
    imagefourSix: string;
    imagefourSeven: string;
    imagefourEight: string;
  }>;

const C1HomepageDarkVersionStackdishname: React.FC<
  C1HomepageDarkVersionStackdishnameProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gray-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-6 sm:px-5 rounded-[16px] w-full">
          <div className="flex flex-col gap-2 items-center justify-center mt-[90px] w-auto">
            <Text
              className="leading-[130.00%] max-w-[144px] md:max-w-full text-center text-sm text-white-A700"
              size="txtBarlowMedium14"
            >
              {props?.dishname}
            </Text>
            <div className="flex flex-col gap-1 items-center justify-center w-auto">
              <Text
                className="text-center text-sm text-white-A700 w-auto"
                size="txtBarlowRegular14WhiteA700"
              >
                {props?.price}
              </Text>
              <Text
                className="text-blue_gray-200 text-center text-sm w-auto"
                size="txtBarlowRegular14"
              >
                {props?.p20bowlsavailablone}
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute h-[132px] inset-x-[0] mx-auto top-[0] w-[132px]">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[132px]">
            <Img
              className="h-[131px] md:h-auto rounded-[50%] w-[132px]"
              src="images/img_image4.png"
              alt="imageFour"
            />
          </div>
          <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
            {!!props?.imagefourOne ? (
              <Img
                className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                alt="imageFour_One"
                src={props?.imagefourOne}
              />
            ) : null}
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              {!!props?.imagefourTwo ? (
                <Img
                  className="h-[125px] md:h-auto rounded-[50%] w-full"
                  alt="imageFour_Two"
                  src={props?.imagefourTwo}
                />
              ) : null}
            </div>
            <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
              {!!props?.imagefourThree ? (
                <Img
                  className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                  alt="imageFour_Three"
                  src={props?.imagefourThree}
                />
              ) : null}
              <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                {!!props?.imagefourFour ? (
                  <Img
                    className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                    alt="imageFour_Four"
                    src={props?.imagefourFour}
                  />
                ) : null}
                <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                  {!!props?.imagefourFive ? (
                    <Img
                      className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                      alt="imageFour_Five"
                      src={props?.imagefourFive}
                    />
                  ) : null}
                  <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                    {!!props?.imagefourSix ? (
                      <Img
                        className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                        alt="imageFour_Six"
                        src={props?.imagefourSix}
                      />
                    ) : null}
                    <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                      {!!props?.imagefourSeven ? (
                        <Img
                          className="absolute h-[132px] inset-[0] justify-center m-auto rounded-[50%] w-[132px]"
                          alt="imageFour_Seven"
                          src={props?.imagefourSeven}
                        />
                      ) : null}
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[132px]">
                        {!!props?.imagefourEight ? (
                          <Img
                            className="h-[132px] md:h-auto rounded-[50%] w-[132px]"
                            alt="imageFour_Eight"
                            src={props?.imagefourEight}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C1HomepageDarkVersionStackdishname.defaultProps = {
  dishname: "Spicy seasoned seafood noodles",
  price: "$ 2.29",
  p20bowlsavailablone: "20 Bowls available",
};

export default C1HomepageDarkVersionStackdishname;

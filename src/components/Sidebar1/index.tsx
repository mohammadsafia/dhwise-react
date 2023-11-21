import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-[674px] items-center justify-start p-6 sm:px-5 rounded-[16px] w-full">
          <Button
            className="flex h-14 items-center justify-center rounded-[12px] w-14"
            color="deep_orange_300_71"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-10"
              src="images/img_bxbxsstorealt.png"
              alt="bxbxsstorealt"
            />
          </Button>
          <Button
            className="flex h-14 items-center justify-center rounded-[10px] w-14"
            color="gray_900"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_iconlinelog.svg"
              alt="iconlinelog"
            />
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start mb-[125px] ml-3 mt-[94px] w-auto">
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24.svg"
                alt="rectangleTwentyFour"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-blue_gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 shadow-bs w-14"
                    shape="round"
                    color="red_300"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconlinehome.svg"
                      alt="iconlinehome"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25.svg"
                  alt="rectangleTwentyFive"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24_gray_900.svg"
                alt="rectangleTwentyFour_One"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 rounded-lg w-14"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_frame65.svg"
                      alt="frameSixtyFive"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25_gray_900.svg"
                  alt="rectangleTwentyFive_One"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24_gray_900.svg"
                alt="rectangleTwentyFour_Two"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 rounded-lg w-14"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconlinedashboard.svg"
                      alt="iconlinedashboa"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25_gray_900.svg"
                  alt="rectangleTwentyFive_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24_gray_900.svg"
                alt="rectangleTwentyFour_Three"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 rounded-lg w-14"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_frame65_red_300.svg"
                      alt="frameSixtyFive_One"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25_gray_900.svg"
                  alt="rectangleTwentyFive_Three"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24_gray_900.svg"
                alt="rectangleTwentyFour_Four"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 rounded-lg w-14"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconlinenotification.svg"
                      alt="iconlinenotific"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25_gray_900.svg"
                  alt="rectangleTwentyFive_Four"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
            <div className="flex flex-col items-end justify-start rounded-[10px] w-full">
              <Img
                className="h-3 w-3"
                src="images/img_rectangle24_gray_900.svg"
                alt="rectangleTwentyFour_Five"
              />
              <div className="md:h-20 h-[92px] relative w-[92px]">
                <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[11px] rounded-bl-[12px] rounded-tl-[12px] top-[0] w-full">
                  <Button
                    className="flex h-14 items-center justify-center mt-0.5 rounded-lg w-14"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconlinesetting.svg"
                      alt="iconlinesetting"
                    />
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-3 right-[0] w-3"
                  src="images/img_rectangle25_gray_900.svg"
                  alt="rectangleTwentyFive_Five"
                />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;

import React from "react";

import { Img, Line, Text } from "components";
import Hero from "components/Hero/Hero";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto md:px-10 sm:px-5 px-[92px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1250px] mx-auto w-full">
          <header className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
            <Text
              className="mb-[13px] sm:ml-[0] ml-[3px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              Home
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[455px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              @Me
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[87px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              Career
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[98px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              Life
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[92px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              Music
            </Text>
            <Text
              className="mb-[13px] sm:ml-[0] ml-[66px] mr-[21px] sm:mt-0 mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterRegular25"
            >
              Contact
            </Text>
          </header>

          <Hero />
          
          <div className="flex flex-col font-outfit justify-start mt-14 w-full">
            <Img
              className="h-[63px] md:h-auto md:ml-[0] ml-[572px] object-cover w-[16%]"
              src="images/img_cat.png"
              alt="cat"
            />
            <div className="h-[187px] sm:h-[195px] md:h-[445px] mt-11 py-[15px] relative w-full">
              <div className="h-[151px] md:h-[401px] m-auto w-full">
                <Img
                  className="h-[151px] m-auto object-cover"
                  src="images/img_group1.png"
                  alt="groupOne"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between left-[2%] top-[3%] w-[78%]">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[9px] w-[29%] md:w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-2 items-start justify-start mt-[7px]">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtOutfitBold15"
                          >
                            <span className="text-black-900 font-outfit text-left font-bold">
                              Graduate @{" "}
                            </span>
                            <span className="text-purple-900 font-outfit text-left font-bold">
                              NYU
                            </span>
                            <span className="text-black-900 font-outfit text-left font-bold">
                              {" "}
                              Courant
                            </span>
                          </Text>
                          <Text
                            className="text-[11px] text-gray-500_01"
                            size="txtOutfitRegular11"
                          >
                            Sept. 2023 - Present
                          </Text>
                        </div>
                        <Img
                          className="h-[39px] md:h-auto object-cover rounded-[3px] w-[39px]"
                          src="images/img_nyuicon1.png"
                          alt="nyuiconOne"
                        />
                      </div>
                      <Text
                        className="text-gray-600_01 text-xs w-full"
                        size="txtOutfitRegular12"
                      >
                        I major in Information Systems, took courses such as:
                        Fundamental algorithms, Operating Systems, Programming
                        Languages, Data Science, etc.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[7px] w-[29%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start mt-2.5">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtOutfitBold15"
                          >
                            <span className="text-black-900 font-outfit text-left font-bold">
                              Undergraduate @{" "}
                            </span>
                            <span className="text-pink-900 font-outfit text-left font-bold">
                              CUMTB
                            </span>
                          </Text>
                          <Text
                            className="text-[11px] text-gray-500_01"
                            size="txtOutfitRegular11"
                          >
                            Sept. 2018 - June 2022
                          </Text>
                        </div>
                        <Img
                          className="h-12 md:h-auto mb-[3px] object-cover w-[47px]"
                          src="images/img_cumtbicon1.png"
                          alt="cumtbiconOne"
                        />
                      </div>
                      <Text
                        className="text-gray-600_01 text-xs w-[98%] sm:w-full"
                        size="txtOutfitRegular12"
                      >
                        I majored in Safety Engineering, minored in Computer
                        Science. I was a part of the CUMTB Choir, Student Union,
                        once won the championship of Campus Singer Contest!
                      </Text>
                    </div>
                  </div>
                  <div className="h-[110px] md:h-[92px] relative w-[29%] md:w-full">
                    <div className="absolute bottom-[0] flex flex-col gap-[7px] inset-x-[0] items-start justify-start mx-auto">
                      <Text
                        className="text-[15px] text-black-900"
                        size="txtOutfitBold15"
                      >
                        <span className="text-black-900 font-outfit text-left font-bold">
                          Software Engineer @{" "}
                        </span>
                        <span className="text-red-A700 font-outfit text-left font-bold">
                          Zillnk
                        </span>
                      </Text>
                      <Text
                        className="text-[11px] text-gray-500_01"
                        size="txtOutfitRegular11"
                      >
                        June 2022 - Sept. 2022
                      </Text>
                      <Text
                        className="text-gray-600_01 text-xs w-full"
                        size="txtOutfitRegular12"
                      >
                        As an intern, I participated in developing the backend
                        and log management system for the Hertz+ Radio Unit
                        Product.
                      </Text>
                    </div>
                    <div className="absolute flex flex-col h-[51px] md:h-auto items-center justify-start px-[13.93px] py-[9.83px] right-[0] top-[0] w-[51px]">
                      <div className="md:h-[18px] h-[31px] relative w-full">
                        <Img
                          className="absolute h-[18px] left-[0] object-cover top-[0] w-[18px]"
                          src="images/img_image1.png"
                          alt="imageOne"
                        />
                        <Img
                          className="absolute bottom-[0] h-[18px] object-cover right-[0] w-[18px]"
                          src="images/img_image2.png"
                          alt="imageTwo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute overflow-x-auto right-[0] top-[14%] w-[15%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtOutfitBold15"
                    >
                      Software Engineer{" "}
                    </Text>
                    <Text
                      className="text-[11px] text-gray-500_01"
                      size="txtOutfitRegular11"
                    >
                      June 2021 - Sept. 2021
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs w-full"
                      size="txtOutfitRegular12"
                    >
                      As an intern, I played a role in developing the frontend
                      and backend for the Business Intelligence platform.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[22px] object-cover right-[0] top-[20%] w-[1%]"
                src="images/img_geovisicon1.png"
                alt="geovisiconOne"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[88px] mt-[98px] w-[86%] md:w-full">
              <div className="flex flex-col gap-[26px] justify-start py-[9px] w-[58%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[13px] text-[15px] text-black-900"
                  size="txtOutfitBold15"
                >
                  Recent videos & blogs
                </Text>
                <div className="flex flex-col items-center justify-start mb-[37px] w-full">
                  <div className="bg-blue_gray-100 h-56 w-full"></div>
                  <div className="bg-blue_gray-100 h-56 mt-[53px] w-full"></div>
                  <div className="bg-blue_gray-100 h-56 mt-[66px] w-full"></div>
                  <div className="bg-blue_gray-100 h-56 mt-[66px] w-full"></div>
                </div>
              </div>
              <div className="md:h-[945px] h-[947px] relative w-[41%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[92px] h-full items-center justify-start mt-[55px] mx-auto w-[99%]">
                  <div className="bg-blue_gray-100 h-[327px] w-full"></div>
                  <div className="bg-blue_gray-100 h-[327px] w-full"></div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto p-[9px] w-full">
                  <Text
                    className="mb-[908px] md:ml-[0] ml-[3px] text-[15px] text-black-900"
                    size="txtOutfitBold15"
                  >
                    Recent music & photos
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start mt-[34px] w-[86%] md:w-full">
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[17px] w-full">
              <Text
                className="ml-3 sm:ml-[0] sm:mt-0 mt-[154px] text-black-900 text-xs"
                size="txtInterRegular12"
              >
                @Shiwei He 2024. All rights reserved.
              </Text>
              <Text
                className="mb-[141px] sm:ml-[0] ml-[29px] sm:mt-0 mt-[13px] text-black-900 text-xs"
                size="txtInterRegular12"
              >
                TECHNOLOGY
              </Text>
              <Text
                className="mb-[141px] sm:ml-[0] ml-[81px] sm:mt-0 mt-[13px] text-black-900 text-xs"
                size="txtInterRegular12"
              >
                LIFE
              </Text>
              <Text
                className="mb-[141px] sm:ml-[0] ml-[97px] sm:mt-0 mt-[13px] text-black-900 text-xs"
                size="txtInterRegular12"
              >
                MUSIC
              </Text>
              <Text
                className="mb-[141px] sm:ml-[0] ml-[91px] sm:mt-0 mt-[13px] text-black-900 text-xs"
                size="txtInterRegular12"
              >
                FOLLOW ME
              </Text>
            </div>
            <Line className="bg-light_blue-A700 h-1.5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;

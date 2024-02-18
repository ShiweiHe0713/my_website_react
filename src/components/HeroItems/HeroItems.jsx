import React from 'react'
import {Img, Line, Text} from "components"

const HeroItems = () => {
  return (
    <div className="font-inter sm:h-[535px] h-[70px] md:h-[88px] mt-[18px] relative w-[93%] sm:w-full">
        <Img
            className="h-[70px] m-auto object-cover rounded-[10px] w-full"
            src="images/img_mesh.png"
            alt="mesh"
        />
        <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-[0] items-start justify-between m-auto w-[94%]">
            <Img
            className="h-[52px] sm:mt-0 mt-0.5 w-[52px]"
            src="images/img_info.svg"
            alt="info"
            />
            <Img
            className="h-[53px] w-[53px]"
            src="images/img_user.svg"
            alt="user"
            />
            <Img
            className="h-[55px] w-[55px]"
            src="images/img_link.svg"
            alt="link"
            />
            <Img
            className="h-[53px] sm:mt-0 mt-0.5 w-[53px]"
            src="images/img_mdiyoutube.svg"
            alt="mdiyoutube"
            />
            <Img
            className="h-[55px] w-[55px]"
            src="images/img_user_white_a700.svg"
            alt="user_One"
            />
            <input
            className="bg-gray-400 justify-center mb-[3px] sm:mt-0 mt-[7px] pl-[7px] sm:pr-5 pr-[35px] py-[11px] rounded-lg text-gray-600 text-lg w-[125px]"
            size="txtInterRegular18"
            placeholder="Email me!"
            />
        </div>
    </div>
  )
}

export default HeroItems
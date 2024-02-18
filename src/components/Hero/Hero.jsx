import React from 'react'
import { useState, useEffect } from 'react';
import { Img, Line, Text } from "components";
import HeroItems from "components/HeroItems/HeroItems";
import './Hero.css'

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}


const Hero = () => {
    const [width] = useWindowSize();

    return (
        <div className={`hero-container ${width < 768 ? 'stacked' : ''}`}>
        <div className="bio">
            <Text 
                className="ml-1 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtOutfitRegular25">
                Hi, there! It’s
            </Text>
            <Text
                className="mt-[22px] md:text-5xl text-[80px] text-black-900 underline"
                size="txtOutfitBold80"
            >
                Shìwěi Hé!{" "}
            </Text>
            <Text
                className="mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                size="txtOutfitRegular25"
            >
                I am a graduate student studying Information Systems @NYU
                Courant. I am huge fan of 🌐 web app development, 🤖 AI
                applications, and the intersection of music technology! Apart
                from being a tech nerd, I’m also a 📸 content creator, and a 🎸
                musician, explore my works in my website!{" "}
            </Text>
            <HeroItems />
        </div>


        <div className="photo">
            {/* <img src="images/img_herobgmesh.png" alt="Your Name" /> */}
            <img src="images/img_bgimage.png" alt="Your Name" />
        </div>
        </div>
    );
}

export default Hero

// <div className="flex md:flex-col flex-row font-outfit md:gap-10 items-center justify-between mt-[99px] w-full">
        //     <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
        //       <Text
        //         className="ml-1 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
        //         size="txtOutfitRegular25"
        //       >
        //         Hi, there! It’s
        //       </Text>
        //       <Text
        //         className="mt-[22px] md:text-5xl text-[80px] text-black-900 underline"
        //         size="txtOutfitBold80"
        //       >
        //         Shìwěi Hé!{" "}
        //       </Text>
        //       <Text
        //         className="mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
        //         size="txtOutfitRegular25"
        //       >
        //         I am a graduate student studying Information Systems @NYU
        //         Courant. I am huge fan of 🌐 web app development, 🤖AI
        //         applications, and the intersection of music technology! Apart
        //         from being a tech nerd, I’m also a 📸 content creator, and a 🎸
        //         musician, explore my works in my website!{" "}
        //       </Text>

        //       <div className="font-inter sm:h-[535px] h-[70px] md:h-[88px] mt-[18px] relative w-[93%] sm:w-full">
        //         <Img
        //           className="h-[70px] m-auto object-cover rounded-[10px] w-full"
        //           src="images/img_mesh.png"
        //           alt="mesh"
        //         />
        //         <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-[0] items-start justify-between m-auto w-[94%]">
        //           <Img
        //             className="h-[52px] sm:mt-0 mt-0.5 w-[52px]"
        //             src="images/img_info.svg"
        //             alt="info"
        //           />
        //           <Img
        //             className="h-[53px] w-[53px]"
        //             src="images/img_user.svg"
        //             alt="user"
        //           />
        //           <Img
        //             className="h-[55px] w-[55px]"
        //             src="images/img_link.svg"
        //             alt="link"
        //           />
        //           <Img
        //             className="h-[53px] sm:mt-0 mt-0.5 w-[53px]"
        //             src="images/img_mdiyoutube.svg"
        //             alt="mdiyoutube"
        //           />
        //           <Img
        //             className="h-[55px] w-[55px]"
        //             src="images/img_user_white_a700.svg"
        //             alt="user_One"
        //           />
        //           <input
        //             className="bg-gray-400 justify-center mb-[3px] sm:mt-0 mt-[7px] pl-[7px] sm:pr-5 pr-[35px] py-[11px] rounded-lg text-gray-600 text-lg w-[125px]"
        //             size="txtInterRegular18"
        //             placeholder="Email me!"
        //           />
        //         </div>
        //       </div>
        //     </div>

        //     <div className="md:h-[434px] h-[445px] relative w-[37%] md:w-full">
        //       <Img
        //         className="absolute h-[434px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[99%]"
        //         src="images/img_herobgmesh.png"
        //         alt="herobgmesh"
        //       />
        //        <Img
        //         className="h-[500px] sm:h-[200px] sm:w-[200px] object-cover rounded-bl-lg rounded-br-lg w-full"
        //         src="images/img_bgimage.png"
        //         alt="bgimage"
        //       /> 
        //        <div className="relative flex flex-col h-max inset-0 items-center justify-start m-auto w-auto">
        //         </div> 
        //     </div>
        // </div>
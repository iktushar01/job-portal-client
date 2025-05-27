import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="py-30 hero-content flex-col-reverse lg:flex-row ">
        <div className="flex-1">
          <motion.h1
            animate={{
              scale: 1,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            {" "}
            Latest Jobs For You!{" "}
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="flex-1 ">
            <motion.img
    animate={{ y: [0, 150, 0] }}
    transition={{
      duration: 7,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    src="https://i.postimg.cc/66LBV5Zt/andreea-avramescu-w-R56-AUl-Es-E4-unsplash.jpg"
    className="w-[80%] h-auto rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-500 shadow-xl"
  />

  <motion.img
    animate={{ x: [0, 100, 0] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    src="https://i.postimg.cc/PJhTG0Bg/cherrydeck-r-MILC1-PIw-M0-unsplash.jpg"
    className="w-80 h-auto rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-500 shadow-xl"
  />
        </div>
      </div>
    </div>
  );
};

export default Banner;

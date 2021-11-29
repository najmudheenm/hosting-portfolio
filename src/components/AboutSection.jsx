import React from "react";
import home1 from "../img/home1.png";
// styled
import { About, Discription, Hide, Image } from "../style";

//animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <About>
      <Discription>
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              you <span>dreams</span> come
            </motion.h2>
          </Hide>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas have a
            professional with amazing skill
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Discription>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="guy" />
      </Image>
      <Wave />
    </About>
  );
}

export default AboutSection;

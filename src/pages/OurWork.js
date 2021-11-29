//imort
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

//importing images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  slider,
  lineAnim,
  sliderContainer,
  movieAnim,
} from "../animation";

function OurWork() {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="./the-athlete">
          <div className="hide">
            <motion.img variants={photoAnimation} src={athlete} alt="athlet" />
          </div>
        </Link>
      </Movie>
      <Movie
        ref={element1}
        variants={movieAnim}
        animate={controls1}
        initial="hidden"
      >
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="./the-racer">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt="The racer"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={movieAnim}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2>Good Time</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="./good-times">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="Good time shot"
            />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
}

//styling
const Work = styled(motion.div)`
  background: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;

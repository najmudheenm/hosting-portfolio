import Togle from "./Togle";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
//styled
import { About } from "../style";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Togle title="How Do I Start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              officia.
            </p>
          </div>
        </Togle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Togle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              officia.
            </p>
          </div>
        </Togle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Togle title="Diffrent Payment Method">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              officia.
            </p>
          </div>
        </Togle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Togle title="What Product Do You Offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              officia.
            </p>
          </div>
        </Togle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    border-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;

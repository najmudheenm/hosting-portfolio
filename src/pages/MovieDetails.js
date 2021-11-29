import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieStates";
import styled from "styled-components";
import Award from "../components/Award";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetails() {
  const history = useLocation();
  const url = history.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currenMovie = movies.filter((state) => state.url === url);
    setMovie(currenMovie[0]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award, index) => (
              <Award award={award} key={index} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie 2nd imag" />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
}

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h2 {
    padding: 2rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export default MovieDetails;

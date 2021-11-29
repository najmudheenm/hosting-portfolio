import styled from "styled-components";

function Award({ award }) {
  return (
    <AwardStyle>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </AwardStyle>
  );
}

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 10 0%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
export default Award;

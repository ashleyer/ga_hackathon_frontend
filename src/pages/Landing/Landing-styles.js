import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--lightPink);
  text-align: center;
  h1 {
    letter-spacing: 2px;
    padding: 40px;
    font-size: 40px;
    font-weight: 400;
  }
  

  img {
    height: 40vh;
    postition: relative;
    display: inline-block;
  }

  button {
    background: var(--darkPink);
    padding: 10px 40px;
    border-radius: 20px;
    position: absolute;
    transform: translate(-50%,-50%);
    margin-right: -50%;
    top: 45%;
    left: 50%;
    border: none;
    font-size: 17px;
  }
`;
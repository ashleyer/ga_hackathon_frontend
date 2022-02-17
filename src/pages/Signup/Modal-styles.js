import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 30vh;
    left: 25%;
    width: 50%;
    height: 45vh;
    background-color: #FDF5FB;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;

    @media screen and (max-width: 505px) {
        left: 20%;
        width: 60%;
    }

`;
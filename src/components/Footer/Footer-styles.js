import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    display: flex;
    gap: 300px;
    color: var(--lightPink);
    
    img {
        height: 50px;
        margin: 20px 15px;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: 10px;
    }

    .social-media {
        display: flex;
        gap: 40px;
    }

    .terms {
        display: flex;
        gap: 20px; 
        
    }

    a {
        color: inherit;
    }

    @media screen and (max-width: 950px) {
            gap: 0px;
            justify-content: space-evenly;
    }
`;
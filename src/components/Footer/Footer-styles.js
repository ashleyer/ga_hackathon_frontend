import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    color: var(--lightPink);
    display: flex;
    justify-content: space-between;
    
    
    img {
        height: 50px;
        margin: 20px 15px;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 5px;
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

   
`;
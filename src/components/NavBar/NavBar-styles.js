import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    

    img {
        height: 80px;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: center;
    }

    .signup-btn {
        padding: 5px 15px;
        border-radius: 12px;
        border: none;
        font-size: 15px;
    }

    .login-btn {
        border: none;
        background-color: var(--darkGrey);
        color: var(--lightPink);
        font-size: 15px;
    }
`;
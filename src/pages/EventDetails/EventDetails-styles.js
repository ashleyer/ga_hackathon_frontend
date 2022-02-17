import styled from "styled-components";

export const Wrapper = styled.div`
text-align: center;
background-color: var(--lightPink);
padding: 80px;

button {
    background-color: var(--darkPink);
    padding: 5px 10px;
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
}

.event-box {
    background-color: white;
    border: 1px solid black;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
}

.top-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin: 0 auto;
    padding: 0px 0px 40px 0px;

    h1 {
        align-self: center;
    }
}

.info {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 15px;
}

.info-box {
    display: flex;
    gap: 20px;
}

`;
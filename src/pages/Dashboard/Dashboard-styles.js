import styled from "styled-components";

export const Wrapper = styled.div`
text-align: center;
background-color: var(--lightPink);
padding: 70px 100px;
color: white;

button {
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
}

.event-box {
    background-color: var(--darkGrey);
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 40px;
    gap: 10px;
}

a {
    color: white;
    text-decoration: none;
}

.new-event-btn {
    background-color: var(--darkPink);
    padding: 5px 20px;
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
}
`;
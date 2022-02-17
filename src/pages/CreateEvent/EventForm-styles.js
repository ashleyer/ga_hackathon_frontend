import styled from "styled-components";

export const Wrapper = styled.div`
background-color: var(--lightPink);
form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px ;
   
}

textarea {
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0px;
}

input {
    border-radius: 5px;
    padding: 5px;
    margin: 7px 0px;
}

button {
    background-color: var(--darkPink);
    padding: 5px 90px;
    border-radius: 12px;
    margin: 10px 250px;
    cursor: pointer;
    font-size: 17px;
}

.end-form {
    display: flex;
    justify-content: space-evenly;
}

.date {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.location {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`;
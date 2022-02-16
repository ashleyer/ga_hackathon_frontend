import { createPortal } from "react-dom";
// import styles from "./Modal.css";
import { Background, Wrapper } from "./Modal-styles";


const Modal = (props) => {
    return (
        <>
           <Background onClick={props.onClose}></Background>
            <Wrapper>{props.children}</Wrapper>
        </>
    )
};

export default Modal;

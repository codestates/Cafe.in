import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

// ModalOverlay is a 2nd component just for internal use
// we're only exporting the 1st component which is LoginModal

const ModalOverlay = (props) => {
  // public/index.html에 <div id="modal-hook"></div>에 mount될 것.
  // content가 이 DOM에 render된다.
  const content = (
    // className을 modal과 props로 전달해주는 고유의 이름, 2가지를 지정해줄 수도 있다.
    // 그냥 extra flexibility를 넣는 방법
    // style도 inline style을 줄 수 있다. (당장 안 씀)
    <div className={`modal ${props.className}`} style={props.style}>
      {/* props에 onSubmit form이 있으면 bind시킨다. */}
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <header className={`modal__header ${props.headerClass}`}>
          {props.header}
        </header>
        <div className={`modal__content ${props.contetnClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {/* Submit button이 올 수 있는 위치 */}
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {/* Backdrop은 modal 밖에 클릭시 없어지게 하기 위함 */}
      {props.show && <Backdrop onClick={props.onCancel} />}

      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        {/* we forward all the props we get from outside to ModalOverlay*/}
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;

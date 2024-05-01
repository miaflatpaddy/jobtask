﻿import React from "react";
import "./modal.css";
const Modal = ({active,setActive,children,disableGlobalScroll}) => {
    if(disableGlobalScroll&& active){
        console.log("noscroll");
        document.body.style.overflow='hidden';
    }
    return (
        <div className = {active ? "modal active" : "modal"} onClick={() => [setActive(false),document.body.style.overflow='visible']}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation}>
                {children}
            </div>
        </div>
    );
};
export default Modal;


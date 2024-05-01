import React from "react";
const CensoredText = ({badWords,children}) => {
    let str = children;
    let placeholder='';
    let sstr = str.split(/\b/);
    badWords.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            placeholder+='*';   
        }
        for (let i = 0; i < sstr.length; i++) {
            if(sstr[i]===element){
                sstr[i] = placeholder;
            }
        }
    });
    str = sstr.join('');
    return (
        <div className = "censoredWords">
            {str}
        </div>
    );
};
export default CensoredText;
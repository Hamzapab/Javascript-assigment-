import { a, b, c } from "./mod-two.js";

export default function(numOne,numTwo,numThree){
    return numOne + numTwo + numThree;
}

const modOne = {
    numOne : a,
    numTwo : b,
    numThree : c,
};

export {modOne};
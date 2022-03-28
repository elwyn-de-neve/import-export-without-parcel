import { square } from "./square.js";

const isRightAngledTriangle = ( a, b, c ) => {
    return square( a ) + square( b ) === square( c );
};

export default isRightAngledTriangle;
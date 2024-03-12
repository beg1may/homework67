import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../App/Store";
import {appendDigit, operatorEvaluation, solution, clear, onDelete} from "./CounterSlice";

const Counter: React.FC = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleDigitClick = (digit: string) => {
        dispatch(appendDigit(digit));
    };

    const handleOperatorClick = (operator: string) => {
        dispatch(operatorEvaluation(operator));
    };

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center mt-5">
                <h1 className="mb-4 rounded border border-black w-25">{counterValue}</h1>
                <div className="d-flex justify-content-between w-25">
                    <button style={{width: '130px'}} type="button" className="btn btn-light" onClick={() => dispatch(clear())}>C</button>
                    <button style={{width: '130px'}} type="button" className="btn btn-light" onClick={() => dispatch(onDelete())}>←</button>
                </div>
                <div className="d-flex justify-content-between w-25 mt-2">
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("7")}>7</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("8")}>8</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("9")}>9</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleOperatorClick("+")}>+</button>
                </div>
                <div className="d-flex justify-content-between mt-2 w-25">
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("4")}>4</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("5")}>5</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("6")}>6</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleOperatorClick("-")}>-</button>
                </div>
                <div className="d-flex justify-content-between mt-2 w-25">
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("1")}>1</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("2")}>2</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("3")}>3</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleOperatorClick("*")}>*</button>
                </div>
                <div className="d-flex justify-content-between mt-2 w-25">
                    <button style={{width: '135px'}} type="button" className="btn btn-light" onClick={() => handleDigitClick("0")}>0</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => dispatch(solution())}>=</button>
                    <button style={{width: '60px'}} type="button" className="btn btn-light" onClick={() => handleOperatorClick("/")}>/</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
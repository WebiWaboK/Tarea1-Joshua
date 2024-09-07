import { useState } from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator() {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [operator, setOperator] = useState<String | null > (null);
    const [firstOperand, setFirstOperand] = useState<number | null>(null)

    function handleNumberClick(value: string) {
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }

    function handleOperationClick(newOperator : string) {
        if (firstOperand === null) {
            setFirstOperand(parseFloat(displayValue));
            setOperator(newOperator);
            setDisplayValue('0');
        } else {
            calculate();
            setOperator(newOperator);
        }
    }

    function calculate() {
        if (firstOperand !== null && operator !== null) {
            const secondOperand = parseFloat(displayValue);
            switch (operator) {
                case '+':
                    setDisplayValue((firstOperand + secondOperand).toString());
                    break;
                case '-':
                    setDisplayValue((firstOperand - secondOperand).toString());
                    break;
                case '*':
                    setDisplayValue((firstOperand * secondOperand).toString());
                    break;
                case '/':
                    if (secondOperand === 0) {
                        setDisplayValue('Error');
                    } else {
                        setDisplayValue((firstOperand / secondOperand).toString());
                    }
                    break;
            }
            setFirstOperand(null);
            setOperator(null);
        }
    }

    function handleClearClick() {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
    }


    return (
        <div className="calculator">
            {' '}
            <div className="display">{displayValue}</div> {' '}
            <div>
                <button value="7" onClick={() => handleNumberClick('7')}></button>
                <button value="4" onClick={() => handleNumberClick('4')}></button>
                <button value="1" onClick={() => handleNumberClick('1')}></button>
                <button value="0" onClick={() => handleNumberClick('0')}></button>
            </div>
            <div>
                <button value="8" onClick={() => handleNumberClick('8')}></button>
                <button value="5" onClick={() => handleNumberClick('5')}></button>
                <button value="2" onClick={() => handleNumberClick('2')}></button>
                <button value="=" onClick={calculate}></button>
            </div>
            <div>
                <button value="9" onClick={() => handleNumberClick('9')}></button>
                <button value="6" onClick={() => handleNumberClick('6')}></button>
                <button value="3" onClick={() => handleNumberClick('3')}></button>
                <button value="-" onClick={() => handleNumberClick('-')}></button>
            </div>
            <div>
                <button value="C" onClick={handleClearClick}></button>
                <button value="/" onClick={() => handleOperationClick('/')}></button>
                <button value="*" onClick={() => handleOperationClick('*')}></button>
                <button value="+" onClick={() => handleOperationClick('+')}></button>
            </div>
        </div>
    );
}

export default Calculator;
import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render () {
        return (
            <table>
                <tr>
                    <td id="clear" colSpan="2" className="clearBtns">AC</td>
                    <td id="clear-entry" className="clearBtns">CE</td>
                    <td id="divide" className="operator">/</td>
                </tr>
                <tr>
                    <td id="seven" className="number">7</td>
                    <td id="eight" className="number">8</td>
                    <td id="nine" className="number">9</td>
                    <td id="multiply" className="operator">X</td>
                </tr>
                <tr>
                    <td id="four" className="number">4</td>
                    <td id="five" className="number">5</td>
                    <td id="six" className="number">6</td>
                    <td id="subtract" className="operator">-</td>
                </tr>
                <tr>
                    <td id="one" className="number">1</td>
                    <td id="two" className="number">2</td>
                    <td id="three" className="number">3</td>
                    <td id="add" className="operator">+</td>
                </tr>
                <tr>
                    <td id="zero" colSpan="2" className="number">0</td>
                    <td id="decimal" className="number">.</td>
                    <td id="equals" className="operator">=</td>
                </tr>
            </table>
        );
    }
}

export default Buttons;
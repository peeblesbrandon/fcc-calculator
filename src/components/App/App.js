import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
    7: 'seven',
    8: 'eight',
    9: 'nine',
    4: 'four',
    5: 'five',
    6: 'six',
    1: 'one',
    2: 'two',
    3: 'three',
    0: 'zero',
    '/': 'divide',
    '*': 'multiply',
    '-': 'subtract',
    '+': 'add'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPressed: undefined,
            calc: '0',
            operation: undefined
        }
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e) {
        {
            const { calc, lastPressed } = this.state;
            const { innerText } = e.target;

            switch (innerText) {
                case 'AC': {
                    this.setState({
                        calc: '0',
                    });
                    break;
                }

                case '=': {
                    const evaluated = eval(calc);
                    this.setState({
                        calc: evaluated
                    });
                    break;
                }

                case '.': {
                    const splitted = calc.split(/[\+\-\*\/]/);
                    const last = splitted.slice(-1)[0];

                    if (!last.includes('.')) {
                        this.setState({
                            calc: calc + '.'
                        })
                    }

                    break;
                }

                default: {
                    let e = undefined;
                    if (ops.includes(innerText)) {
                        if (ops.includes(lastPressed) && innerText !== '-') {
                            const lastNumberIdx = calc.split('').reverse()
                                .findIndex(char => char !== ' ' && nums.includes(+char));
                            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
                        } else {
                            e = `${calc} ${innerText} `;
                        }
                    } else {
                        e = (calc === '0') ? innerText : (calc + innerText);
                    }

                    this.setState({
                        calc: e
                    });
                }
            }

            this.setState({
                lastPressed: innerText
            })

        }
    }

    render() {
        return (
            <div id="calculator" className="d-flex flex-column justify-content-center align-items-center">
                <Display displayMsg={this.state.calc} />
                <Buttons handleButton={this.handleButton}/>
            </div>
        );
    }
}

export default App;

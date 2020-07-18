import React from 'react';
import './Display.css';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="display" colSpan="4">{this.props.result}</td>
                </tr>
            </table>
        );
    }
}

export default Display;
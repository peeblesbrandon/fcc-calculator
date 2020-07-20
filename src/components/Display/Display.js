import React from 'react';
import './Display.css';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="display" colSpan="4">{String(this.props.displayMsg).replace(/[\n\r]+/g, '')}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Display;
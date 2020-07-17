import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 0,
            operator: '',
            input: 0 
        }
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    }

    handleMarkdownChange(markdownText) {
        return this.setState({
            input: markdownText
        });
    }

    render() {
        return (
            <div id="calculator" className="">
                <Display />
                <Buttons />
            </div>
        );
    }
}

export default App;

import * as React from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import { array } from 'prop-types';

interface State{
    result:string;
}

class App extends React.Component <{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            result : ""
        };
    }
    onClick = (button: any) => {

        if (button === "="){
            this.calculate()
        }

        else if (button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        var charAtZero=this.state.result.charAt(0);

        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else if(charAtZero==="-"|| charAtZero==="+" || charAtZero==="*" || charAtZero==="/"){
            checkResult = this.state.result.replace(this.state.result.charAt(0)," ")
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || " " ) + ""
            })
            

        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent typed={this.state.result} onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;

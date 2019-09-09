import * as React from 'react';

interface Props {
    onClick: (button: any) => void;
    typed: string;
}

interface State {
    symbol: string[];
}
export default class KeyPadComponent extends React.Component<Props, State>{
    state = {
        symbol: ["CE", "C", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "+", "-", "*", "/", "="],
    };


    onClick(value: string) {
        let actions = ['+', '-', '/', '*', 'CE', '=', 'C'];

        if (this.props.typed === '' && actions.indexOf(value) < 0) {
            this.props.onClick(value);
        } else if (this.props.typed !== '') {
            this.props.onClick(value);
        } else {
            // do nothing
        }
    }
    disableButton(button: string) {
        let actions = ['+', '-', '/', '*', 'CE', '=', 'C'];
        if (this.props.typed == '') {
            if (actions.indexOf(button) > -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
      
    }
    render() {
        return (
            <div className="button">

                {this.state.symbol.map((item, key) =>
                    <button disabled={this.disableButton(item)} key={key} onClick={() => this.onClick(item)}> {item} </button>
                )}
            </div>
        );
    }
}
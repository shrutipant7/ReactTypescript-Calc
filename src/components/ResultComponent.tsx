import React, { Component } from 'react';

interface Props {
    result: any;
}

class ResultComponent extends Component<Props> {
    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        );
    }
}

export default ResultComponent;


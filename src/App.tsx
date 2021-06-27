import React from "react";
import styled from "styled-components";

interface IState {
    counter: number;
}

class App extends React.Component<{}, IState> {
    state = {
        counter: 0,
    };

    add = () => {
        this.setState((prev) => {
            return {
                counter: prev.counter + 1,
            };
        });
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <span>{counter}</span>
                <button onClick={this.add}>add 1</button>
            </div>
        );
    }
}

export default App;

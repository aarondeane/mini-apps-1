// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="main">
                <div className="header">
                    <h1>Welcome to the Checkout</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
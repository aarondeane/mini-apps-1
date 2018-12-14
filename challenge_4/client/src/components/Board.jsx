import React from 'react';

const Square = (props) => {
    return (
        <button className="square">
            {props.value}
        </button>
    );   
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(56).fill(null),
            player1Next: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    renderSquare(i) {
        return (<Square value={this.state.squares[i]}
            // onClick={() => this.handleClick(i)}
            />
        );
    }
    handleClick(e) {
        const squares = this.state.squares.slice();
        const colId = e.target.parentNode.id;
        const colSquares = e.target.parentNode.children;
        console.log(colSquares);
        
        // squares[i] = this.state.player1Next ? '1' : '2';
        this.setState({
            squares: squares,
            player1Next: !this.state.player1Next,
        });
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.player1Next ? '1' : '2');
        }
        
        return (
        <div>    
            <div className="status">{status}</div><br />
            <div className="container">
                <div id="col1" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(0)}<br />
                    {this.renderSquare(1)}<br />
                    {this.renderSquare(2)}<br />
                    {this.renderSquare(3)}<br />
                    {this.renderSquare(4)}<br />
                    {this.renderSquare(5)}<br />
                    {this.renderSquare(6)}<br />
                </div>
                <div id="col2" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(7)}<br />
                    {this.renderSquare(8)}<br />
                    {this.renderSquare(9)}<br />
                    {this.renderSquare(10)}<br />
                    {this.renderSquare(11)}<br />
                    {this.renderSquare(12)}<br />
                    {this.renderSquare(13)}<br />
                </div>
                <div id="col3" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(14)}<br />
                    {this.renderSquare(15)}<br />
                    {this.renderSquare(16)}<br />
                    {this.renderSquare(17)}<br />
                    {this.renderSquare(18)}<br />
                    {this.renderSquare(19)}<br />
                    {this.renderSquare(20)}<br />
                </div>
                <div id="col4" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(21)}<br />
                    {this.renderSquare(22)}<br />
                    {this.renderSquare(23)}<br />
                    {this.renderSquare(24)}<br />
                    {this.renderSquare(25)}<br />
                    {this.renderSquare(26)}<br />
                    {this.renderSquare(27)}<br />
                </div>
                <div id="col5" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(28)}<br />
                    {this.renderSquare(29)}<br />
                    {this.renderSquare(30)}<br />
                    {this.renderSquare(31)}<br />
                    {this.renderSquare(32)}<br />
                    {this.renderSquare(33)}<br />
                    {this.renderSquare(34)}<br />
                </div>
                <div id="col6" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(35)}<br />
                    {this.renderSquare(36)}<br />
                    {this.renderSquare(37)}<br />
                    {this.renderSquare(38)}<br />
                    {this.renderSquare(39)}<br />
                    {this.renderSquare(40)}<br />
                    {this.renderSquare(41)}<br />
                </div>
                <div id="col7" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(42)}<br />
                    {this.renderSquare(43)}<br />
                    {this.renderSquare(44)}<br />
                    {this.renderSquare(45)}<br />
                    {this.renderSquare(46)}<br />
                    {this.renderSquare(47)}<br />
                    {this.renderSquare(48)}<br />
                </div>
                <div id="col8" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(49)}<br />
                    {this.renderSquare(50)}<br />
                    {this.renderSquare(51)}<br />
                    {this.renderSquare(52)}<br />
                    {this.renderSquare(53)}<br />
                    {this.renderSquare(54)}<br />
                    {this.renderSquare(55)}<br />
                </div>
            </div>
        </div>
    );
    }
}

function gravity(column) {
    let values=[];
    for(var i = 0; i < colSquares.length; i++) {
        if(colSquares[i].outerHTML !== "<br>") {
          values.push(colSquares[i].value);
        }
    }
}

function calculateWinner(squares) {

}

export default Board;
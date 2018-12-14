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
            squares: [
                [null,null,null,null,null,null],
                [null,null,null,null,null,null],
                [null,null,null,null,null,null],
                [null,null,null,null,null,null],
                [null,null,null,null,null,null],
                [null,null,null,null,null,null],
                [null,null,null,null,null,null]
                ],
            // squares: Array(56).fill(null),
            player1Next: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    renderSquare(i,j) {
        return (<Square value={this.state.squares[i][j]}
            // onClick={() => this.handleClick(i)}
            />
        );
    }
    handleClick(e) {
        const squares = this.state.squares.slice();
        const colId = e.target.parentNode.id.slice(-1);
        const colSquares = e.target.parentNode.children;
        let squareVals = [];

        for(var i = 0; i < colSquares.length; i++) {
            if(colSquares[i].outerHTML !== "<br>") {
              squareVals.push(colSquares[i].value);
            }
        }

        if(!squareVals.includes('1') && !squareVals.includes('2')) {
            squares[colId][5] = this.state.player1Next ? '1' : '2';
        }
        
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
                <div id="col0" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(0,0)}<br />
                    {this.renderSquare(0,1)}<br />
                    {this.renderSquare(0,2)}<br />
                    {this.renderSquare(0,3)}<br />
                    {this.renderSquare(0,4)}<br />
                    {this.renderSquare(0,5)}<br />
                </div>
                <div id="col1" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(1,0)}<br />
                    {this.renderSquare(1,1)}<br />
                    {this.renderSquare(1,2)}<br />
                    {this.renderSquare(1,3)}<br />
                    {this.renderSquare(1,4)}<br />
                    {this.renderSquare(1,5)}<br />
                </div>
                <div id="col2" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(2,0)}<br />
                    {this.renderSquare(2,1)}<br />
                    {this.renderSquare(2,2)}<br />
                    {this.renderSquare(2,3)}<br />
                    {this.renderSquare(2,4)}<br />
                    {this.renderSquare(2,5)}<br />
                </div>
                <div id="col3" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(3,0)}<br />
                    {this.renderSquare(3,1)}<br />
                    {this.renderSquare(3,2)}<br />
                    {this.renderSquare(3,3)}<br />
                    {this.renderSquare(3,4)}<br />
                    {this.renderSquare(3,5)}<br />
                </div>
                <div id="col4" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(4,0)}<br />
                    {this.renderSquare(4,1)}<br />
                    {this.renderSquare(4,2)}<br />
                    {this.renderSquare(4,3)}<br />
                    {this.renderSquare(4,4)}<br />
                    {this.renderSquare(4,5)}<br />
                </div>
                <div id="col5" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(5,0)}<br />
                    {this.renderSquare(5,1)}<br />
                    {this.renderSquare(5,2)}<br />
                    {this.renderSquare(5,3)}<br />
                    {this.renderSquare(5,4)}<br />
                    {this.renderSquare(5,5)}<br />
                </div>
                <div id="col6" className="board-column" onClick={(e) => this.handleClick(e)}>
                    {this.renderSquare(6,0)}<br />
                    {this.renderSquare(6,1)}<br />
                    {this.renderSquare(6,2)}<br />
                    {this.renderSquare(6,3)}<br />
                    {this.renderSquare(6,4)}<br />
                    {this.renderSquare(6,5)}<br />
                </div>
            </div>
        </div>
    );
    }
}

function gravity(column) {
    
}

function calculateWinner(squares) {

}

export default Board;
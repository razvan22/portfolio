import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Cell from './Cell';
import '../css/Board.css';

class Board extends Component {
    static defaultProps = {
        numberOfRows: 5,
        numberOfColumns: 5,
        chanceLightStartsOn: 0.25
    }

    constructor (props) {
        super(props);
        this.createBoard = this.createBoard.bind(this);
        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
    }

    createBoard () {
       const board = [];
       for (let i = 0; i < this.props.boardSize; i++) {
            const row = [];
            for (let y = 0; y < this.props.boardSize; y++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
       }
       return board;
    }

    flipCellsAround(coord) {
        let {boardSize} = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
                 board[y][x] = !board[y][x];
            }
        }

        flipCell(y,x)
        flipCell(y,x -1)
        flipCell(y,x + 1)
        flipCell(y - 1,x)
        flipCell(y + 1,x)
        let hasWon = board.every( row => row.every(cell => !cell));

        this.setState({board, hasWon});
    }

    render () {
        if  (this.state.hasWon) {
            return <h1><span className="neon-orange">You</span> <span className="neon-blue">Won !</span></h1>
        }
        let board = [];
        for(let y = 0; y < this.props.boardSize; y++){
            let row = [];
            for(let x = 0; x < this.props.boardSize; x++){
                let cellPosition = `${y}-${x}`
                row.push(<Cell key={cellPosition} 
                            isLit={this.state.board[y][x]}
                            flipCellsAroundMe={ () => this.flipCellsAround(cellPosition)}
                        />)
            }
            board.push(<tr key={y}>{row}</tr> )
        }

        return (
					<section>
						<div className="menu-bar">
                            <h1 className="menu-item" onClick={()=> this.props.history.push("/")}>Home</h1>
						</div>
						<h1 className="title">
							<span className="neon-orange">Lights</span>
							<span className="neon-blue">Out</span>
						</h1>
						<table className="Board">
							<tbody>{board}</tbody>
						</table>
					</section>
				);
    }
}

export default withRouter(Board);
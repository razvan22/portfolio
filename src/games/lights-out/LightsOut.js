import React, { Component } from 'react'
import Board from './components/Board';
import './css/LightsOut.css'
class LightsOut extends Component{

    static defaultProps = {
        gameLevel: [
            {title: 'easy', level:5},
            {title: 'medium', level:8},
            {title:'hard', level: 10}
        ],

    }

    constructor (props) {
        super(props);
        this.displayGameMenu = this.displayGameMenu.bind(this);
        this.startGame = this.startGame.bind(this);
        this.state = {
            startGame : false,
            gameLevel: null
        }
    }

    startGame (e) {
        const level = e.target.value;
        this.setState({gameLevel: level, startGame: true});
        
    }

    displayGameMenu () {
        return this.props.gameLevel.map(gameLevel => 
            <button 
                onClick={this.startGame}
                key={gameLevel.title} 
                className="btn-level"
                value={gameLevel.level}
            >{gameLevel.title.toUpperCase()}</button> 
        )
    }



    render () {
        return(
           <section className="LightsOut">
                {this.state.startGame  ? <Board boardSize={this.state.gameLevel}/> :
                    <section className="LightsOut">
                        <h1 className="title"><span className="neon-orange">Lights</span><span className="neon-blue">Out</span></h1>
                        {this.displayGameMenu()}
                    </section>
                }
           </section>
        )
    }

}
export default LightsOut;
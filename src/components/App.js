import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBallRendered: false,
      ballPosition: { left: 0 },
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          const newPosition = { ...this.state.ballPosition };
          newPosition.left += 5; // Move ball 5 pixels right
          this.setState({ ballPosition: newPosition });
        }
      });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          const newPosition = { ...this.state.ballPosition };
          newPosition.left += 5; // Move ball 5 pixels right
          this.setState({ ballPosition: newPosition });
        }
      });
  }

  render() {
    const { isBallRendered, ballPosition } = this.state;

    return (
      <div className="game-container">
        {isBallRendered ? (
          <div className="ball" style={{ left: `${ballPosition.left}px` }} />
        ) : (
          <button className="start" onClick={()=> {this.setState({ isBallRendered: true });}}>
            Start Game
          </button>
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';

class PassengerCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString(),
      history: []
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      history: [...prevState.history, {count: prevState.count + 1, time: new Date().toLocaleTimeString()}]
    }));
  }

  render() {
    return (
      <div className="content">
        <video autoPlay loop muted style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}>
          <source src={`${process.env.PUBLIC_URL}/videos/video1.mp4`} type="video/mp4" />
        </video>
        <div className="card">
          <h2>Passenger Counter</h2>
          <p>Passenger count: {this.state.count}</p>
          <p>Current time: {this.state.time}</p>
          <div>
  <button onClick={this.incrementCount}>Add Passenger</button>
</div>
<div>
  <Link to="history" smooth={true} duration={500}>Scroll to History</Link>
</div>
          <Element name="history">
            <div>
              <h3>History:</h3>
              {this.state.history.map((item, index) => (
                <div key={index} className="history-item">
                  Passenger count: {item.count}, Time: {item.time}
                </div>
              ))}
            </div>
          </Element>
        </div>
      </div>
    );
  }
}

export default PassengerCounter;
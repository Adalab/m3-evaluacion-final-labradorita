import React from "react";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  render() {
    return <div className="App">Hola caraacola</div>;
  }
}

export default App;

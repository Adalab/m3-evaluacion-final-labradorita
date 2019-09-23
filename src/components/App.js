import React from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "../services/fetchData";
import Home from "./Home";
import Detail from "./Detail";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterName: ""
    };
    this.getUserFilter = this.getUserFilter.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchData().then(data => {
      //console.log(data.results);
      this.setState({
        characters: data.results
      });
    });
  }
  getUserFilter(ev) {
    const filterName = ev.currentTarget.value;
    this.setState({
      filterName: filterName
    });
  }

  render() {
    // destructuring
    const { characters, filterName } = this.state;
    //console.log("Comprobar", this.state.characters);
    return (
      <div className="app">
        <h1 className="app__title">RICK AND MORTY</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  value={filterName}
                  getUserFilter={this.getUserFilter}
                  characters={characters}
                  filterName={filterName}
                />
              );
            }}
          />
          <Route
            path="/detail/:characterId"
            render={routerProps => {
              return (
                <Detail routerProps={routerProps} characters={characters} />
              );
            }}
          />
        </Switch>

        <footer>
          <p>SOY EL FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;

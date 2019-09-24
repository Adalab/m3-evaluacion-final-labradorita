import React from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "../services/fetchData";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import "../stylesheets/app.scss";

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

    //Personajes cuyo name coincide con el valor del input
    const myFilterCharacters = characters.filter(myFilterName => {
      return myFilterName.name.toLowerCase().includes(filterName.toLowerCase());
    });

    //console.log("Comprobar", this.state.characters);
    return (
      <div className="app">
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  value={filterName}
                  getUserFilter={this.getUserFilter}
                  characters={myFilterCharacters}
                  filterName={filterName}
                />
              );
            }}
          />
          <Route
            path="/detail/:characterId"
            render={routerProps => {
              return (
                <CharacterDetail
                  routerProps={routerProps}
                  characters={characters}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

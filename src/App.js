import { Component } from 'react';

import { CardList } from './components/card-list/Card-list.component';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList name="Ombiji">
        {
          this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name }</h1>)
        } 
        </ CardList>
    </div>
    )
  }
}

export default App;

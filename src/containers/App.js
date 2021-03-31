import React,{ Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    console.log(this.props.store)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if ( this.state.robots.length === 0 ) {
      return <h1>Loading...</h1>
    }else {
      return(
        <div id="app">
          <h1>RoboFriends</h1>
          <SearchBox onTyping= { this.onSearchChange } />
          <CardList robots= { filteredRobots } />
        </div>
      );
    }
  }
}

export default App;
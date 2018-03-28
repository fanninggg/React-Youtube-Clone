import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBnqmFhV67eAPuZCE2GMSYa3tnz6-VE7lQ';

const App = () => {
  return <div><SearchBar /></div>;
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
  )

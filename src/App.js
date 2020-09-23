import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetch } from './useFetch';
import PopularJSRepos from './PopularJSRepos';

function App() {
  const data = useFetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100');
  if (!data || data.items) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="App">
      <PopularJSRepos data={data.data} pageSize={20} />
    </div>
  )
}

export default App;

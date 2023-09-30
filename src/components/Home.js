import React from "react";
import {username} from'../data/user';
import {city} from '../data/user';

const Home = () => {
  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>City: {city}</p>
      {/* Your Home component code */}
    </div>
  );
};

export default Home;
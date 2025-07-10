import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenCount, setTokenCount] = useState(3);
  const [skillSearch, setSkillSearch] = useState('');
  const [location, setLocation] = useState('');
  const [online, setOnline] = useState(false);

  const dummyUsers = [
    { name: 'Emma R.', skill: 'Photography', demo: 'https://youtu.be/demo1', location: 'Delhi', online: true },
    { name: 'John K.', skill: 'DJ Console', demo: '', location: 'Mumbai', online: false },
  ];

  if (!loggedIn) {
    return (
      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">SkillSwap Login</h1>
        <input className="border p-2 w-full mb-2" placeholder="Email" />
        <input className="border p-2 w-full mb-4" placeholder="Password" type="password" />
        <button onClick={() => setLoggedIn(true)} className="bg-blue-500 text-white p-2 w-full rounded">Sign In</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Dashboard | Tokens: {tokenCount}</h2>

      <div className="my-4">
        <h3 className="font-semibold">Search Skills</h3>
        <input
          className="border p-2 mr-2"
          placeholder="Skill (e.g., Excel)"
          value={skillSearch}
          onChange={(e) => setSkillSearch(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Location (e.g., Delhi)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={online}
            onChange={() => setOnline(!online)}
          />
          Online Only
        </label>
      </div>

      <div>
        {dummyUsers
          .filter(
            (u) =>
              (!skillSearch || u.skill.toLowerCase().includes(skillSearch.toLowerCase())) &&
              (!location || u.location.toLowerCase().includes(location.toLowerCase())) &&
              (!online || u.online === true)
          )
          .map((user, i) => (
            <div key={i} className="border p-4 mb-2 rounded shadow">
              <h4 className="text-lg font-semibold">{user.name}</h4>
              <p>Skill: {user.skill}</p>
              <p>Location: {user.location} {user.online ? '(Online Available)' : ''}</p>
              {user.demo && (
                <a className="text-blue-500 underline" href={user.demo} target="_blank" rel="noopener noreferrer">Watch Demo</a>
              )}
              <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded">Chat / Schedule</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

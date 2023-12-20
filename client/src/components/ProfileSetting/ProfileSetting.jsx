
// App.js
import React, { useState } from 'react';

function App() {
  const [character, setCharacter] = useState({
    name: '',
    role: '',
    species: '',
    traits: '',
    gender: '',
    profilePicture: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log('Character Profile:', character);
  };

  return (
    <div className="app">
      <h1>Create Your Character Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <div className='padding'>Role:</div>
          <select
            name="role"
            value={character.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Mother">Mother</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Species:
          <select
            name="species"
            value={character.species}
            onChange={handleChange}
            required
          >
            <option value="">Select Species</option>
            <option value="Dog">Dog</option>
            <option value="Human">Human</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Traits:
          <input
            type="text"
            name="traits"
            value={character.traits}
            onChange={handleChange}
            required
          />
        </label>

        <label className='padding'>
          Gender:
          <select
            name="gender"
            value={character.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Profile Picture URL:
          <input
            type="text"
            name="profilePicture"
            value={character.profilePicture}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


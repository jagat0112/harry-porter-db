import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const baseUrl = `http://localhost:5000/characters`;

    axios.get(baseUrl).then((data) => setCharacters(data.data));
  }, []);
  return (
    <React.Fragment>
      <div className="intro">
        <h1>Harry Potter Character Database</h1>
        <p>
          Browse our comprehensive database to out more information about your
          favourite Harry Potter character.
        </p>
      </div>
      <div className="flex">
        {characters.map((char) => {
          return (
            <div className="card container" key={char.id}>
              <img src={char.image} alt="harry porter characters" />
              <Link className="char-name" to={`/${char.id}`}>
                {char.name}
              </Link>
              <p>{char.dob}</p>
              <button>
                {" "}
                <Link to={`/${char.id}`}>View</Link>
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Homepage;

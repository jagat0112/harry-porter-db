import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Character = () => {
  const baseUrl = `http://localhost:5000/characters`;

  const { id } = useParams();
  let history = useHistory();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/${id}`);

        setCharacter(data);
      } catch (error) {
        history.push("/not-found");
      }
    };
    getCharacter();
  }, []);
  return (
    <div className="character">
      <img src={character.image} />
      <ul>
        <li>
          <strong>Name:</strong> {character.name}
        </li>
        <li>
          <strong>Date of Birth:</strong> {character.dob}
        </li>
        <li>
          <strong>BirthPlace:</strong> {character.birthPlace}
        </li>
        <li>
          <strong> Nick Names:</strong>{" "}
          {character.nickNames && character.nickNames.join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default Character;

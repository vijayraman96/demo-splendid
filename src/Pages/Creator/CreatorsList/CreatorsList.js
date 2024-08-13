import React, { useState, useEffect } from "react";
import "./creatorslist.css";
import useGetAllCreatorList from "../../../utils/CustomHooks/useGetAllCreatorList";
import { all } from "axios";
// import NewLoader from "../../../Components/Loader/index";

const CreatorsList = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [selectedLetter, setSelectedLetter] = useState("A");
  const [filteredNames, setFilteredNames] = useState([]);
  const [enabledLetters, setEnabledLetters] = useState([]);
  const { getAllCreatorList, allCreatorList, loading } = useGetAllCreatorList();
  const [names, setNames] = useState([]);
  useEffect(() => {
    let req = {};
    getAllCreatorList(req);
  }, []);
  useEffect(() => {
    setNames(
      allCreatorList.map((x) =>
        x?.user?.first_name ? x?.user?.first_name : ""
      )
    );
  }, [allCreatorList]);
  useEffect(() => {
    const filtered = names.filter((x) =>
      x.toLowerCase().startsWith(selectedLetter.toLowerCase())
    );
    setFilteredNames(filtered);
  }, [selectedLetter, names]);

  useEffect(() => {
    const enabled = alphabets.filter((x) =>
      names.some((name) => name.toLowerCase().startsWith(x.toLowerCase()))
    );
    setEnabledLetters(enabled);
  }, [names]);

  return (
    <div className="creators-list">
      <h2 className="creators-list-title">Creators On Splendid!</h2>
      <div className="alphabets">
        {alphabets.map((letter) => (
          <button
            key={letter}
            disabled={!enabledLetters.includes(letter)}
            onClick={() => setSelectedLetter(letter)}
            className={selectedLetter === letter ? "active" : ""}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="creator-names">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <p key={index} className="creator-name">
              {name}
            </p>
          ))
        ) : (
          <>
            {/* {loading ? (
              <>
                <NewLoader/>
              </>
            ) : (
              <></>
            )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default CreatorsList;

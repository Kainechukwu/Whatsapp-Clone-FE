import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
  const themes = [
    "blue",
    "black",
    "red",
    "peru",
    "yellow",
    "brown",
    "orange",
    "green",
    "purple",
    "chartreuse",
    "mediumorchid",
  ];

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets);
  }
  //Hooks are called in the order they were created
  //do not ever use conditional hooks because it will then have a variable amount of hooks being called
  //and so a hook that comes after the conditional hook may be assigned the wrong thing
  //basically dont use hooks in if statements or for-loops
  // if (true) {
  //   const [place, setPlace] = useState("");
  // }

  //   console.log(location);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-0 mx-auto w-11/12 mt-20">
      {/* //controlled form where react monitors each change */}
      <form
        className="p-10 mb-10 rounded-lg bg-gray-300 dark:bg-slate-900 shadow-lg flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            //dark theme style for input
            // style={{
            //   color: "#f8fafc",
            //   backgroundColor: "#1e2c42",
            // }}
            className="w-60 mb-5 block "
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            className="w-60 mb-5 block"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            className="w-60 mb-5 block disabled:opacity-50"
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((thisBreed) => (
              <option key={thisBreed} value={thisBreed}>
                {thisBreed}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme
          <select
            className="w-60 mb-5 block"
            id="theme"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            onBlur={(e) => {
              setTheme(e.target.value);
            }}
          >
            <option />
            {themes.map((thisTheme) => (
              <option key={thisTheme} value={thisTheme}>
                {thisTheme}
              </option>
            ))}
          </select>
        </label>
        <button
          className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>

      <Results pets={pets} />

      {/* Uncontrolled form where the input is used only ion submit */}
      {/* <form onSubmit={()}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form> */}
      {/* {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))} */}
    </div>
  );
};

export default SearchParams;

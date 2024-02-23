import React, { useState } from "react";
import usePasswordGenerator from "./components/hook/use-password-generator";
import PasswordStrength from "./components/PasswordStrength";

const App = () => {
  const [length, setLength] = useState(4);
  const [copy, setCopy] = useState(false);
  const [checkCondition, setCheckCondition] = useState([
    { title: "Include Uppercase letter", state: false },
    { title: "Include Lowercase letter", state: false },
    { title: "Include Number", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const handleCheck = (i) => {
    const checked = [...checkCondition];

    checked[i].state = !checked[i].state;

    setCheckCondition(checked);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  const { password, errorHandle, generatePassword } = usePasswordGenerator();
  return (
    <div className="container">
   
    <div className="bg-gray-900 text-white m-4 p-6 rounded w-full md:w-1/2  mx-auto  shadow-xl">
    <h1 className="text-teal-300 text-xl sm:text-3xl font-medium pb-3">Password Generator</h1>
      {password && (
        <div className="flex justify-between items-center">
          {/* password and copy btn */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide leading-5">
              {password}
            </h2>
          </div>
          <button
            className="px-4 py-2 bg-teal-500 rounded-md duration-300 hover:bg-teal-300 "
            onClick={handleCopy}>
            {" "}
            {copy ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <div>
        {/* password length */}
        <div className="flex justify-between items-center my-4 text-xl font-medium ">
          <h3>Character Length </h3>
          <p>{length}</p>
        </div>
        <div>
          <input
            type="range"
            value={length}
            min={4}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-teal-300 cursor-grab"
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-4 mt-4">
        {/* check box */}
        {checkCondition.map((check, i) => (
          <div key={i} className="flex items-center  gap-3">
            <input
              type="checkbox"
              id={`check${i + 1}`}
              className="w-4 h-4 cursor-pointer accent-teal-500"
              onClick={() => handleCheck(i)}
              checked={check.state}
            />
            <label htmlFor={`check${i + 1}`} className="text-xs sm:text-lg cursor-pointer duration-300 hover:text-teal-400">
              {check.title}
            </label>
          </div>
        ))}
      </div>

      {password &&<div className="mt-5 flex justify-between items-center">
        {/* strength of password */}
     <PasswordStrength password={password.length} />
      </div>}
      <div>
        {errorHandle && (
          <div className="text-red-600 text-sm font-medium pt-4">
            {errorHandle}
          </div>
        )}
        {/* generator password */}
        <button
          className="w-full px-4 py-2 mt-6 bg-teal-500 rounded-md font-medium duration-300 hover:bg-teal-300 "
          onClick={() => generatePassword(checkCondition, length)}>
          Generate Password
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorHandle, setErrorHandle] = useState("");

  const generatePassword = (checkboxSelected, length) => {
    let charset = "",
     passwordGenerated = "";
    const selectedOption = checkboxSelected.filter((checked) => checked.state);

    if (selectedOption.length === 0) {
        setErrorHandle("Select atlease one option");
        setTimeout(() => {
            setErrorHandle("")
        }, 2000);
        setPassword("");
        return;
      }
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase letter":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letter":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Number":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()_-";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);

     passwordGenerated+= charset[randomIndex];
    }
    console.log(passwordGenerated);
    setPassword(passwordGenerated);
    setErrorHandle("");
  };
  return{password,errorHandle,generatePassword}
};

export default usePasswordGenerator;

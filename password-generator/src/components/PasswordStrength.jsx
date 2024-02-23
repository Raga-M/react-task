import React from 'react'

const PasswordStrength = ({password}) => {
    console.log(password);
    let strength=""

    if(password <4) strength="Very Poor"


    else if ( password< 8)  strength=" Poor"


    else if( password <10)  strength="Moderate"


    else if( password <12) strength="Good"

   else if( password <16) strength="Strong"

    else strength="Very Strong"




  return (
    <>
    <p>Strength:</p>
    <h5 className="font-medium">{strength}</h5>
    </>
  )
}

export default PasswordStrength
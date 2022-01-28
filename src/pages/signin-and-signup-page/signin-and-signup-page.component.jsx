import React, { useState } from "react";
import Button from "../../components/button/button.component";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./signin-and-signup-page.style.scss";


const SigninAndSignupPage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div className="signin-and-signup-page">
    
      <SignIn />

      <Button
        buttonText={isNewUser ? "Hide" : "Create new"}
        color={isNewUser ? "DarkSeaGreen" : "DarkTurquoise"}
        actionOnClick={() => setIsNewUser(!isNewUser)}
      />
     
      {isNewUser && <SignUp setIsNewUser={setIsNewUser} />}
    </div>
  );
};

export default SigninAndSignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-and-signup-page.style.scss';

const SigninAndSignupPage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate;
  return (
    <div className="signin-and-signup-page">
      <SignIn navigate={navigate} />

      <Button
        buttonText={isNewUser ? 'Hide' : 'Do not have an account'}
        color={isNewUser ? 'DarkSeaGreen' : 'Blue'}
        actionOnClick={() => setIsNewUser(!isNewUser)}
      />

      {isNewUser && <SignUp setIsNewUser={setIsNewUser} />}
    </div>
  );
};

export default SigninAndSignupPage;

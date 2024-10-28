import React from 'react';
import './adduserpage.style.scss';
import { useNavigate } from 'react-router-dom';

import SignUpWithoutCompany from '../../components/singup-without-company/signup-without-company.component';

const AddUserPage = () => {
  const navigate = useNavigate();
  return (
    <div className="adduserpage">
      <SignUpWithoutCompany navigate={navigate} />
    </div>
  );
};

export default AddUserPage;

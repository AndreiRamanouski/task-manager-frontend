import React from 'react';
import './detailspage.style.scss';

import TaskDetails from '../../components/taskdetails/taskdetails.component';

const DetailsPage = () => {
  return (
    <div className="detailspage">
      <TaskDetails />
    </div>
  );
};

export default DetailsPage;

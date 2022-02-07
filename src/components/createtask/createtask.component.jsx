import moment from "moment";
import React from "react";
import "./createtask.style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import MOCK_TASKS from "../../mockdata/mock.tasks";
import { useState, useEffect } from "react/cjs/react.development";
import Select from 'react-select'

const CreateTask = () => {
    const title = "";
    const date = moment(new Date()).format("YYYY-MM-DD");
    const [usersToAssign, setUserToAsign] = useState({});
  
    const navigate = useNavigate();
  
    const [loading, setLoading] = useState(true);
    const [allUsersInTheOrganization, setAllUsersInTheOrganization] = useState(
      []
    );
  
    const selectMultipleFields = () => {
      return <Select options={allUsersInTheOrganization}
       onChange={(user) => setUserToAsign(user)}
       placeholder='Assign users'
       />
    }
  
    useEffect(() => {
      const fetchUsers = () => {
        const [data] = MOCK_TASKS.filter((task) => task.id === 1);
        setAllUsersInTheOrganization(data.allUsersInTheOrganization);
  
        setLoading(false);
      };
      fetchUsers();
    }, [allUsersInTheOrganization]);
  
    const onSubmit = (values) => {
      console.log(values);
      navigate("/tasks");
    };
  
    const validate = (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Enter a Description";
      } else if (values.title.length < 5) {
        errors.title = "Enter more than 5 letters";
      }
      if (moment(values.date).isBefore(moment(new Date()).format("YYYY-MM-DD"))) {
        errors.date = "Enter a Valid Target Date";
      }
  
      return errors;
    };
  
    return (
      <div className="create-task">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
            <div>
            <span className="title">Create a new task</span>
          <Formik
            initialValues={{ title, date, usersToAssign }}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={validate}
            enableReinitialize={true}
          >
            <Form>
              <ErrorMessage
                name="title"
                component="div"
                className=""
              ></ErrorMessage>
              
              <fieldset className="group">
                <Field className="form-input" type="text" name="title" />
                <label className="form-input-label">Enter title: </label>
              </fieldset>
              <ErrorMessage
                name="date"
                component="div"
                className=""
              ></ErrorMessage>
              <fieldset  className="group">
                <label className="form-input-label">Target Date: </label>
                <Field className="form-input" type="date" name="date" />
              </fieldset>
              <Field
              className="form-input"
              name="usersToAssign"
              options={allUsersInTheOrganization}
              component={selectMultipleFields}
              />
            
              <Button buttonText="Create" color="green"/>
            </Form>
          </Formik>
          </div>
        )}
      </div>
    );
};

export default CreateTask;

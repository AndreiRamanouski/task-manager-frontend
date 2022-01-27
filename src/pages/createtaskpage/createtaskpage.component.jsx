import moment from "moment";
import React from "react";
import "./createtaskpage.style.scss";
import { Formik, Field, Form, ErrorMessage, FormikProps } from "formik";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import MOCK_TASKS from "../../mockdata/mock.tasks";
import { useState, useEffect } from "react/cjs/react.development";
import Select from 'react-select'

const CreateTaskPage = () => {
  const title = "";
  const date = moment(new Date()).format("YYYY-MM-DD");
  const [usersToAssign, setUserToAsign] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [allUsersInTheOrganization, setAllUsersInTheOrganization] = useState(
    []
  );

  const selectMultipleFields = () => {
    return <Select options={allUsersInTheOrganization} onChange={(user) => setUserToAsign(user)} />
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
    <div className="createtaskpage">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Formik
          className="form"
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
            <ErrorMessage
              name="date"
              component="div"
              className=""
            ></ErrorMessage>
            <fieldset className="">
              <label>Enter title: </label>
              <Field className="field" type="text" name="title" />
            </fieldset>
            <fieldset className="">
              <label>Target Date: </label>
              <Field className="" type="date" name="date" />
            </fieldset>
            <Field
            className=''
            name="usersToAssign"
            options={allUsersInTheOrganization}
            component={selectMultipleFields}
            />
          
            <Button buttonText="Create" color="Blue">
              Submit
            </Button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default CreateTaskPage;

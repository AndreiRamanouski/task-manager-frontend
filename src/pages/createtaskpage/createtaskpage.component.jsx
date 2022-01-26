import moment from 'moment';
import React from 'react';
import './createtaskpage.style.scss'
import { useState } from 'react/cjs/react.development';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from '../../components/button/button.component';
import { useNavigate, withNavigate} from 'react-router-dom'

const CreateTaskPage = ({history}) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
    const navigate = useNavigate()

    const setValues = ({ title, date }) => {
      setTitle(title)
      setDate(date)
    }
    const onSubmit = (values) =>{

      navigate('/tasks')
    }

    const validate = (values) => {
        let errors = {};
        let currentDate = moment(new Date()).format("YYYY-MM-DD")
        if (!values.title) {
          errors.title = "Enter a Description";
        } else if (values.title.length < 5) {
          errors.title = "Enter more than 5 letters";
        }
        if (moment(values.date).format("YYYY-MM-DD") < currentDate || moment(values.date).format("YYYY-MM-DD") === currentDate) {
          errors.date = "Enter a Valid Target Date";
        }
    
        return errors;
      }


  return (
      <div className='createtaskpage'>

      <Formik
            initialValues={{ title, date }}
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
                <fieldset className="form-group">
                  <label>title</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date" 
                    name="date"
                  />
                </fieldset>
                <Button buttonText="Create" color="Blue">Submit</Button>
              </Form>


            </Formik>
      </div>
      )
};

export default CreateTaskPage;

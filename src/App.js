import "./App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { Card } from "react-bootstrap";
const formValidationSchema = yup.object({
  task: yup.string().min(4).required("Why not fill the task?"),
  time: yup.string().min(4).required("Why not fill the time?"),
  status: yup.string().min(4).required("Why not fill the status?"),
});

const task = [];
function App() {
  return (
    <div className="App">
      <Task />
    </div>
  );
}

function Task() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        task: "",
        time: "",
        status: "",
      },

      validationSchema: formValidationSchema,
      onSubmit: (newtask) => {
        console.log("onsubmit", newtask);
        task.push(newtask);
        console.log(task);
      },
    });
  return (
    <div>
      <div className="header">
        <img
          src="https://images.prismic.io/smarttask%2F9d9ed8be-fe43-47ee-ade8-db2a126d70ac_floating+guy2.gif?auto=compress,format"
          alt="Task"
        />
        <h2>Task Management</h2>
      </div>
      <Form onSubmit={handleSubmit} className="task">
        <Form.Label>Task</Form.Label>
        <Form.Control
          id="task"
          name="task"
          size="lg"
          type="text"
          value={values.task}
          placeholder="task"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.task && touched.task && errors.task}
        <Form.Label>Time to finish</Form.Label>
        <Form.Control
          id="time"
          name="time"
          size="lg"
          type="text"
          value={values.time}
          placeholder="time"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.time && touched.time && errors.time}
        <Form.Label>Status</Form.Label>
        <Form.Control
          id="status"
          name="status"
          size="lg"
          type="text"
          value={values.status}
          placeholder="important or unimportant"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.status && touched.status && errors.status}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Data task={task} />
    </div>
  );
}

function Data({ task }) {
  console.log(task);
  return (
    <div>
      <h4>Previous Task</h4>
      <div className="display">
        {task.map((task, index) => (
          <Display taskname={task.task} time={task.time} status={task.status} />
        ))}
      </div>
    </div>
  );
}

function Display({ taskname, time, status }) {
  return (
    <div className="tasklist">
      {/* <h4>Previous Task</h4>
      <h5>{taskname}</h5>
      <h5>{time}</h5>
      <h5>{status}</h5> */}
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>{taskname}</Card.Header>
        <Card.Body>
          <Card.Title>{status}</Card.Title>
          <Card.Text>{time}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default App;

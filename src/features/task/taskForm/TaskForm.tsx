import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {
  createTask,
  editTask,
  handleModalOpen,
  selectSelectedTask,
} from "../taskSlice";
import styles from "./TaskForm.module.scss";

type Inputs = {
  taskTitle?: string;
};

type ProTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<ProTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selecetdTask = useSelector(selectSelectedTask);
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    // console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selecetdTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    // console.log(data);
    dispatch(handleModalOpen(false));
  };
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? selecetdTask.title : ""}
          variant="outlined"
          {...register("taskTitle")}
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => dispatch(handleModalOpen(false))}
              className={styles.cancel_button}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;

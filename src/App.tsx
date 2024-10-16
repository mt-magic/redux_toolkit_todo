import React from "react";
import Header from "./components/header/Header";
import TaskFrom from "./features/task/taskForm/TaskForm";
import TaskList from "./features/task/taskList/taskList";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskFrom />
        <TaskList />
      </div>
    </div>
  );
};

export default App;

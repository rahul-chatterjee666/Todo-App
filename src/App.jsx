import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoApp1 from "./components/TodoItem1";
import TodoApp2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoApp1 />
        <TodoApp2 />
      </div>
    </center>
  );
}
export default App;

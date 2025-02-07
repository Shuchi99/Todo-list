import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <header className="App-header">
        <h1>Todo App</h1>
        {/* <TodoForm></TodoForm> */}
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;

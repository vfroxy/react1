import { useState } from "react"
import Header from "./components/Header/Header"
import UserInfo from "./components/UserInfo/UserInfo"
import Todoform from "./components/TodoForm/TodoForm"
import TodoList from "./components/TodoList/TodoList"

function App() {
  const name = 'Janusz';
  const age = 63;

  const [todos,setTodos] = useState([
    'Nauczyc sie Reacta',
    'Zrobic zadanie domowe',
    'Powtorzyc Js'
])

  return (
    <>
    <Header/>
    <UserInfo name={name} age={age} />
    <Todoform/>
    <TodoList todos={todos}/>
    </>
  );
}

export default App
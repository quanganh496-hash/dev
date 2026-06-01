import { useState } from "react"
const Addtodo = () => {
    let [todo,setTodo] = useState("")
  return (
    <div>
    <h1>Todo</h1>
    <form action="">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="submit">Add</button>

    </form>
    </div>
  )
}

export default Addtodo
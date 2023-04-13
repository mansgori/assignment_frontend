import { useEffect, useState } from "react";
import ToDo from "./component/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [title, setTitle]= useState("")
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, title, text) => {
    setIsUpdating(true)
    setText(text)
    setTitle(title)
    setToDoId(_id)
  }

  
  

  return (
    <div className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
        <input
            type="text"
            placeholder="Add Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, title, text, setToDo, setText, setIsUpdating)
              : () => addToDo(title,text, setTitle, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id}
          id = {item._id} 
          title={item.title}
          text={item.text}
          updateMode = {() => updateMode(item._id, item.title, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;
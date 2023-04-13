import axios from 'axios'

const baseUrl = "http://localhost:8080/task"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (title, text, setTitle, setText, setToDo) => {

    axios
        .post(`${baseUrl}`, { title, text })
        .then((data) => {
            console.log(data);
            setText("")
            setTitle("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, title, text, setToDo, setTitle, setText, setIsUpdating) => {

    axios
        .patch(`${baseUrl}`, { _id: toDoId, title, text })
        .then((data) => {
            setText("")
            setTitle("")
            //setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (id, setToDo) => {

    axios
        
        .delete(`${baseUrl}`, {id})
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }
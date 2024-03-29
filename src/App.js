import './App.css'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Today </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          setToDos([...toDos, { key: Date.now(), text: toDo, status: false }])
          setToDo('')
        }} className="fas fa-plus"></i>

      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.key}>
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)

                  setToDos(toDos.filter(obj2 => {
                    if
                      (obj2.key === obj.key) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))

                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    let temp;
                    if (obj2.key !== obj.key) {
                      temp = obj2
                    }
                    console.log(temp)
                    return temp;
                  }));
                }} className="fas fa-trash"></i>
              </div>
            </div>)
        })}

        {/* {toDos.map((obj) => {
          if (obj.status) {

            return (<h1>{obj.text}</h1>)
          }
          return null
        })} */}
      </div>
    </div>
  );
}

// deleteToDo(index) {
//       const toDos = this.state.toDos.filter();
//       const toDo = toDos[index];
//       this.setState({ toDos: toDos });
//     }
export default App;

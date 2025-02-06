import { useEffect, useState } from 'react'
import Navbar from './component/navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";


function App() {
  const [todos, settodo] = useState([]);
  const [newtodo, setnewtodo] = useState("");
  const [showfinished, setshowfinished] = useState(true);




  
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      try {
        const parsedTodos = JSON.parse(localTodos);
        if (Array.isArray(parsedTodos)) {
          settodo(parsedTodos);
        }
      } catch (err) {
        console.error("Failed to parse todos from localStorage", err);
      }
    }
  }, []);

  const saveTL = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };


  const handlechange = (e) => {
    setnewtodo(e.target.value)

  }
  const togglefinished = () => {
    setshowfinished(!showfinished);
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodo(newtodos);
    saveTL();
  }

  const handleadd = () => {
    if (newtodo.trim() !== "") {
      const updatetodo =([...todos,{id:Date.now(),newtodo,isCompleted:false}]);
      settodo(updatetodo)
      setnewtodo("");
      saveTL(updatetodo);

    }
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id == id)
    setnewtodo(t[0].newtodo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    });
    settodo(newtodos);
    saveTL(newtodos);
  }
  const handleDelete = (e, id) => {
    let newtodos = todos.filter(item =>item.id !== id);
    settodo(newtodos);
    saveTL(newtodos);
  }


  return (
    <>
      <Navbar />
      <div className="body w-screen h-full  bg-indigo-700 bg-[url(https://wallpapercave.com/wp/wp1931300.jpg)]">
        
      <div className=" bg-indigo-800  mx-auto  px-4 py-4 md:w-1/2 items-center justify-center h-screen bg-cover bg-center  bg-[url(https://wallpapercave.com/wp/wp1931300.jpg)] ">
      
        <div className="flex justify-center font-bold text-2xl font-serif  text-white mb-4 ">Manage your tasks</div>
        <div className="text flex justify-between">
          <div className="rounded-lg w-full px-2 py-1 my-2 ">
            <input className="flex w-full bg-indigo-950 text-sm text-white"  type="text" name="" placeholder="write your task here..." id="text" value={newtodo} onChange={handlechange} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleadd(); }}}
 />
          </div>
          <div className="btn rounded-lg bg-indigo-700 text-white m-3 px-4 py-3px font-bold text-xs hover: cursor-pointer hover:text-sm hover:bg-indigo-950"><button onClick={handleadd} ><IoIosSave />
          </button></div>
        </div>
        <div className="check mx-5px flex">
          <input className='ml-2' type="checkbox" id="check" onChange={togglefinished} checked={showfinished} />
          <label htmlFor="check"><span className='text-xs mx-2 font-mono text-white  cursor-pointer hover:font-bold hover:text-sm'>Show finished</span></label>
        </div>
        <div className="todos flex-col ">
          {todos.length === 0 && <div className='my-4 text-center font-semibold font-serif text-indigo-300'>No  task  to   display</div>}
          {todos.map(item => {
            return (showfinished || !item.isCompleted) && (
              <div key={item.id}>
                <div className="flex gap-5 justify-between hover:bg-indigo-950 rounded-xl my-1">
                  <div className='flex gap-5 my-1 font-semibold ml-2 text-white font-mono'>
                  <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.newtodo}</div>

                  </div>
                 
                  <div className="btn h-full ">
                  <button className='rounded-lg bg-indigo-700 text-white my-2 mx-3 px-3 py-1 font-bold text-xs hover: cursor-pointer hover:text-sm hover:bg-indigo-800' onClick={(e) => handleEdit(e, item.id)}><FaEdit />
                  </button>
                  <button className='rounded-lg bg-indigo-700 text-white my-2 mx-3 px-3 py-1 font-bold text-xs hover: cursor-pointer hover:text-sm hover:bg-indigo-800' onClick={(e) => handleDelete(e, item.id)}><MdDelete />
                  </button>
                </div>
                </div>
                
              </div>
            );
          })}

        </div>

      </div>
      </div>
     
    </>
  )
}

export default App

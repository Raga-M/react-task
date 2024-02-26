import { useEffect, useRef, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  // get todo data from local or if it's not make it empty arr
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  // use ref for inout focus
  const inputRef = useRef("");
  // set data to local Storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // adding todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") setTodo([...todo, { input, compeleted: false }]);

    setInput("");
    // after add todo input should focus again
    inputRef.current.focus();
  };

  // delete todo
  const handleDelete = (v) => {
    const newTodo = [...todo];
    // const newTodos =todo.filter((_,i)=>v !== i)

    newTodo.splice(v, 1);
    setTodo(newTodo);
  };

  // compelet todo check
  const handlecheck = (i) => {
    const compelet = [...todo];
    compelet[i].compeleted = !compelet[i].compeleted;
    setTodo(compelet);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className=" bg-white p-5 mt-5 rounded-md shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-primary my-4">
          Todo List
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 px-3 py-1  rounded-md border-gray-600 focus:outline-none focus:border-none focus:ring-2 ring-primary"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="ms-3 border-2 border-primary bg-primary duration-300 hover:bg-primary/70 text-white rounded-md  px-3 py-1">
            Add
          </button>
        </form>
        {todo.length > 0 && (
          <ul>
            {todo.map((val, i) => (
              <li className="flex justify-between items-center my-3" key={i}>
                <span className="flex items-center gap-3" data-aos="fade-up">
                  <input
                    type="checkbox"
                    checked={val.compeleted}
                    onChange={() => handlecheck(i)}
                    className="w-5 h-5 accent-primary rounded-full cursor-pointer"
                    title="Compeleted"
                  />
                  <span
                    className={`${
                      val.compeleted ? "line-through text-primary" : ""
                    } text-xl`}>
                    {val.input}
                  </span>
                </span>
                <button
                  className="ms-3 border-2 border-red-500 bg-red-500 duration-300 hover:bg-red-400 text-white rounded-md  px-3 py-1 "
                  onClick={() => handleDelete(i)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

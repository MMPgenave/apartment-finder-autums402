import React, { useState, useMemo, useId } from "react";

function TestUseMemo2() {
  const [isDark, setIsDark] = useState(true);
  const [tab, setTab] = useState("All");

  //creating todolist containing 50 items, and use useMemo to cache this value
  function createTodoList() {
    console.log("start creating todoList...");
    const list = [];
    for (let i = 0; i < 50; i++) {
      list.push({
        id: i,
        text: `Todo ${i + 1}`,
        completed: Math.random() > 0.5,
      });
    }
    return list;
  }
  //cache the list with useMemo
  const cachedTodoList = useMemo(() => createTodoList(), []);
  return (
    <>
      <hr />
      <div className=" h-48 w-[300px]  justify-start mt-4 bg-red-300 flex">
        <button
          type="button"
          className={`${
            tab == "All" ? "bg-gray-100" : "bg-gray-400"
          }  rounded-sm border text-gray-700 px-2 py-1 mr-2 hover:bg-gray-200 `}
          onClick={() => setTab("All")}
        >
          All
        </button>
        <button
          type="button"
          className={`${
            tab == "Active" ? "bg-gray-100" : "bg-gray-400"
          }  rounded-sm border text-gray-700 px-2 py-1 mr-2 hover:bg-gray-200 `}
          onClick={() => setTab("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className={`${
            tab == "Completed" ? "bg-gray-100" : "bg-gray-400"
          }  rounded-sm border text-gray-700 px-2 py-1 mr-2 hover:bg-gray-200 `}
          onClick={() => setTab("Completed")}
        >
          Completed
        </button>
      </div>
      <br />
      <label className="flex mr-2 w-24">
        <input
          className="mr-14"
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        <p className="mr-2">Light mode</p>
      </label>
      <hr></hr>
      <br />
      <TodoList darkmode={isDark} list={cachedTodoList} Tab={tab} />
    </>
  );
}
//end of Parent Component

//define Children component
const TodoList = ({ darkmode, list, Tab }) => {
  //define Filtred list
  let filtredList = [];
  //filter list based on Tab value
  switch (Tab) {
    case "All":
      filtredList = [...list];
      break;
    case "Active":
      filtredList = [...list.filter((item) => item.completed == false)];
      break;
    case "Completed":
      filtredList = [...list.filter((item) => item.completed == true)];
    default:
      break;
  }
  return (
    <>
      <div className=" mt-1 mr-2 pr-2">
        <p
          className={
            !darkmode
              ? " bg-gray-900	text-gray-50 p-2"
              : " bg-gray-50	text-gray-900 p-2"
          }
        >
          <ol>
            {filtredList.map((item) => (
              <li>
                {item.completed ? <s>{item.text}</s> : item.text}

                <span className="text-2xl font-bold">.</span>
              </li>
            ))}
          </ol>
        </p>
      </div>
    </>
  );
};

export default TestUseMemo2;

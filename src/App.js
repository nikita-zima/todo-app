import React from 'react';
import './index.css';
import TodoList from './sources/TodoList.js';
import DisplayClock from "./sources/Clock";
import{BsFillCalendarFill} from 'react-icons/bs'

function App() {
    return (
        <div className="app">
            <header className="header">
                < DisplayClock />
                <h1>Todo App <BsFillCalendarFill/> </h1>
            </header>
            <div className='todo-app'>
               <TodoList />
            </div>
        </div>
    );
}

export default App;
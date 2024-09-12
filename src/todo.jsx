import React, { useState } from 'react';
import Button from './button';
import DeleteAll from './deleteAll';

const TodoCreate = () => {
    const [todo, setTodo] = useState('');
    const [items, setItems] = useState(['namaz', 'university', 'cricket']);

    function addToDo() {
        if (todo) {
            setItems([...items, todo]);
            setTodo('');
        }
    }

    function deleteToDo() {
        setItems([]);
    }

    function deleteSingleTodo(index) {
        const newItems = [...items]; // Copy the array
        newItems.splice(index, 1); // Remove the item at the given index
        setItems(newItems); // Update the state with the new array
    }

    return (
        <div className="text-center">
            <div className="flex justify-center mt-5">
                <input
                    className="fontu font-bold bor m-2 w-full max-w-xs px-4 py-2 text-center rounded-md outline-none"
                    value={todo}
                    placeholder="Add todo...?"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <Button onclick={addToDo} label="Add" color="bg-blue-500 text-white" />
                <DeleteAll onclick={deleteToDo} />
            </div>
            <div className="mt-5">
                {items.map((data, index) => (
                    <div key={index} className="flex justify-center  items-center mt-3 ">
                        <h1 className="w-full rounded-md p-1 bor mar text-wrap max-w-xs font-bold text-center text-white fontu ">{data}</h1>
                        <Button
                            onclick={() => deleteSingleTodo(index)}
                            label={<i>&#10006;</i>}
                            color="bg-red-500 text-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoCreate;

import React from 'react'
import './habitForm.css'
export default function HabitForm(props) {

    const inputRef = React.createRef();
    const formRef = React.createRef();
    const handleAdd = e => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={handleAdd}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="please input your habit"
            />
            <button className="add-button" on>Add</button>
        </form>
    )
}

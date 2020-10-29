import React, { memo, useRef, useCallback } from 'react'
import './habitForm.css'

// props onAdd={handleAdd}만 존재
//memo는 특정 결과값을 재사용, useCallback은 특정 함수를 재사용 => re-rendering이 안되게

const HabitForm = memo(props => {

    const inputRef = useRef();
    const formRef = useRef();
    const handleAdd = useCallback(
        e => {
            e.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            formRef.current.reset();
        }
    )

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
)

export default HabitForm;
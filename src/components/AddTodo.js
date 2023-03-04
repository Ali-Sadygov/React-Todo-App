import { useCallback, useContext, useRef } from 'react'
import { MyTodoApp } from '../context/TodoApp'
import style from './style.module.css'

export default function AddTodo() {
    const [state, dispatch] = useContext(MyTodoApp)
    const inpRef = useRef()
    
    const onSubmit = useCallback(e => {
    e.preventDefault();

        dispatch({
            type: 'add',
            payload: inpRef.current.value
        })

        inpRef.current.value = ''
        console.log(state.todos[0])
    }, [])

    return(
        <>
            <form className={style.form} onSubmit={onSubmit}>
                <input className={style.inp} type={'text'} placeholder={"Add a new task"} ref={inpRef}/>
                <button className={style.btn}>ADD</button>
            </form>
        </>
    )
}
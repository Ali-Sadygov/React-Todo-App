import { useContext, useRef } from "react"
import { MyTodoApp } from "../context/TodoApp"
import style from './style.module.css'

export default function TodoItem(
    {task,
    id,
    isActive,
    isEditable}
){
    const [state, dispatch] = useContext(MyTodoApp)
    const inpRef = useRef()

    const complete = () => {
        dispatch({
            type: "complete",
            payload: id
        })
    }

    const uncomplete = () => {
        dispatch({
            type: 'uncomplete',
            payload: id
        })
    }

    const edit = () => {
        dispatch({
            type: 'open_edit_form',
            payload: id
        })
    }

    const save = () => {
        dispatch({
            type: 'save_change',
            payload: {
                id,
                task: inpRef.current.value
            }
        })
    }

    const cancel = () => {
        dispatch({
            type: 'close_edit_form',
            payload: id
        })
    }

    const deleteTask = () => {
        dispatch({
            type: 'remove',
            payload: id
        })
    }

    if(isEditable){
        return (
        <>
            <form className={style.form} >
                <input className={style.inpp} type={'text'} placeholder={"Add a new task"} ref={inpRef}/>
                <div className={style.div}>
                    <button onClick={save} type='submit' className={style.save}>SAVE</button>
                    <button onClick={cancel} type='button' className={style.cancel}>CANCEL</button>
                </div>
            </form>
        </>
    )}

    return(
        <>
            <div className={isActive ? style.todoList : style.todoList2}>
                <div>
                    <p>{task}</p>
                </div>
                <div>
                    <button onClick={isActive ? complete : uncomplete} className={style.complete}>{isActive ? 'COMPLETE' : 'UNCOMPLETE'}</button>
                    <button onClick={edit} className={style.edit}>EDIT</button>
                    <button onClick={deleteTask} className={style.delete}>DELETE</button>
                </div>
            </div>
        </>
    )
}
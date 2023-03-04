import { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { MyTodoApp } from '../context/TodoApp'
import style from './style.module.css'

export default function TodoAppControls() {
    const [state, dispatch] = useContext(MyTodoApp)

    function all() {
        dispatch({
            type: 'show',
            payload: 'all'
        })
    }

    const active = () => {
        dispatch({
            type: 'show',
            payload: 'active'
        })
    }

    const completed = () => {
        dispatch({
            type: 'show',
            payload: 'completed'
        })
    }

    return(
        <>
            <div className={style.todoAppControls}>
                <button onClick={all} className={style.bottom}><Link to={'/'} className={style.a}>All</Link></button>
                <button onClick={active} className={style.bottom}><Link to={'/active'} className={style.a}>Active</Link></button>
                <button onClick={completed} className={style.bottom}><Link to={'/completed'}  className={style.a}>Completed</Link></button>
                <button className={style.bottom}><a href='#' className={style.a}>Remove completed tasks</a></button>
            </div>
        </>
    )
}
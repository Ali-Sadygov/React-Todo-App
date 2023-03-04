import { useContext } from 'react'
import { MyTodoApp } from '../context/TodoApp'
import TodoItem from './TodoItem'

export default function TodoList() {
    const [state, dispatch] = useContext(MyTodoApp)

    console.log(state.todos)
    return(
        <>
            {Object.values(state.todos).filter(todo => (state.show === 'active' && todo.isActive) || (state.show === 'completed'
            && !todo.isActive) || (state.show === "all")).map((todo, index) => (
                <TodoItem {...todo} key={`key-${todo}-${index}`}/>
            ))}
        </>
    )
}
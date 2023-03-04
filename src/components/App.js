import AddTodo from "./AddTodo";
import Title from "./Title";
import TodoApp from "./TodoApp";
import TodoAppControls from "./TodoAppControls";
import { Outlet } from "react-router-dom";


export default function App(){
    return(
        <>
            <TodoApp>
                <Title>Todo App</Title>

                <AddTodo />

                <Outlet/>

                <TodoAppControls />
            </TodoApp>
        </>
    )
}
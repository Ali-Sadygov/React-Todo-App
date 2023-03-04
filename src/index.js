import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import TodoList from './components/TodoList';
import TodoApp from './context/TodoApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <TodoList show={'all'}/>
      },
      {
        path: 'active',
        element: <TodoList show={'active'}/>
      },
      {
        path: 'completed',
        element: <TodoList show={'completed'}/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp>
      <RouterProvider router={router}></RouterProvider>
    </TodoApp>
  </React.StrictMode>
);

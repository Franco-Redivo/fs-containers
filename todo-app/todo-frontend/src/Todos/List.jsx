import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const safeTodos = Array.isArray(todos) ? todos : []
  
  return (
    <>
      {safeTodos.flatMap((todo, idx) => {
        const todoElement = (
          <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        )
        const separator = idx < safeTodos.length - 1 ? <hr key={`sep-${todo._id}`} /> : null
        return separator ? [todoElement, separator] : [todoElement]
      })}
    </>
  )
}

export default TodoList

import Todo from '../Todos/Todo'
import TodoList from '../Todos/List'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Todo component', () => {
    const todo = {
        _id: '123',
        text: 'Test todo',
        done: false
    }

    test('renders the todo text', () => {
        render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
        expect(screen.getByText('Test todo')).toBeInTheDocument()
    })

    test('shows the correct buttons when not done', () => {
        render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
        expect(screen.getByText('Delete')).toBeInTheDocument()
        expect(screen.getByText('Set as done')).toBeInTheDocument()
    })


    test('shows the correct buttons when done', () => {
        const doneTodo = { ...todo, done: true }
        render(<Todo todo={doneTodo} deleteTodo={() => {}} completeTodo={() => {}} />)
        expect(screen.getByText('Delete')).toBeInTheDocument()
        expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
    })
})
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build Todo App')).toBeInTheDocument();
        expect(screen.getByText('Write Tests')).toBeInTheDocument();
    });

    test('can add a new todo', () => {
        render(<TodoList />);
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('can toggle todo completion', () => {
        render(<TodoList />);
        const todoItem = screen.getByTestId('todo-item-1');

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle({ textDecoration: 'none' });
    });

    test('can delete a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId('delete-button-1');
        const todoItem = screen.getByTestId('todo-item-1');

        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();
    });
});
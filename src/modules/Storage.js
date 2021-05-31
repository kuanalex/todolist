import Project from './Project';
import Task from './Task';
import TodoList from './TodoList';

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }
}
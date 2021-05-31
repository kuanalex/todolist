import Project from './Project';
import Task from './Task';
import TodoList from './TodoList';

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static getTodoList() {
        // local storage doesn't store type of data so we have to convert it

        const todoList = Object.assign(
            new TodoList(),
            JSON.parse(localStorage.getItem('todoList')),
        );

        todoList.setProjects(
            todoList
            .getProjects()
            .map((project) => Object.assign(new Project(), project)),
        );

        todoList
            .getProjects()
            .forEach((project) =>
                project.setTasks(
                    project.getTasks().map((task) => Object.assign(new Task(), task)),
                ),
            );

        return todoList;
    }

}
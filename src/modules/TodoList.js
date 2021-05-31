import {
    compareAsc,
    toDate
} from 'date-fns';
import Project from './Project';
import Task from './Task';

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('This week'));
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    }

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName);
    }

    addProject(project) {
        if (this.projects.indexOf(project) > 0) return;
        this.projects.push(project);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
            (project) => project.getName() === projectName,
        );
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

}
import { compareAsc, toDate } from 'date-fns';
import Project from './Project';
import Task from './Task';

export default class TodoList {
    constructor() {
      this.projects = [];
      this.projects.push(new Project('Inbox'));
      this.projects.push(new Project('Today'));
      this.projects.push(new Project('This week'));
    }
}
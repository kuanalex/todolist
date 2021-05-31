import {
    format
} from 'date-fns';
import Storage from './Storage';
import Project from './Project';
import Task from './Task';

export default class UI {
    // LOADING CONTENT

    static loadHomepage() {
        UI.loadProjects();
        UI.initProjectButtons();
        UI.openProject('Inbox', document.getElementById('button-inbox-projects'));
        document.addEventListener('keydown', UI.handleKeyboard);
    }

    static loadProjects() {
        Storage.getTodoList()
            .getProjects()
            .forEach((project) => {
                if (
                    project.name !== 'Inbox' &&
                    project.name !== 'Today' &&
                    project.name !== 'This week'
                ) {
                    UI.createProject(project.name);
                }
            });

        UI.initAddProjectButtons();
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) => UI.createTask(task.name, task.dueDate));

        if (projectName !== 'Today' && projectName !== 'This week') {
            UI.initAddTaskButtons();
        }
    }

    static loadProjectContent(projectName) {
        const projectPreview = document.getElementById('project-preview');
        projectPreview.innerHTML = `
            <h1 id="project-name">${projectName}</h1>
            <div class="tasks-list" id="tasks-list"></div>`;

        if (projectName !== 'Today' && projectName !== 'This week') {
            projectPreview.innerHTML += `
            <button class="button-add-task" id="button-add-task">
              <i class="fas fa-plus"></i>
              Add Task
            </button>
            <div class="add-task-popup" id="add-task-popup">
              <input
                class="input-add-task-popup"
                id="input-add-task-popup"
                type="text"
              />
              <div class="add-task-popup-buttons">
                <button class="button-add-task-popup" id="button-add-task-popup">
                  Add
                </button>
                <button
                  class="button-cancel-task-popup"
                  id="button-cancel-task-popup"
                >
                  Cancel
                </button>
              </div>
            </div>`;
        }

        UI.loadTasks(projectName);
    }

    // CREATING CONTENT

    static createProject(name) {
        const userProjects = document.getElementById('projects-list');
        userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`;

        UI.initProjectButtons();
    }
}
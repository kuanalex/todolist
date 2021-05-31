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



}
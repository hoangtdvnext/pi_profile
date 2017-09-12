
import {User} from "./model/user.model";
import {History} from "./model/history.model";
import {Project} from "./model/project.model";
import {Skill} from "./model/skill.model";
import {Contact} from "./model/contact.model";
import {Mail} from "./model/mail.model";
export class AppData{
  constructor(){
    this.user = new User();
    this.historys = [];
    this.skills = [];
    this.projects = [];
    this.contact = new Contact();
    this.mailContact = new Mail();
  }

  user: User;
  historys: History[];
  skills: Skill[];
  projects: Project[];
  contact: Contact;
  mailContact: Mail;
}

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgbModalModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

  @ViewChild('projectModal') projectModal!: TemplateRef<any>;
  selectedProject!: Project;

  // projects array
projects: Project[] = [
  {
    name: "Cafe Website",
    description: "A fully responsive front-end design for a cafe website built with Bootstrap, featuring modern UI components, interactive elements, and mobile-first design principles for optimal viewing across all devices.",
    imgURL: "cafe.png"
  },
  {
    name: "Connect 4 Game",
    description: "A feature-rich Connect 4 implementation with Windows Forms offering single-player and multiplayer modes, intelligent AI opponents with multiple difficulty levels, and an engaging visual interface.",
    imgURL: "conn4.png"
  },
  {
    name: "Dashboard",
    description: "A front-end HTML & CSS project of a responsive design for dashboards.",
    imgURL: "dash.png"
  },
  {
    name: "Database Management System",
    description: "A comprehensive MVC application implementing CRUD operations across multiple relational database tables using dependency injection and repository design pattern for scalable, maintainable architecture.",
    imgURL: "db.png"
  },
  {
    name: "Snake Game",
    description: "A Python-based Snake game demonstrating object-oriented programming principles, real-time keyboard input handling, game loop implementation, and collision detection systems.",
    imgURL: "snake.png"
  },
  {
    name: "Turtle Crossing Game",
    description: "An interactive arcade-style game built with Python's Turtle graphics library, featuring character movement, obstacle generation, score tracking, and dynamic difficulty progression.",
    imgURL: "turtle.png"
  },
  {
    name: "Pong Game",
    description: "A classic Pong game implementation in Python showcasing real-time multiplayer functionality, physics simulation, paddle collision detection, and competitive scoring mechanics.",
    imgURL: "pong.png"
  },
  {
    name: "Pomodoro Timer App",
    description: "A productivity-focused Pomodoro timer application built with Tkinter, featuring work/break intervals, session tracking and visual progress indicators.",
    imgURL: "pomo.png"
  },
  {
    name: "US States Quiz Game",
    description: "An educational geography game to test your knowledge of US states with interactive map marking and real-time score tracking.",
    imgURL: "us-states.png"
  },
]

  constructor(private modalService: NgbModal) {}

  openModal(project: Project) {
    this.selectedProject = project;
    this.modalService.open(this.projectModal, {
      centered: true,
      size: 'lg',
      backdrop: 'static'
    });
  }

}

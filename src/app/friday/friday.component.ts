import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friday',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './friday.component.html',
  styleUrl: './friday.component.scss'
})
export class FridayComponent {
  newTask: string = '';
  tasks: { title: string; completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

}

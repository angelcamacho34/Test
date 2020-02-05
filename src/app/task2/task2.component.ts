import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  constructor() { }
  public dataset = ['Angular', 'Java', 'JavaScript', 'Framework', 'Ionic', 'Green', 'React', 'Vue'];
  searchText: string;
  chosen = false;
  word = '';
  ngOnInit() {
  }

  update() {
    this.chosen = false;
    this.word = '';
  }

  showSelected(str: string) {
    this.searchText = str;
    this.word = str;
    this.chosen = true;
  }
}

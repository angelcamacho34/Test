import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  row = 1;
  col = 1;
  matrix = [];

  constructor() { }

  ngOnInit() {
  }

  updateMat() {
    const matrix = [];
    let count = 1;
    for (let r = 0; r < this.col; r++) {
      let aux = [];
      for (let c = 0; c < this.row; c++) {
        aux.push(count++);
      }
      console.debug('aux', aux);
      matrix.push(aux);
    }
    this.transMatrix(matrix);
    console.debug('trans', this.matrix);
  }

  transMatrix(matrix) {
    const trans = [];
    for (let j = 0; j < matrix[0].length; j++) {
      trans[j] = [];
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        trans[j][i] = matrix[i][j];
      }

    }
    console.debug(trans);
    this.matrix = trans;
  }
}

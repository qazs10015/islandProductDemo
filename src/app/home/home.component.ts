import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: string[] = [];
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

  }

  addProduct(inputRef: HTMLInputElement): void {

    console.log(inputRef.value);
    inputRef.value = '';
  }

  deleteProduct(index: number) {
    this.list.splice(index, 1);
  }

}

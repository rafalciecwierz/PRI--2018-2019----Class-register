import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  classes = [
    {
      name: 'Klasa A',
      count: 10
    },
    {
      name: 'Klasa B',
      count: 5
    },
    {
      name: 'Klasa C',
      count: 4
    },
    {
      name: 'Klasa D',
      count: 2
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.classes.push({name: result, count: 20});
    }, (reason) => {
      this.classes.push({name: 'Klasa y', count: 10});
    });

  }
}

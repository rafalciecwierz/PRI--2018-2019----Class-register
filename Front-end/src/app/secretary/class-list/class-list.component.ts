import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
 
  alertFlag: boolean = false;
  alertMsg: string = "";
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

  // Modal handler
  open(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      if(result.trim().length > 0){
        this.classes.push({name: result, count: 0});
        this.alertMsg = "Klasa [" + result.trim() + "] dodana pomyślnie";
        this.alertFlag = true;
      }
      else {
        this.alertFlag = true;
        this.alertMsg = "Nie dodałeś klasy";
      }
    }, (reason) => {
      this.alertFlag = true;
      this.alertMsg = "Nie dodałeś klasy";
      // Event handler when u click somwhere else than button.
    });
  }
}

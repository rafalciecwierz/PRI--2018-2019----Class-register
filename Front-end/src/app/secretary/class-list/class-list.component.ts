import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassDataService } from 'src/app/services/class-data.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  alertFlag: boolean = false;
  alertMsg: string = "";
  classes: any = [];

  constructor(private modalService: NgbModal, private dataService: ClassDataService) { }

  ngOnInit() {
    this.dataService.getClasses().subscribe(
      (resp: Object) => {
        this.classes = resp;
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }

  // Modal handler
  open(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      if(result.trim().length > 0){
        this.classes.push({ID_KLASY: 0, NR_KLASY: result.trim()[0] , LIT_KLASY: result.trim()[1]});
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

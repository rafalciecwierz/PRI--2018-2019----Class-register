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
  class = {
    NR_KLASY: "",
    LIT_KLASY: ""
  };


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
      this.class.NR_KLASY = result[0];
      this.class.LIT_KLASY = result[1];
      // SENDING POST REQUEST WITH CLASS BODY
      this.dataService.postClass(this.class).subscribe(
        (resp: Object) => {
          this.classes.push({ID_KLASY: 0, NR_KLASY: result[0] , LIT_KLASY: result[1]});
          this.alertMsg = "Klasa [" + result[0]+ result[1] + "] została pomyślnie dodana";
          this.alertFlag = true;
        }, (error) => {
          console.log(error.statusText); 
        }
      );
    }, (reason) => {
      this.alertFlag = true;
      this.alertMsg = "Nie dodałeś klasy";
      // Event handler when u click somwhere else than button.
    });
  }
}

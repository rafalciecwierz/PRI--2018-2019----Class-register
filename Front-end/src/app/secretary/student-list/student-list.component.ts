import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDataService } from 'src/app/services/students-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  alertFlag: boolean = false;
  alertMsg: string = "";
  students: any = [];

  constructor(private modalService: NgbModal, private dataService: StudentDataService) { }

  ngOnInit() {
    this.dataService.getStudents().subscribe(
      (resp: Object) => {
        console.log(resp);
        
        this.students = resp;

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
        let res = result.trim().split(" ");
        this.students.push({name: res[0], surname: res[1], class: "OA"});
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

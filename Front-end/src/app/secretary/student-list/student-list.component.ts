import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDataService } from 'src/app/services/students-data.service';
import { ClassDataService } from 'src/app/services/class-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  alertFlag: boolean = false;
  alertMsg: string = "";
  classes: any = [];
  students: any = [];

  constructor(private modalService: NgbModal, 
    private dataStudentsService: StudentDataService,
    private dataClassService: ClassDataService) { }

  ngOnInit() {
    // Load students to list
    this.dataStudentsService.getStudents().subscribe(
      (resp: Object) => {  
        this.students = resp;
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }

  // Modal handler 
  open(content){
    // Load classes to dataset
    this.dataClassService.getClasses().subscribe(
      (resp: Object) => {  
        this.classes = resp;
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );

    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log(result); 

      // if(result.trim().length > 0){
      //   // let res = result.trim().split(" ");
      //   // this.students.push({name: res[0], surname: res[1], class: "OA"});
      //   // this.alertMsg = "Klasa [" + result.trim() + "] dodana pomyślnie";
      //   // this.alertFlag = true;
      // }
      // else {
      //   this.alertFlag = true;
      //   this.alertMsg = "Nie dodałeś klasy";
      // }
    }, (reason) => {
      this.alertFlag = true;
      this.alertMsg = "Nie dodałeś klasy";
      // Event handler when u click somwhere else than button.
    });
  }

}

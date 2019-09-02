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
  student = {
    ID_UCZNIA: '',
    IMIE: '',
    IMIE2: '',
    NAZWISKO: '',
    ADRES: '',
    MIASTO: '',
    KODPOCZTOWY: '',
    ID_KLASY: ''
  }

  constructor(private modalService: NgbModal, 
    private dataStudentsService: StudentDataService,
    private dataClassService: ClassDataService) { }

  ngOnInit() {
    // Load students to list
    this.dataStudentsService.getStudents().subscribe(
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
      this.student.IMIE = result[0];
      this.student.IMIE2 = result[1];
      this.student.NAZWISKO = result[2];
      this.student.ADRES = result[3];
      this.student.MIASTO = result[4];
      this.student.KODPOCZTOWY = result[5]+result[6];
      this.student.ID_KLASY = result[7];
      
      this.dataStudentsService.addStudent(this.student).subscribe(
        (resp: Object) => {
          this.students.push({ nazwa: this.student.IMIE + " " + this.student.IMIE2 + " " + this.student.NAZWISKO, adres: this.student.ADRES + " " + this.student.KODPOCZTOWY + " " + this.student.MIASTO  , klasa: this.student.ID_KLASY});
          this.alertMsg = "Uczeń [" + result[0]+ " "+ result[2] + "] została pomyślnie dodany";
          // this.classes.push({ID_KLASY: 0, NR_KLASY: result[0] , LIT_KLASY: result[1]});
          // this.alertMsg = "Uczeń [" + result[0]+ " "+ result[1] + "] została pomyślnie dodana";
          this.alertFlag = true;
        }, (error) => {
          console.log(error.statusText); 
        }
      );


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

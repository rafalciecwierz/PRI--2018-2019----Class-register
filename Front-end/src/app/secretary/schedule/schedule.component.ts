import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseDataService } from 'src/app/services/exercise-data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  exercise: any = [];

  constructor(private modalService: NgbModal, private exerciseService: ExerciseDataService) { }

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(
      (resp: Object) => {
        this.exercise = resp;
        console.log(this.exercise);
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }
}

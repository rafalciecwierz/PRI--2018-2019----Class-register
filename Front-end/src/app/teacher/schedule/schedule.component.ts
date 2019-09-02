import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseDataService } from 'src/app/services/exercise-data.service';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class TeacherScheduleComponent implements OnInit {
  constructor(private modalService: NgbModal, private exerciseService: ExerciseDataService, private auth: UserSessionService) { }

  exercise: any = [];
  ID: string = this.auth.getUserId();

  ngOnInit() {
    const addExerciseToPlan = (OD, DZIEN, NAZWA, KLASY) => {
      const ODext = parseInt(OD.slice(0, -2));
      const hour = document.querySelector(`[data-start-hour="${ODext}"]`);
      const day = (hour !== null) ? hour.querySelector(`td:nth-child(${DZIEN+1})`) : '';
      if(day !== '') {
        const el = document.createElement('div');
        el.className = 'exercise-element';
        el.innerHTML = `
          <div class="exercise-name">${NAZWA}</div>
          <div>${KLASY}</div>
        `;

        day.appendChild(el);
      }
    };

    this.exerciseService.getTeacherExercises(this.ID).subscribe(
      (resp: Object) => {
        this.exercise = resp;
        this.exercise.map((el) => {
          addExerciseToPlan(el.OD, el.DZIEN, el.NAZWA, el.KLASY);
        });
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }
}

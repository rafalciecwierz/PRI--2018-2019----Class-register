import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseDataService } from 'src/app/services/exercise-data.service';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ParentScheduleComponent implements OnInit {
  constructor(private modalService: NgbModal, private exerciseService: ExerciseDataService, private auth: UserSessionService) { }

  exercise: any = [];
  ID: string = this.auth.getUserId();

  ngOnInit() {
    const addExerciseToPlan = (OD, DZIEN, NAZWA) => {
      const ODext = parseInt(OD.slice(0, -2));
      const hour = document.querySelector(`[data-start-hour="${ODext}"]`);
      const day = (hour !== null) ? hour.querySelector(`td:nth-child(${DZIEN+1})`) : '';
      if(day !== '') {
        const el = document.createElement('div');
        el.className = 'exercise-element';
        el.innerHTML = `
          <div class="ex-name">${NAZWA}</div>
        `;

        day.appendChild(el);
      }
    };

    this.exerciseService.getParentExercises(this.ID).subscribe(
      (resp: Object) => {
        this.exercise = resp;
        this.exercise.map((el) => {
          addExerciseToPlan(el.OD, el.DZIEN, el.NAZWA);
        });
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }
}

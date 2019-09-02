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
    const addExerciseToPlan = (OD, DZIEN, NAZWA, NAUCZYCIEL, KLASY) => {
      const ODext = parseInt(OD.slice(0, -2));
      const hour = document.querySelector(`[data-start-hour="${ODext}"]`);
      const day = (hour !== null) ? hour.querySelector(`td:nth-child(${DZIEN+1})`) : '';
      if(day !== '') {
        const el = document.createElement('div');
        el.className = 'exercise-element';
        el.innerHTML = `
          <div class="exercise-name">${NAZWA}</div>
          <div>${NAUCZYCIEL}</div>
          <div class="overlay">${KLASY}</div>
        `;

        day.appendChild(el);
      }
    };

    this.exerciseService.getExercises().subscribe(
      (resp: Object) => {
        this.exercise = resp;
        this.exercise.map((el) => {
          addExerciseToPlan(el.OD, el.DZIEN, el.NAZWA, el.Nauczyciel, el.KLASY);
        });
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }
}

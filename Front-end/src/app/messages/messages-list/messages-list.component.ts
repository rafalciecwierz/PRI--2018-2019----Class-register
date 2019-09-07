import { Component, OnInit } from '@angular/core';
import { MessageDataService } from 'src/app/services/message-data.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  messages = [
    {
      data: '14-05-2019r',
      from: 'Jan Kowalski',
      text: 'Witam serdecznie. Chciałbym zgłosić nieobeność mojego dziecka... '
    },
    {
      data: '15-05-2019r',
      from: 'Marek Wróbel',
      text: 'Cześć, piszę w sprawie ostatnich zaległych zajęc Informatyki...'
    },
    {
      data: '16-05-2019r',
      from: 'Andrzej Piaseczny',
      text: 'Szanowny Panie, piszę w sprawie ostatniego zaliczenia egzaminu...'
    },
    {
      data: '17-05-2019r',
      from: 'Jerzy Sztur',
      text: 'Nauczyciele! Rada pedagogiczna odbędzie się dnia 16 marca...'
    },
    {
      data: '18-05-2019r',
      from: 'Alicja Maląg',
      text: 'Dziękuje za odpowiedź, pozdrawiam!'
    },
    {
      data: '19-05-2019r',
      from: 'Rafał Suliga',
      text: 'Dziękuje za dokładne wyjaśnienie tematu, dziękuje i pozdrawiam!...'
    },
  ]
  constructor(private dataService: MessageDataService) { }

  ngOnInit() {
    this.dataService.getMessages().subscribe(
      (resp: Object) => {
        console.log(resp);
        
      },
      (error) =>  {
        console.log(error.statusText);
      }
    );
  }

}

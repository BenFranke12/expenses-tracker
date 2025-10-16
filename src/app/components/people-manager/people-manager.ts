import { Component } from '@angular/core';
import { PeopleService } from '../../services/people-service';

@Component({
  selector: 'app-people-manager',
  imports: [],
  templateUrl: './people-manager.html',
  styleUrl: './people-manager.scss'
})
export class PeopleManager {
  constructor(public peopleService: PeopleService) {}

  people: Array<string> = [];

}

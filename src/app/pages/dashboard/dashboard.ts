import { Component } from '@angular/core';
import { IndividualExpenses } from "../../components/individual-expenses/individual-expenses";
import { PeopleManager } from '../../components/people-manager/people-manager';
import { PeopleService } from '../../services/people-service';

@Component({
  selector: 'app-dashboard',
  imports: [IndividualExpenses, PeopleManager],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  constructor(public peopleService: PeopleService) {}
  
  calculateTotals() {
    
  }

}

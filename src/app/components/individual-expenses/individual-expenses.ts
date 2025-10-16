
import { Component, signal } from '@angular/core';
import { PeopleService } from '../../services/people-service';

@Component({
    selector: 'app-individual-expenses',
    imports: [],
    templateUrl: './individual-expenses.html',
    styleUrl: './individual-expenses.scss'
})
export class IndividualExpenses {

  // expenses is a signal of objects { name, amount, people[] }
  expenses = signal<Array<{ name: string; amount: number; people: string[] }>>([]);

  constructor(public peopleService: PeopleService) {}

  addExpense() {
    this.expenses.update(list => [...list, { name: '', amount: 0, people: [] }]);
  }

  removeExpense(index: number) {
    this.expenses.update(list => list.filter((_, i) => i !== index));
  }

  updateExpenseName(index: number, name: string) {
    this.expenses.update(list => {
      const copy = list.slice();
      const found = copy.find((expense, i) => i === index);
      if (found) {
        found.name = name;
      }
      return copy;
    });
  }

  updateExpenseAmount(index: number, amount: number) {
    this.expenses.update(list => {
      const copy = list.slice();
      copy[index] = { ...copy[index], amount };
      return copy;
    });
  }

  // use the expense object to find the correct entry and modify it
  togglePersonOnExpense(expenseObj: { name: string; amount: number; people: string[] }, person: string, checked: boolean) {
    this.expenses.update(list => {
      const idx = list.indexOf(expenseObj);
      if (idx === -1) return list;
      const copy = list.slice();
      const expense = { ...copy[idx] };
      const peopleCopy = (expense.people || []).slice();
      if (checked) {
        if (!peopleCopy.includes(person)) peopleCopy.push(person);
      } else {
        const i = peopleCopy.indexOf(person);
        if (i >= 0) peopleCopy.splice(i, 1);
      }
      expense.people = peopleCopy;
      copy[idx] = expense;
      return copy;
    });
  }

  isPersonAttached(expenseObj: { name: string; amount: number; people: string[] }, person: string) {
    return !!expenseObj && Array.isArray(expenseObj.people) && expenseObj.people.includes(person);
  }
}

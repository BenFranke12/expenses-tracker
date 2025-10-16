import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualExpenses } from './individual-expenses';

describe('IndividualExpenses', () => {
  let component: IndividualExpenses;
  let fixture: ComponentFixture<IndividualExpenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualExpenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualExpenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

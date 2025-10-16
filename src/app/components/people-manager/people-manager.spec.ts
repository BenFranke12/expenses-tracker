import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleManager } from './people-manager';

describe('PeopleManager', () => {
  let component: PeopleManager;
  let fixture: ComponentFixture<PeopleManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

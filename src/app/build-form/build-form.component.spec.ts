import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildFormComponent } from './build-form.component';

describe('BuildFormComponent', () => {
  let component: BuildFormComponent;
  let fixture: ComponentFixture<BuildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

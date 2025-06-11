import { Component, inject, signal } from '@angular/core';
import { StepCalculatorService } from '../step-calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  enteredSteps = signal('0');
  enteredDayNumber = signal('0');

  private steps_calculator_service = inject(StepCalculatorService);

  onSubmit() {
    this.steps_calculator_service.calculate_gym_days(parseInt(this.enteredSteps()), parseInt(this.enteredDayNumber()));
  }
}

import { Component, inject } from '@angular/core';
import { StepCalculatorService } from '../step-calculator.service';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.html',
  styleUrl: './output.css'
})
export class Output {
  private steps_calculator_service = inject(StepCalculatorService);

  gym_days = this.steps_calculator_service.gym_days;
}

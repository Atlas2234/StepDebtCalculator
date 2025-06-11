import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class StepCalculatorService {
    gym_days = signal(0.0);

    private steps_per_day = 30000;
    private steps_for_gym = 5000;

    calculate_gym_days(total_steps: number, day_number: number) {
        let total_expected_steps = this.steps_per_day * (day_number - 1);
        
        if (total_steps == total_expected_steps) {
            this.gym_days.set(0.0);
        } else if (total_steps < total_expected_steps) {
            this.gym_days.set((total_expected_steps - total_steps) / this.steps_for_gym);
        }
    }


}
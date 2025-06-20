import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInput } from "./user-input/user-input";
import { Output } from "./output/output";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInput, Output, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'StepDebtCalc';
}

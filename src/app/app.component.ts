import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formArray = new FormArray<any>([]);
  quiz: any[] = [
    { key: 'gender', value: 'Select your baby’s gender', variants: ['BOY', 'GIRL'] },
    { key: 'age', value: 'How old is your baby?', variants: ['Under 6 months', '6-8 months', '8-10 months', 'Over 10 months'] },
    { key: 'weight', value: 'What is your baby\'s current weight?', variants: ['Under 10 pounds', '10-15 pounds', '15-20 pounds', 'Over 20 pounds'] },
    { key: 'health', value: 'Your baby\'s overall health and development', variants: ['Healthy and thriving', 'Some health concerns', 'Developmental delays or concerns'] },
    { key: 'feeding', value: 'Your baby\'s current feeding routine', variants: ['Exclusively breastfed', 'Exclusively formula-fed', 'A combination of breast milk and formula'] },
  ];
  step: number = 0;

  ngOnInit() {
    this.quiz.map(() => this.formArray.push(new FormControl('')));
  }

  nextStep() {
    if (this.step < this.quiz.length) {
      this.step++;
    }
    if (this.step === this.quiz.length) {
      console.log('result: ', this.formArray.value);
    }
  }

  prevStep() {
    this.step--;
  }

}

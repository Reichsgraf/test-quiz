import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";
import {quizData} from "./shared/static/quiz-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formArray = new FormArray<any>([]);
  quiz: any[] = quizData;
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

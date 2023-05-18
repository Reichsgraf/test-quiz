import { Pipe, PipeTransform } from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Pipe({
  name: 'getFormControl'
})
export class GetFormControlPipe implements PipeTransform {

  transform(formArray: FormArray, index: number): FormControl {
    return formArray.controls[index] as FormControl;
  }

}

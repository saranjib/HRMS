import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-holi-day',
  templateUrl: './holi-day.component.html',
  styleUrls: ['./holi-day.component.scss']
})
export class HoliDayComponent {
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }



  showEdits: boolean = false;
 
 HolidayList =[ 
  {Id:'1',holidaytype: 'National', holidayName: 'New Year', from:'01 jan 2024', to: '01 jan 20214', total: '1 day', createdBy: 'Niraj Sir', },
  {Id:'2',holidattype: 'Manual', holidayName: 'Republic Day', from:'26 jan 2024', to: '26 jan 20214', total: '1 day', createdBy: 'Niraj Sir', },
];

// validation
 
validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      input1: new FormControl(null, Validators.required),
      input2: new FormControl(null, Validators.required),
      input: new FormControl(null, Validators.required),
      textarea: new FormControl(null, Validators.required),
      select: new FormControl(null, Validators.required),
      checkbox: new FormControl(null, Validators.requiredTrue),
      
    });
  }

  get input1(): AbstractControl {
    return this.validationForm.get('input1')!;
  }
  get input2(): AbstractControl {
    return this.validationForm.get('input2')!;
  }
  get input(): AbstractControl {
    return this.validationForm.get('input')!;
  }

  get textarea(): AbstractControl {
    return this.validationForm.get('textarea')!;
  }

  get select(): AbstractControl {
    return this.validationForm.get('select')!;
  }
 onSubmit(): void {
    this.validationForm.markAllAsTouched();
 }

}

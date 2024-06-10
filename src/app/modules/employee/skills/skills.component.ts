 

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { skillInterface } from 'src/app/shared/models/employeelist';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isEdit : boolean | null = null;
  formValues : any | null = null;

  value: any = 'MySQL'

  skillOptions = [
    'Angular',
    'Communication',
    '.NET',
    'MySQL'
  ]

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(public modalRef: MdbModalRef<SkillsComponent>) {
    // console.log('constructor skill : ' + this.formValues.skill)
  }

  printVal(e : any){
    console.log(e.target.value)
    console.log(this.formValues.skill)
    console.log((e.target.value === this.formValues.skill))
  }

  ngOnInit(){
    // console.log('Default Select : ' + this.defaultSelect)
    console.log('Init skill : ' + this.formValues.skill)
    // this.defaultSelect = this.formValues.skill
    // console.log(this.defaultSelect)
}
}
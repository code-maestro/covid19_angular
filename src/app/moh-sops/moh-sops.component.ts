import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moh-sops',
  templateUrl: './moh-sops.component.html',
  styleUrls: ['./moh-sops.component.css']
})
export class MohSopsComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      names: '',
      email: '',
      phoneNumber: '',
      residence: '',
      message: ''
     })

     this.myForm.valueChanges.subscribe(console.log)
  }

}

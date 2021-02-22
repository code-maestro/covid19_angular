import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, public notify: NotificationService) { }

  ngOnInit(): void {
  
    this.myForm = this.fb.group({
      names: '',
      email: '',
      phoneNumber: '',
      residence: '',
      message: ''
    })

    this.myForm.valueChanges.subscribe(console.log);

  }

  clicked(){
    this.notify.showNotification("mikael from ts");
    console.log("mikael from ts");
  }

}

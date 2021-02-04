import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  myArray: any[] = []

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {

    this.firestore.collection('testCollection')
    .add({field: this.form.value.newValue})

    this.firestore
  .collection("testCollection")
  .get()
  .subscribe((ss) => {
    ss.docs.forEach((doc) => {
      this.myArray.push(doc.data());
    });
  });

  }

  form = new FormGroup({
    newValue: new FormControl('')
  })

  onSubmit() {
    this.firestore.collection('testCollection').add({
        field: this.form.value.newValue
    })
    .then(res => {
        console.log(res);
        this.form.reset();
    })
    .catch(e => {
        console.log(e);
    })
  }
}

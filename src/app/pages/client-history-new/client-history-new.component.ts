import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-history-new',
  templateUrl: './client-history-new.component.html',
  styles: []
})
export class ClientHistoryNewComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: ''
    });
  }

  createClient() {

  }

}

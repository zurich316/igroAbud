import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Client } from '../../model/client';
import { ClientsService } from '../../service/clients.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styles: []
})
export class ClientNewComponent implements OnInit {

  clientForm: FormGroup;
  clientID: any;
  constructor(private fb: FormBuilder,
             private _clientService: ClientsService,
             private activatedRoute: ActivatedRoute,
             private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.clientID = this.activatedRoute.snapshot.paramMap.get('id-client');
    if (this.clientID !== 'nuevo') {
      const clientData: Client = this._clientService.findClient(this.clientID);
      this.clientForm.patchValue(clientData);
    }
  }

  createClient() {
    console.log(this.clientForm);

    const clientInfo: Client = this.clientForm.value;

    this.router.navigate(['../']);
    if (this.clientID === 'nuevo') {
      clientInfo.createdAt = new Date();
      clientInfo.lastExam = new Date();
      this._clientService.saveClient(clientInfo);
    } else {
      clientInfo.updatedAt = new Date();
      this._clientService.updateClient(this.clientID, clientInfo);
    }
    Swal.fire(
      'Exito!',
      'Se guardaron datos del cliente',
      'success'
    );

  }

  get name() {
    return this.clientForm.get('name');
  }
  get lastname() {
    return this.clientForm.get('lastname');
  }
  get age() {
    return this.clientForm.get('age');
  }
  get birthPlace() {
    return this.clientForm.get('birthPlace');
  }
  get birthDay() {
    return this.clientForm.get('birthDay');
  }
  get civilStatus() {
    return this.clientForm.get('civilStatus');
  }
  get job() {
    return this.clientForm.get('job');
  }
  get sex() {
    return this.clientForm.get('sex');
  }
  get contactInfomration() {
    return this.clientForm.get('contactInfomration');
  }
  get sourceInformation() {
    return this.clientForm.get('sourceInformation');
  }

  private initForm() {
    this.clientForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      birthPlace: new FormControl(null, [Validators.required]),
      birthDay: new FormControl(null, [Validators.required]),
      civilStatus: new FormControl(null, [Validators.required]),
      job: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required]),
      contactInfomration: new FormGroup({
        address: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        phoneOffice: new FormControl(null, [Validators.required]),
        cellphone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      sourceInformation: new FormControl(null, [Validators.required]),
      createdAt: new FormControl(''),
      updatedAt: new FormControl(''),
      lastExam: new FormControl(''),
    });
  }

}

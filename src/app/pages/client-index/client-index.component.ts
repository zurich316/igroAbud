import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../service/clients.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styles: []
})
export class ClientIndexComponent implements OnInit {

  clientList: Client[] = [];
  constructor(private _clientService: ClientsService) {
    this.clientList = _clientService.clientList;
  }

  ngOnInit() {
  }

}

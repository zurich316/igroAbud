import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../service/clients.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styles: []
})
export class ClientViewComponent implements OnInit {

  clientID: any;
  client: Client;
  constructor(private activatedRoute: ActivatedRoute,
              private _clientS: ClientsService) { }

  ngOnInit() {
    this.clientID = this.activatedRoute.snapshot.paramMap.get('id-client');
    this.client = this._clientS.findClient(this.clientID);
  }

}

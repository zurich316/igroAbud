import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientList: Client[] = [];

  constructor() {
    this.getClients();
   }

   getClients() {
    this.clientList = JSON.parse(localStorage.getItem('clients')) || [];
   }

   saveClient(newClient: Client) {
    this.clientList.push(newClient);
    localStorage.setItem('clients', JSON.stringify(this.clientList));
   }

   findClient(id) {
    return this.clientList[id];
   }

   updateClient(id, clientInfo: Client) {
    this.clientList[id] = clientInfo;
    localStorage.setItem('clients', JSON.stringify(this.clientList));
   }
}

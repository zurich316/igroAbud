import { Injectable } from '@angular/core';
import { MedicalHistory } from '../model/clinic-history';

@Injectable({
  providedIn: 'root'
})
export class ClinicHistoryService {

  clinicHistoryList: MedicalHistory[] = [];

  constructor() {
    this.getclinicHistorys();
   }

   getclinicHistorys() {
    this.clinicHistoryList = JSON.parse(localStorage.getItem('clinicHistorys')) || [];
   }

   saveclinicHistory(newclinicHistory: MedicalHistory) {
    this.clinicHistoryList.push(newclinicHistory);
    localStorage.setItem('clinicHistorys', JSON.stringify(this.clinicHistoryList));
   }

   findclinicHistory(id) {
    return this.clinicHistoryList[id];
   }

   updateclinicHistory(id, clinicHistoryInfo: MedicalHistory) {
    this.clinicHistoryList[id] = clinicHistoryInfo;
    localStorage.setItem('clinicHistorys', JSON.stringify(this.clinicHistoryList));
   }
}

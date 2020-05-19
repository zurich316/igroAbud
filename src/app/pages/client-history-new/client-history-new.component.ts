import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-client-history-new',
  templateUrl: './client-history-new.component.html',
  styles: []
})
export class ClientHistoryNewComponent implements OnInit {

  clinicHistoryForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  get consultion() {
    return this.clinicHistoryForm.get('consultion');
  }
  get dentalHygiene() {
    return this.clinicHistoryForm.get('dentalHygiene');
  }
  get background() {
    return this.clinicHistoryForm.get('background');
  }
  get habits() {
    return this.clinicHistoryForm.get('habits');
  }
  get diseases() {
    return this.clinicHistoryForm.get('diseases');
  }
  get femalePacient() {
    return this.clinicHistoryForm.get('femalePacient');
  }
  get familyHistory() {
    return this.clinicHistoryForm.get('familyHistory');
  }
  get sex() {
    return this.clinicHistoryForm.get('sex');
  }
  get contactInfomration() {
    return this.clinicHistoryForm.get('contactInfomration');
  }

  private initForm() {
    this.clinicHistoryForm = this.fb.group({
      consultion: new FormGroup({
        motive: new FormControl(null, [Validators.required]),
        lastMeeting: new FormControl(null, [Validators.required]),
        treatment: new FormControl(null, [Validators.required])
      }),
      dentalHygiene: new FormGroup({
        brushedTooth: new FormControl(false),
        vigorously: new FormControl(false),
        floss: new FormControl(false),
        brushedTongue: new FormControl(false),
        frequency: new FormControl(false),
        soft: new FormControl(false),
        mouthwash: new FormControl(false),
        toothpick: new FormControl(false),
      }),
      background: new FormGroup({
        currentTreatment: new FormGroup({
          current: new FormControl(false),
          name: new FormControl(null, [Validators.required]),
          time: new FormControl(null, [Validators.required]),
        }),
        currentMedication: new FormGroup({
          current: new FormControl(false),
          name: new FormControl(null, [Validators.required]),
          motive: new FormControl(null, [Validators.required])
        }),
        surgicalIntervention: new FormArray([]),
        allergies: new FormGroup({
          current: new FormControl(),
          name: new FormControl(),
          dentalAnesthesia: new FormControl(false),
          penicillin: new FormControl(false),
        }),
        prolongedBleeding: new FormControl(false),
        healFast: new FormControl(false),
        dryMouth: new FormControl(false),
        fainting: new FormControl(false),
        brushedTongue: new FormControl(false),
        nosebleed: new FormControl(false),
        tiredEase: new FormControl(false),
        gnashTeeth: new FormControl(false),
        noiseATM: new FormControl(false),
      }),
      habits: new FormGroup({
        frequency: new FormControl(null, [Validators.required]),
        smoke: new FormControl(false),
        alcohol: new FormControl(false),
        onychophagia: new FormControl(false)
      }),
      diseases: new FormGroup({
        alcoholism: new FormControl(false),
        arthritis: new FormControl(false),
        asthma: new FormControl(false),
        Cancer: new FormControl(false),
        cirrhosis: new FormControl(false),
        depression: new FormControl(false),
        earPain: new FormControl(false),
        venereal: new FormControl(false),
        epilepsy: new FormControl(false),
        schizophrenia: new FormControl(false),
        drugDependency: new FormControl(false),
        gastritis: new FormControl(false),
        hemophilia: new FormControl(false),
        hepatitis: new FormControl(false),
        herpes: new FormControl(false),
        leukemia: new FormControl(false),
        lupus: new FormControl(false),
        migraine: new FormControl(false),
        osteoporosis: new FormControl(false),
        polyglobulia: new FormControl(false),
        highPressure: new FormControl(false),
        lowPressure: new FormControl(false),
        rheumatism: new FormControl(false),
        AIDS: new FormControl(false),
        parkinson: new FormControl(false),
        sinusitis: new FormControl(false),
        smoking: new FormControl(false),
        thyroid: new FormControl(false),
        tuberculosisi: new FormControl(false),
        ulcer: new FormControl(false),
        others: new FormControl(null, [Validators.required])
      }),
      femalePacient: new FormGroup({
        current: new FormControl(false),
        pregnant: new FormControl(false),
        lactation: new FormControl(false),
        trimester: new FormControl(null, [Validators.required])
      }),
      familyHistory: new FormControl(null, [Validators.required]),
    });
  }

  createClinicHistory() {
    console.log(this.clinicHistoryForm);
  }

}

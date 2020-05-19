export interface MedicalHistory {
    consultion: Consultation;
    DentalHygiene: DentalHygiene;
    background: BackgroundMedical;
    Habits: Habits;
    Diseases: Diseases;
    FemalePacient: FemalePacient;
    familyHistory: string;
}

export interface Consultation {
    motive: string;
    lastMeeting: Date;
    treatment: string;
}

export interface DentalHygiene {
    brushedTooth: boolean;
    vigorously: boolean;
    floss: boolean;
    brushedTongue: boolean;
    frequency: string;
    soft: boolean;
    mouthwash: boolean;
    toothpick: boolean;
}

export interface BackgroundMedical  {
    currentTreatment: {
        current: boolean;
        name: string;
        time: string;
    };
    currentMedication: {
        current: boolean;
        name: string;
        motive: string;
    };
    surgicalIntervention: {when: string, cause: string}[];
    allergies: {
        current: boolean;
        name: string;
        dentalAnesthesia: boolean;
        penicillin: boolean;
    };
    prolongedBleeding: boolean;
    healFast: boolean;
    dryMouth: boolean;
    fainting: boolean;
    brushedTongue: boolean;
    nosebleed: boolean;
    tiredEase: boolean;
    gnashTeeth: boolean;
    noiseATM: boolean;
}

export interface Habits {
    frequency: string;
    smoke: boolean;
    alcohol: boolean;
    onychophagia: boolean;
}

export interface Diseases {
    alcoholism: boolean;
    arthritis: boolean;
    asthma: boolean;
    Cancer: boolean;
    cirrhosis: boolean;
    depression: boolean;
    earPain: boolean;
    venereal: boolean;
    epilepsy: boolean;
    schizophrenia: boolean;
    drugDependency: boolean;
    gastritis: boolean;
    hemophilia: boolean;
    hepatitis: boolean;
    herpes: boolean;
    leukemia: boolean;
    lupus: boolean;
    migraine: boolean;
    osteoporosis: boolean;
    polyglobulia: boolean;
    highPressure: boolean;
    lowPressure: boolean;
    rheumatism: boolean;
    AIDS: boolean;
    parkinson: boolean;
    sinusitis: boolean;
    smoking: boolean;
    thyroid: boolean;
    tuberculosisi: boolean;
    ulcer: boolean;
    others: string;
}

export interface FemalePacient {
    current: boolean;
    pregnant: boolean;
    lactation: boolean;
    trimester: boolean;
}



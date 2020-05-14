export interface Client {
    name: string;
    lastname: string;
    age: number;
    birthPlace: string;
    birthDay: Date;
    civilStatus: string;
    job: string;
    sex: string;
    contactInfomration: {
        address: string;
        city: string;
        phone: string;
        phoneOffice: string;
        cellphone: string;
        email: string;
    };
    sourceInformation: string;
    createdAt: Date;
    updatedAt: Date;
    lastExam: Date;

}

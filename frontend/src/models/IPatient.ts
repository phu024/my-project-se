import { PatientrightInterface } from './IPatientright';
import { PatienttypeInterface } from './IPatienttype';
import { GenderInterface } from './IGender';
export interface IPatientInterface {
    ID: number,
    HN: string,
    Pid: string,
    Firstname: string,
    Lastname: string,
    Birthdate: Date,
    Age: number,
    DateAdmit: Date,
    Symptom: string,
    GenderID: number,
    Gender: GenderInterface,
    PatienttypeID: number,
    Patienttype: PatienttypeInterface
    PatientrightID: number,
    Patientright: PatientrightInterface
}
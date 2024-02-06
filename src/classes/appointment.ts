import { Contact } from "./contact";

export interface Appointment{
    name: string;
    contact: Contact;
    date: Date;
    time: string;
}
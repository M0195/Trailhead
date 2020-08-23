import { LightningElement,wire,track } from 'lwc';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FirstName_FIELD.FirstName, type: 'text' },
    { label: 'Last Name', fieldName: LastName_FIELD.LastName, type: 'text' },
    { label: 'Email', fieldName: Email_FIELD.Email, type: 'text' }
];
export default class ContactList extends LightningElement {
    @track colums = COLUMNS;
    @wire(getContacts)
    contacts; 
    
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}

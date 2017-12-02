import ContactList from '../models/ContactList';
import { elementOf } from '../support/Support';

export default class CotactListView {
  private readonly _contactList = elementOf<HTMLUListElement>("#contactList");
  private readonly _contactListTemplate = elementOf<HTMLLIElement>("#contactItemTemplate");

  constructor() {
    this._contactListTemplate.remove();
  }

  showContacts(contacts: ContactList) {
    
  }
}

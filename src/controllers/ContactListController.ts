import ContactListView from '../views/ContactListView';
import ContactList from '../models/ContactList';

export default class ContactListController {
  private readonly _view = new ContactListView();
  private _model: ContactList;

  initialize() {
    this._view.showContacts(this._model);
  }
}

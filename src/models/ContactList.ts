export default class ContactList {
  private _name: string;
  private _phone: string;

  constructor(name: string, phone: string) {
    this._name = name;
    this._phone = phone;
  }

  set name(name: string) {
    this._name = name;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  get name() {
    return this._name;
  }

  get phone() {
    return this._phone;
  }
}

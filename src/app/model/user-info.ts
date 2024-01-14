export class UserInfo {

  private _firstname: string = '';
  private _lastname: string = '';
  private _age: number = 0;
  constructor(
    firstName: string,
    lastName: string,
    age: number
  ) {
    this._firstname = firstName;
    this._lastname = lastName;
    this._age = age;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }
}

import {Address} from './address';

export interface NewUserInfo {
  firstname?: string;
  lastname?: string;
  age?: number;
  address: Address;
}

import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import { NativeStorage } from '@ionic-native/native-storage';

/*
 Generated class for the UserProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class UserProvider {

  private _user:User = new User();


  constructor( private nativeStorage : NativeStorage) {
    console.log('Hello UserProvider Provider');
    this.statusUsers();
  }


  get user():User {
    return this._user;
  }

  set user(value:User) {
    this._user = value;
  }

  this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

statusUsers(){
  this.nativeStorage.getItem('users')
  .then(
    data => {console.log(data),}
    error => {console.error(error)}
  );
  }

}

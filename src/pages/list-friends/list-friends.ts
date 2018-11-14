import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {Friend} from "../../models/user";
import {Util} from "../../providers/util/util";
import {Observable} from "..\providers\user-api\user-api.ts"
import 'rxjs/add/observable/interval';

/**
 * Generated class for the ListFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-friends',
  templateUrl: 'list-friends.html',
})

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class ListFriendsPage {

  public Util = Util;
  private friends: Friend[] = [];

  constructor(public menuCtrl: MenuController, public http:HttpProvider, public navCtrl:NavController, public navParams:NavParams, public userApi:UserApiProvider) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    let isConnect = Observable.Interval(5000).take(5).subscribe(() => {
      console.log("toto")
    },
    (error)=>{},
    () => {
      console.log("Tata")
    });

setInterval(function(){
  setTimeout(function({
    console.log("First")
  }))
})


    this.http.get('friends.json').subscribe((friends) => {
      //this.friends = <Friend[]>friends;
    }, (err) => {
      console.error(err);
    });
    this.userApi.getAllUsers().subscribe(data)=> {
      console.log(data)
    }, (err)=> {
      console.error(err);
    
    });
  }

  goToProfileFriend(sliding, friend: Friend) {
    sliding.close();
    this.navCtrl.push('ProfileFriendPage', {friend});
  }

  goToChatRoom(friend: Friend) {
    this.navCtrl.push('ChatRoomPage', {friend});
  }



}

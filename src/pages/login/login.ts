import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {HttpProvider} from "../../providers/http/http";
import {User} from "../../models/user";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class LoginPage {
    // Cette variable nous permet de pre-remplire les formulaires de login ou register.

  account = {
    username: 'yajuve',
    fullname: 'Mohamed Raouf',
    email: 'contact.t.ribeiro@gmail.com',
    password: 'LeMdp'
  };

  // Our translated text strings
  private loginErrorString: string; // message d'erreur lors de la connection
  private opt: string = 'signin'; // opt = option, Definir le "tabs" par défault. Soit inscription, soit connection.

  constructor(public http:HttpProvider, public userProvider: UserProvider, public menuCtrl: MenuController, public navCtrl: NavController,
    public translateService: TranslateService) { // grace a ce module, on peut définir differentes variation de langue. voir en.json 
    this.menuCtrl.enable(false); // pas d'affichage de menu
   
     // subscribe -> concepte des promesses - observable, le traitement ce fais de maniere asyn  
    this.loginErrorString = value; // affichage du message d'erreur dans la page html via la variable
    }
  }

  // Attempt to login in through our User service
  doLogin() {
    this.http.get('my-profile.json').subscribe((profile) => { //Requete Asynchrone sur le fichier my-profile.json qui ce situe dans asset mocks et le contenu du fichier est mise dans la variable profile
      this.userProvider.user = <User>profile;
      //Ajout du profil user dans la class USerProvider grâce au setter. Nous pouvont récupérer le profil à tout moment vu qu'il est stocker dans la class User provider
      if (this.checkedUser(profile))
      this.navCtrl.setRoot('ListFriendsPage'); // SetRoot -> permet de supprimer toutes les vues de la stacket de la socket de nav vers la root page
      //navCtrl-> Permet de naviguer sur plusieur pages
      else {
        this.loginErrorString = "Login error"
        this.translateService.get('LOGIN_ERROR').subscribe((value) => { // translateService permet d'effectuer du multi langue.
      }
    }, (err) => {
      console.error(err); // En cas d'erreur sur la recup de l'utilisateur
    });
    console.log("TomTom")
  }

checkedUser(users:User){
/* if (this.userProvider.email=== this.account.email && this.userProvider.password === this.account.password)
  return true;
else
  return false;
*/
  }

}

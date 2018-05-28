import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data = {
    "rating":0,
    "tlike":"",
    "tbetter":""
  };
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {
  
  }

  submitFeedback() {
    var  data1 =
{
  "texts":{
    "t1": this.data.tlike,
    "t2": this.data.tbetter,
  },

  "ratings":{
    "r1": {"value":this.data.rating}
  },

  "context":{
    "page": "RestaurantFeedback",
    "view": "Feedback",
    "lang": "en",
    "attr1":"mobile"
  }
};     

let headers = new Headers();
    headers.append( 'Content-Type','application/json');

    this.http.post("https://feedback-p2000241409trial.hanatrial.ondemand.com:443/api/v2/apps/e1ffcc6a-7241-403f-b216-7035981ce953/posts", 
      data1, {headers:headers})
    .subscribe(data => {
      alert("Your Feedback has been submitted!");
      }, error => {
      console.log("Oooops!");
      console.log(error);
      });
  }
}

import { Component } from '@angular/core';
import { UserData } from './UserDetails';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData =new UserData();

  title = 'binding';
  ThemeName:string = ''
  ThemeName1:string = ''
  textboxcolor:string = ''
  applycolor:string = ''
  size:number =0
  FirstName:string = ''
  LastName:string = ''
  enabledisable:boolean = false
  enabledisable1:boolean =false
  FirstName1:string = ''
  LastName1:string = ''
  ThemeName2:string = ''
  State:string = ''
  city:string=''
  UserDetails:UserData[] = []
  stateName:string=''
  
  savedata(){
    console.log("Saving data to backend");
    var user = new UserData();
    user.FirstName = this.udata.FirstName;
    user.LastName = this.udata.LastName;
    user.Location = this.udata.Location;
    user.Company = this.udata.Company;

    this.UserDetails.push(user);
    console.log(this.UserDetails)
    console.log(this.udata.FirstName);
    console.log(this.udata.LastName);
    this.udata =new UserData();
  }
  CheckData(event:Event){
  console.log(this.FirstName.length);
}
  SendData(){
    console.log("Sending data to backend");
  }
}


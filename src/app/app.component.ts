import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from "./model/user.model";
import {ProfileService} from "./service/profile.service";
import {Contact} from "./model/contact.model";

declare let Circles: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileService]
})
export class AppComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    this.pageSerice.initData();
  }
  title = 'app';

  constructor(public pageSerice: ProfileService){
  }

  ngAfterViewInit(): void {
    var colors = [
      ['#fff', '#2980b9'], ['#fff', '#2980b9'], ['#fff', '#2980b9'], ['#fff', '#2980b9'],['#fff', '#2980b9']
    ];
    for (var i = 1; i <= 6; i++) {
      var child = document.getElementById('circles-' + i),
          percentage = 50 + (i * 10);

      Circles.create({
        id: child.id,
        percentage: percentage,
        radius: 80,
        width: 15,
        number: percentage / 10,
        text: '%',
        colors: colors[i - 1]
      });
    }
  }

  get user(): User{
    return this.pageSerice.pageData.user;
  }

  get contact(): Contact{
    return this.pageSerice.pageData.contact;
  }

}

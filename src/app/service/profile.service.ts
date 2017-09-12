import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {AppData} from "../app.data";

@Injectable()
export class ProfileService extends CommonService{
  pageData: AppData;

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  initData(): Promise<void>{
    this.pageData = new AppData();
    // init user
    let user = this.pageData.user;
    user.avatarImage = "assets/images/profile.png";
    user.coverImage = "hoangtd.jpg";
    user.fullName = "Tạ Duy Hoàng";
    user.job = "Java Developer";
    user.description = "About me";
    user.birthDay = new Date(1994,8,15);
    user.phoneNumber = "0976653494";
    user.email = "duyhoangptit@gmail.com";
    user.webSite = "pidashboard.vn"
    user.address = "Hiệp Hòa - Bắc Giang";

    // init history
    // init skill
    // init project
    // init contact
    let contact = this.pageData.contact;
    contact.address = "Mễ trì - Từ Liêm - Hà Nội";
    contact.email = "duyhoangptit@gmail.com";
    contact.phoneNumber = "0976653494";

    return null;
  }

  messageContact(): Promise<void>{
    return null;
  }
}

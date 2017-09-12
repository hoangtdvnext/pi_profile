import {BaseModel} from "./base.model";
/**
 * Created by hoangtd on 9/12/2017.
 */
export class User extends BaseModel {
  avatarImage: string;
  coverImage: string;
  fullName: string;
  job: string;

  birthDay: Date;
  phoneNumber: string;
  email: string;
  webSite: string;
  address: string;
}

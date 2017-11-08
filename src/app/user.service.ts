import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUserById(userId: string){
    return this.database.object('/users/' + userId);
  }

  addUserById(name: string, uid: string, email: string){
    const newUser = this.database.object(`/users/` + uid);
    newUser.set({
      "name": name,
      "email": email
    });
  }

  addToUserCart(boxName: string, boxPrice: number, boxDuration: number, uid: string) {
    const newBox = this.database.object('/users/'+ uid + '/cart');
    newBox.set({
      "name": boxName,
      "price": boxPrice,
      "length": boxDuration
    })
  }
  addToUserOrder(shippingFName, shippingLName, shippingStreet, shippingStreet2, shippingCity, shippingState, shippingZip, cardNumber, cardExp, cardCVV, billingFName, billingLName, billingStreet, billingStreet2, billingCity, billingState, billingZip, promo, giftMessage, uid) {
    const newOrder = this.database.object('/users/'+ uid + '/orders');
    console.log(shippingFName);
    newOrder.set({
      // "name": boxName,
      // "price": boxPrice,
      // "length": boxDuration,
      "shippingFName": shippingFName,
      "shippingLName": shippingLName,
      "shippingStreet": shippingStreet,
      "shippingStreet2": shippingStreet2,
      "shippingCity": shippingCity,
      "shippingState": shippingState,
      "shippingZip": shippingZip,
      "billingFName": billingFName,
      "billingLName": billingLName,
      "billingStreet": billingStreet,
      "billingStreet2": billingStreet2,
      "billingCity": billingCity,
      "billingState": billingState,
      "billingZip": billingZip,
      "cardNumber": cardNumber,
      "cardExp": cardExp,
      "cardCVV": cardCVV,
      "giftMessage": giftMessage
    })
  }
}

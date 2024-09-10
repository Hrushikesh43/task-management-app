import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user.model';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  /**@Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; **/
  //Instead of writing above properties we can also write directly the user object as below
  @Input({ required: true }) user!: User
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
  // alternative of @Output we can use  output but unlike input this is not a signal it only emits the event
  // select = output<string>();

  // avatar=input.required<string>() ; //this is an alternative way example of using signals
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath=computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
  onSelectUser() {
    this.select.emit(this.user.id)
  }
  //input signals are just read only signal we cannot change their values from the component where they have
  //registered..
}

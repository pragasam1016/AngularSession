import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rightmenu',
  imports: [],
  templateUrl: './rightmenu.component.html',
  styleUrl: './rightmenu.component.css'
})
export class RightmenuComponent implements OnInit {
  // 1
  constructor(){}
  //2
  ngOnInit(): void {
    this.sendMessage();
  }

  @Input() userName: any;

  @Output() userMessageEmitter: EventEmitter<string> = new EventEmitter();
  private message = "I am from News and events";

  // Child
  public sendMessage() {
    debugger;
    this.userMessageEmitter.emit(this.message);
  }

  public sendDataViewChild(){
    return "I am from View Child";
  }

}

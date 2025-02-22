import { AfterViewInit, Component, QueryList, ViewChild, viewChild, ViewChildren, viewChildren } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgShowBackgroundDirective } from './ng-show-background.directive';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { RightmenuComponent } from './rightmenu/rightmenu.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule, RightmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'DirectivesSample';
  public userName = "Gnana Pragasam";
  public fromChild!: string;
  public viewChildMessage!: string;

  public getData(childMessage: any) {
    debugger;
    console.log(childMessage);
    this.fromChild = childMessage;
  }

  @ViewChild(RightmenuComponent) viewChild_rightMenu!: RightmenuComponent;// returns 1st tag from collection
  @ViewChildren(RightmenuComponent) viewChildren_rightMenu!: QueryList<RightmenuComponent>; // returns all the tags

  ngAfterViewInit(): void {
    this.viewChildMessage = this.viewChild_rightMenu.sendDataViewChild();
    this.viewChildren_rightMenu.forEach(x => console.log(x.sendDataViewChild()));
  }

}


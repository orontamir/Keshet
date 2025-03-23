import { Component } from '@angular/core';
import {Router,NavigationStart, NavigationEnd, RouterEvent} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keshat';
  showLoadingDeractor = true;
  constructor(private _router: Router){
    this._router.events.subscribe((routerEvent: RouterEvent) => {
        if (routerEvent instanceof NavigationStart){
          this.showLoadingDeractor = true;
        }

        if (routerEvent instanceof NavigationEnd){
          this.showLoadingDeractor = false;
        }
    });
  }
}

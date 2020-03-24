import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PeriodicTableComponent} from './periodic-table/periodic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devops-periodic';
  constructor(injector: Injector) {
    const CEElement = createCustomElement(PeriodicTableComponent, {injector});
    customElements.define('devops-periodic', CEElement);
  }
}

import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PeriodicTableComponent} from './periodic-table/periodic-table.component';

@Component({
  selector: 'wc-devops-periodic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devops-periodic';
  constructor(injector: Injector) {
    const CEElement = createCustomElement(PeriodicTableComponent, {injector});
    // tslint:disable-next-line:no-unused-expression
    customElements.get('devops-periodic') || customElements.define('devops-periodic', CEElement);
  }
}

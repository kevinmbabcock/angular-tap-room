import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  template: `
    <div class="container">
      <ul>
        <li *ngFor="let currentKeg of kegs">{{currentKeg.name}} by {{currentKeg.brand}}. ${{currentKeg.price}} - {{currentKeg.alcoholContent}}% alcohol <button (click)="editKeg()">Edit!</button></li>
      </ul>
    </div>
  `
})

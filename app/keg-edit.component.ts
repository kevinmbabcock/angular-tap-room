import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-edit',
  template: `
    <div *ngIf="selectedKeg">
      <h3>{{selectedKeg.name}} by {{selectedKeg.brand}}</h3>
      <p>Update Keg:</p>
      <div class="form-group">
        <label>Keg name:</label>
        <input [(ngModel)]="selectedKeg.name" class="form-control">
      </div>
      <div class="form-group">
        <label>Keg brand:</label>
        <input [(ngModel)]="selectedKeg.brand" class="form-control">
      </div>
      <div class="form-group">
        <label>Keg price:</label>
        <input [(ngModel)]="selectedKeg.price" class="form-control">
      </div>
      <div class="form-group">
        <label>Keg ABV%:</label>
        <input [(ngModel)]="selectedKeg.alcoholContent" class="form-control">
      </div>
    </div>
  `
})

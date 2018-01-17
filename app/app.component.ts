import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Tap Room</h1>
    </div>

    <keg-list ></keg-list>
    <keg-edit ></keg-edit>
    <new-keg ></new-keg>
    `

})

export class AppComponent {
  selectedKeg = null;

  updateKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishUpdate() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  updatePint(pint) {
    pint.volume -= 1;
  }
}

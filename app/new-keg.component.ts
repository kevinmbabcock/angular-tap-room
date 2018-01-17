import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'new-keg',
  template: `
    <form id="add-keg">
      <div class="form-group">
        <label for="name">Enter keg name:</label>
        <input type="text" id="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="brand">Enter keg brand:</label>
        <input type="text" id="brand" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Enter keg price:</label>
        <input type="number" id="price" class="form-control">
      </div>
      <div class="form-group">
        <label for="alcohol-content">Enter keg alcohol content:</label>
        <input type="number" id="alcohol-content" class="form-control">
      </div>
      <button type="submit" class="btn-primary">Submit</button>
    </form>
  `
})

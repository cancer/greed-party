import { Component } from '@angular/core';

@Component({
  selector: 'add-player',
  template: `
    <h2>プレーヤーを追加</h2>
    <input type="text">
    <select>
      <option val="0">希望品</option>
    </select>
    <button>追加</button>
  `
})
export class AddPlayerComponent {}

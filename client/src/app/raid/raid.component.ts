import { Component } from '@angular/core';

@Component({
  selector: 'raid',
  template: `
    <select>
      <option val="1">極セフィロト討滅戦</option>
    </select>
    <input type="checkbox">笛を希望品に含める
    <input type="checkbox">譜面を希望品に含める
  `
})
export class RaidComponent {}

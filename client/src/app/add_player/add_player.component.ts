import { ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter, Component } from '@angular/core';
import { CORE_DIRECTIVES }  from '@angular/common';

import { Price } from '../raid/shared/price.ts';

@Component({
  selector: 'add-player',
  template: `
    <h2>プレーヤーを追加</h2>
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="playerName">
      <select [(ngModel)]="selectedPrice">
        <option
          *ngFor="let price of prices"
          [value]="price.ldst_id">{{price.name}}</option>
      </select>
      <button type="submit">追加</button>
    </form>
  `,
  directives: [ CORE_DIRECTIVES ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlayerComponent implements OnChanges {
  selectedPrice: string;
  playerName: string;

  @Input()  prices: Array<Price>;
  @Output() addPlayer = new EventEmitter();

  ngOnChanges() {
    if(!this.prices || this.prices.length === 0) return;
    this.selectedPrice = this.prices[0].ldst_id;
  }

  onSubmit() {
    this.addPlayer.emit({
      name: this.playerName,
      price: this.prices.find((price) => {
        return price.ldst_id === this.selectedPrice;
      })
    });
    this.playerName = '';
  }
}

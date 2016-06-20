import { Output, EventEmitter, OnInit, Component } from '@angular/core';
import { CORE_DIRECTIVES }   from '@angular/common';

import { Raid }         from './shared/raid.ts';
import { Price }        from './shared/price.ts';
import { RaidService }  from './shared/raid.service.ts';
import { PriceService } from './shared/price.service.ts';

@Component({
  selector: 'raid',
  template: `
    <select (change)="getPrices()" [(ngModel)]="selectedContent">
      <option
        *ngFor="let raid of raidList"
        [value]="raid.ldst_id">{{raid.name}}</option>
    </select>
    <input type="checkbox">笛を希望品に含める
    <input type="checkbox">譜面を希望品に含める
  `,
  directives: [ CORE_DIRECTIVES ],
  providers: [
    RaidService,
    PriceService
  ]
})
export class RaidComponent implements OnInit {
  raidList: Array<Raid>
  selectedContent: string
  @Output() changeRaid = new EventEmitter();

  constructor(
    private raidService: RaidService,
    private priceService: PriceService
  ) { }

  getPrices() {
    this.priceService.getPrices(this.selectedContent)
      .then((prices) => {
        this.changeRaid.emit(prices);
      });
  }

  ngOnInit() {
    this.raidService.getRaidList()
      .then((raidList) => {
        this.raidList = raidList;
        this.selectedContent = raidList[0].ldst_id;
      });
  }
}

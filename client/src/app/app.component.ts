import { Component, Directive } from '@angular/core';

import { MemberListComponent }  from 'app/member_list/member_list.component';
import { RaidComponent }        from 'app/raid/raid.component';
import { AddPlayerComponent }   from 'app/add_player/add_player.component';
import { MacroComponent }       from 'app/macro/macro.component';

@Component({
  selector: 'app',
  template: `
    <h1>FFXIV Greed Party</h1>
    <raid (changeRaid)="onChangeRaid($event)"></raid>
    <add-player [prices]="currentPrices"></add-player>
    <member-list></member-list>
    <macro></macro>
  `,
  directives: [
    MemberListComponent,
    RaidComponent,
    AddPlayerComponent,
    MacroComponent
  ],
  providers: [
  ]
})
export class AppComponent {
  currentPrices: any;

  constructor() { }

  onChangeRaid(prices) {
    this.currentPrices = prices;
  }
}

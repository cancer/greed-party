import { Input, Component } from '@angular/core';
import { CORE_DIRECTIVES }  from '@angular/common';

@Component({
  selector: 'member-list',
  template: `
    <h2>メンバーリスト</h2>
    <ul>
      <li *ngFor="let player of players">
        <strong>{{player.name}}</strong>
        <span class="wishes">{{player.price.name}}</span>
      </li>
    </ul>
  `,
  styles: [
    '.wishes { margin-left: 10px; }'
  ]
})
export class MemberListComponent {
  @Input() players: Array<any>;
}

import { Input, DoCheck, Component } from '@angular/core';

@Component({
  selector: 'macro',
  template: `
    <h2>マクロ用</h2>
    <textarea class="multiLineMacro">{{multiLine}}</textarea>
    <h2>PT募集用</h2>
    <textarea class="oneLineMacro">{{oneLine}}</textarea>
  `,
  styles: [
    ".multiLineMacro { width: 200px; height: 160px; }",
    ".oneLineMacro { width: 300px; height: 60px; }"
  ]
})
export class MacroComponent implements DoCheck {
  @Input() players: Array<any>;
  multiLine: string;
  oneLine: string;

  createOneLine() {
    let wishes = this.players.map((player) => {
      return player.price.name;
    });
    return `〆=>${wishes.join(', ')} 希望品以外はグリード`;
  }

  createMultiLine() {
    let nameWishPairs = this.players.map((player) => {
      return `/p ${player.name}: ${player.price.name}`;
    });
    return `/p 確認してください！<se.6>\n${nameWishPairs.join('\n')}\n/p ※希望品が出たら申告してください\n/p 希望品以外はグリードです`;
  }

  ngDoCheck() {
    this.multiLine = this.createMultiLine().trim();
    this.oneLine   = this.createOneLine();
  }
}

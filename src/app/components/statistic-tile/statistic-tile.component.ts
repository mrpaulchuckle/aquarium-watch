import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistic-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistic-tile.component.html',
  styleUrls: ['./statistic-tile.component.scss']
})
export class StatisticTileComponent {
  @Input() statName: string = '';
  @Input() statValue: string | number | undefined = '';
}

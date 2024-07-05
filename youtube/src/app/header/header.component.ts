import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'yt-header',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public searchValue = '';

  public onSearch() {
    console.log(this.searchValue);
  }
}

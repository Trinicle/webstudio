import { Component, HostBinding, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '@webstudio/shared';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  darkModeService = inject(DarkModeService);

  @HostBinding('class.dark') get mode() {
    return this.darkModeService.getDarkMode();
  }
}

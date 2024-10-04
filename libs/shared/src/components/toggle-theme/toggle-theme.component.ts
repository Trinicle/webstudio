import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { ThemeService } from '../../services';

@Component({
  selector: 'ws-toggle-theme',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective, HlmIconComponent],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
})
export class ToggleThemeComponent {
  private _platformId = inject(PLATFORM_ID);
  themeService = inject(ThemeService);
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    this.getTheme();
  }

  private getTheme() {
    if (isPlatformBrowser(this._platformId)) {
      const storedTheme =
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      this.theme.set(storedTheme);
    }
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.getTheme();
  }
}

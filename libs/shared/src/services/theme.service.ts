import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  RendererFactory2,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _platformId = inject(PLATFORM_ID);
  private _renderer = inject(RendererFactory2).createRenderer(null, null);
  private _document = inject(DOCUMENT);
  private _theme = signal<'light' | 'dark'>('light');

  constructor() {
    if (isPlatformBrowser(this._platformId)) {
      const storedTheme =
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      this._theme.set(storedTheme);
    }

    effect(() => {
      const theme = this._theme();
      if (theme === 'dark') {
        this._renderer.addClass(this._document.documentElement, 'dark');
      } else {
        this._renderer.removeClass(this._document.documentElement, 'dark');
      }
    });
  }

  public toggleDarkMode(): void {
    const newTheme = this._theme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this._theme.set(newTheme);
  }
}

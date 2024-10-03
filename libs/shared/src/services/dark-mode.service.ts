import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode = signal<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  toggleDarkMode() {
    this.darkMode.update((value) => !value);
  }

  getDarkMode() {
    return this.darkMode();
  }
}

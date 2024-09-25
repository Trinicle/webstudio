import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsButtonDirective } from '@webstudio/shared';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ws-home',
  standalone: true,
  imports: [CommonModule, WsButtonDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

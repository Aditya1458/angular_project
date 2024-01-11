import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MyCompComponent} from './my-comp/my-comp.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Welcome to My Angular App!</h1>
  //   <app-my-comp></app-my-comp>
  // `,
  standalone: true,
  imports: [CommonModule, RouterOutlet,MyCompComponent,MatSlideToggleModule],
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  // constructor()

  //   {
  //     setTimeout(() => {
  //       this.title = "My New App";
  //     }, 3000);
  //   }
  
  
}

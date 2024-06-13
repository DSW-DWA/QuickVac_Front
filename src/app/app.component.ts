import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JobApplicationComponent } from './job-application/job-application.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    JobApplicationComponent,  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuickVac';
}

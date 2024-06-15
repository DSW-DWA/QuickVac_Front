import { Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobListComponent } from './job-list/job-list.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: 'job-application', component: JobApplicationComponent},
    {path: 'job-list', component: JobListComponent},
    {path: '' , component: MainComponent}
];

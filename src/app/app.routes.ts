import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'jobs', component: JobListComponent},
    {path: 'job/:id', component: JobComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: JobListComponent},
];

import { Component, OnInit } from '@angular/core';
import { Job, JobServiceService } from '../Services/job-service.service';
import { JobInfoComponent } from '../job-info/job-info.component';
import { CommonModule } from '@angular/common';
import { JobSearchComponent } from "../job-search/job-search.component";

@Component({
    selector: 'app-job-list',
    standalone: true,
    templateUrl: './job-list.component.html',
    styleUrl: './job-list.component.css',
    imports: [JobInfoComponent,
        CommonModule, JobSearchComponent]
})

export class JobListComponent implements OnInit {
  public jobs: Job[] = [];
  constructor (private jobService: JobServiceService){}

  ngOnInit(){
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })
    
  }
}

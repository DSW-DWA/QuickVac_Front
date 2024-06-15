import { Component, OnInit } from '@angular/core';
import { Job, JobServiceService } from '../Services/job-service.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})

export class JobListComponent implements OnInit {
  public jobs: Job[] = [];
  constructor (private jobService: JobServiceService){}

  ngOnInit(){
    this.jobService.getJobs().subscribe(jobs => {
      console.log(jobs);
    })
    
  }
}

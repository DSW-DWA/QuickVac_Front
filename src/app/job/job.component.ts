import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { JobApplicationComponent } from '../job-application/job-application.component';
import { JobServiceService } from '../Services/job-service.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobApplicationComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements AfterViewInit {
  @ViewChild('jobInfoContainer') jobInfoContainer!: ElementRef;

  
  constructor(private jobService: JobServiceService){
  }


  ngAfterViewInit() {
    let jobInfo: string = this.jobService.getJobInfo(9);

    this.jobInfoContainer.nativeElement.innerHTML = jobInfo;
  }

}

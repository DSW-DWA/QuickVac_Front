import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { JobApplicationComponent } from '../job-application/job-application.component';
import { Job, JobServiceService } from '../Services/job-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobApplicationComponent, MatIcon],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements AfterViewInit {
  @ViewChild('jobInfoContainer') jobInfoContainer!: ElementRef<HTMLDivElement>;

  public jobTitle!: string;
  public jobDescription!: string;
  public workType!: string;
  public location!: string;
  public salary!: string;
  public experienceLevel!: string;

  constructor(private jobService: JobServiceService, private renderer: Renderer2, private activatedRoute: ActivatedRoute){
  }

  ngAfterViewInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.jobService.getJobInfo(id!).subscribe(jobInfo => {
        this.jobDescription = jobInfo.description
        this.jobTitle = jobInfo.title;
        this.workType = jobInfo.work_type;
        this.experienceLevel = jobInfo.experience_level;
        this.location = jobInfo.location;
        this.salary = `${jobInfo.salary_amount!}  ${jobInfo.salary_currency!}`;

        this.jobInfoContainer.nativeElement.innerHTML = this.jobDescription;    
        this.jobInfoContainer.nativeElement.childNodes.forEach(childNode => {
          if (childNode.nodeName == "H2")       
            this.renderer.setAttribute(childNode, "class", "text-4xl font-bold mb-4");
  
          if (childNode.nodeName == "UL")
            this.renderer.setAttribute(childNode, "class", "list-disc pl-6 space-y-2 mb-8");
        })
      });
      }, 
        error => console.log("Ошибка ", error)
      ); 
  }

}

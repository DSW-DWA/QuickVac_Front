import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('jobInfoContainer') jobInfoContainer!: ElementRef<HTMLDivElement>;

  constructor(private jobService: JobServiceService, private renderer: Renderer2){
  }

  ngAfterViewInit() {
    let jobInfo: string = this.jobService.getJobInfo(9); //поменять на id вакансии
    this.jobInfoContainer.nativeElement.innerHTML = jobInfo;    
    this.jobInfoContainer.nativeElement.childNodes.forEach(childNode => {
      if (childNode.nodeName == "H2")       
        this.renderer.setAttribute(childNode, "class", "text-4xl font-bold mb-4");

      if (childNode.nodeName == "UL")
        this.renderer.setAttribute(childNode, "class", "list-disc pl-6 space-y-2 mb-8");
    })
  }

}

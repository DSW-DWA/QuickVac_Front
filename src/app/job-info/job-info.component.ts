import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBriefcase, faMapMarkerAlt, faMoneyBillWave, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [FontAwesomeModule,
    CommonModule],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css'
})
export class JobInfoComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() workType!: string;
  @Input() location!: string;
  @Input() salaryAmount!: number | null;
  @Input() salaryCurrency!: string | null;
  @Input() experienceLevel!: string;


  faBriefcase = faBriefcase;
  faMapMarkerAlt = faMapMarkerAlt;
  faMoneyBillWave = faMoneyBillWave;
  faClock = faClock;
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent {
  jobApplicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobApplicationForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phonePrefix: ['ru'],
      phoneNumber: [''],
      telegramNick: [''],
      resume: [null],
      coverLetter: [''],
      contactMethod: ['email'],
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.jobApplicationForm.patchValue({
        resume: file
      });
    }
  }

  onSubmit(): void {
    console.log(this.jobApplicationForm.value);
  }
}

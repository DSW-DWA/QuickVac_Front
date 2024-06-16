import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/vacancies`)
  }

  getJobInfo(jobId: string): Observable<Job>{
    let result: Observable<Job> = this.http.get<Job>(`${this.apiUrl}/vacancies/${jobId}`);
    return result;
  }
}


export interface Job{
  id: string;
  title: string;
  salary_amount: number | null;
  salary_currency: string | null;
  location: string;
  status: string;
  direction: string;
  work_type: string;
  experience_level: string;
  employment_level: string;
  education_level: string;
  company_id: string;
  posted_date: string;
  closing_date: string;
  description: string;
}
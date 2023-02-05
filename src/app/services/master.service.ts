import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITaskListModal } from "../shared/task-modal";

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzU2MDU2NjcsImV4cCI6MTY3NTYwOTI2NywiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiZTUyMjAyYTktN2NmNS00NzVjLWEyM2QtMmRmNGUwZGEyNjEzIiwiYXV0aF90aW1lIjoxNjc1Mjc2Nzk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJlbWFpbCI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJzY29wZSI6WyJmYWNpbHRlYXN5X2FwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.MNgKjnBUvtPHN2_x_Xgc2VIzCpBLDrX-_0UKcp9RX72pYfL7NbV62CCtZ0sTF0NVZh7ZHILrwMQxbNlbfpO6s9F_opeW9ka7yafjh3AHkFmoZwXyu_Xk3QeBU_24CEKczmGEe1_yXCuopWzvGK7yuM4BuEI1PRu5Zmc9vC3C0dUZdL43uw4QtDstOiVfmeWpU2cbFxeV3gdhjrDOO_B6DBLU4HgXQ-xejndNEknSCHmNoipUIw687Y3KuSYuVEEA7afeVMBVjt33hkKYKFygvFI46ASswuvhw-6y-Y7SShTnkIMQ7-uwGpaw6_TGszK5SCOD6JAu1J8YMIVG2PvAQg'
  org_id = 'ff58144e-18b0-4244-a67e-15cada9ffd41';

  /**
   *
   */
  constructor(private http: HttpClient) { }

  getRemainders() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/Masters/ExpirationAlerts', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }

  getTaskTypes() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/Masters/TaskTypes', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }

  getCheckList() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/CheckList', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }

  postTaskType(payload): Observable<number> {
    return this.http.post<number>("https://api-qa.faciliteasy.com/api/v1/Masters/TaskTypes", payload, {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }

  postExpirationAlert(payload): Observable<number> {
    return this.http.post<number>("https://api-qa.faciliteasy.com/api/v1/Masters/ExpirationAlerts", payload, {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }
}
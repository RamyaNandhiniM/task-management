import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITaskDetailsModal, ITaskListModal, ITaskPayloadModal } from "../shared/task-modal";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  endpoint: string = 'https://api-qa.faciliteasy.com/api/v1/Tasks?OnlyMyTasks=false&page=1'
  taskList: ITaskListModal[] = []
  token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzUyNzM5MTksImV4cCI6MTY3NTI3NzUxOSwiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiNWFkMGY0Y2QtZjlmYS00ODY5LWFhM2MtMDhkOGZiMGQ5MTA2IiwiYXV0aF90aW1lIjoxNjc1MTg2MDk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkxOTk5QGdtYWlsLmNvbSIsImVtYWlsIjoicmFteWFuYW5kaGluaTE5OTlAZ21haWwuY29tIiwic2NvcGUiOlsiZmFjaWx0ZWFzeV9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.MxYp5eWe9fSSCjTDs2Ontt-mpyXa6Q5qHUYkjPO_wjKCPF4ykvlX0BoR9OZZk5E2fp85HrzirT1kvQnttbtfXFooYZUGsgGqMYM_2q1UfrvraTfnj8EADIs-S_MpRr4BbKGk3Uym5FjgsX-SSyvW9l5rzt17I-EgRvz8297R9BqgN0MdNeykYbyXMK_64o21tQ_LuridhUn7Uh01iAd5VA7JyFVWvMMoEI8uny2N5z6eH2mUWfzchgYCjnY4-41NCXLSiuYep4y-y8MAIYBOD3v2KKv5NaHCMDuxMtfYus14TC5ykS_qyMGzaXPlinCq_H_DQ8iIo1J0QJNhxkeYIQ'
  org_id = 'ff58144e-18b0-4244-a67e-15cada9ffd41'

  constructor(private http: HttpClient) {
    //this.getTasks().subscribe((res) => this.taskList = res);
  }

  getTasks(): Observable<ITaskListModal[]> {
    return this.http.get<ITaskListModal[]>(this.endpoint, {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }
  getTaskById(id: string): Observable<ITaskDetailsModal> {
    return this.http.get<ITaskDetailsModal>('https://api-qa.faciliteasy.com/api/v1/Tasks/'.concat(id), {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    })
  }
  addTask(payload: ITaskPayloadModal): Observable<ITaskPayloadModal> {
    return this.http.post<ITaskPayloadModal>('https://api-qa.faciliteasy.com/api/v1/Tasks', payload, {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    })
  }
  getFacilities() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/Facilities?includeSubLocations=false', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }
  getAssests() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/Assets?page=1', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }
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
  getTeams() {
    return this.http.get<ITaskListModal[]>('https://idp-qa.faciliteasy.com/api/teams', {
      headers: {
        authorization: this.token,
        org_id: this.org_id
      }
    });
  }
  getUsers() {
    return this.http.get<ITaskListModal[]>('https://idp-qa.faciliteasy.com/api/users', {
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
}
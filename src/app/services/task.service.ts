import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFilesModal } from "../shared/files-modal";
import { ITaskDetailsModal, ITaskListModal, ITaskPayloadModal } from "../shared/task-modal";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  endpoint: string = 'https://api-qa.faciliteasy.com/api/v1/Tasks?OnlyMyTasks=false&page=1'
  taskList: ITaskListModal[] = []
  token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzU1MjQ2ODMsImV4cCI6MTY3NTUyODI4MywiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiZTUyMjAyYTktN2NmNS00NzVjLWEyM2QtMmRmNGUwZGEyNjEzIiwiYXV0aF90aW1lIjoxNjc1Mjc2Nzk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJlbWFpbCI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJzY29wZSI6WyJmYWNpbHRlYXN5X2FwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.i5JH8h_hLLagAVMFn_VvU2va4UZGXHCEFOt74ZEyBGokuMof_u4cjfwjcvmtopwsE3VxnXAx4CXQ_1JjsHiqaygBV9_wQV4Q3I6tfZfb1vTzKbyGQO4V7gMwROjZzbDKm72Wjyv7bQJDBGwrAmSe9iHE-_wy2Byvlktj8hJHbPBrFGKc1fUa36DcSXqIIANsSUnoE02FmYYACuHmYhnp6v4obd9-IqyL0xbZaowltEPyo-5Q4dIjQXTyRmWrI7YQXADF4-J8fKYu7gjPqt8fD23XQpDR56maH9BM-zQieTuLOkha21lidvuveyfSfUnL2N78XUFai7IZ_NUE12FXhQ'
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

  getFiles(id: string): Observable<IFilesModal[]> {
    return this.http.get<IFilesModal[]>('https://api-qa.faciliteasy.com/api/v1/tasks/'.concat(id, "/files"), {
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

  update(id: string, payload: ITaskPayloadModal): Observable<ITaskPayloadModal> {
    return this.http.put<ITaskPayloadModal>('https://api-qa.faciliteasy.com/api/v1/Tasks/'.concat(id), payload, {
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
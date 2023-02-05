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
  token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzU2MDkzNDEsImV4cCI6MTY3NTYxMjk0MSwiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiZTUyMjAyYTktN2NmNS00NzVjLWEyM2QtMmRmNGUwZGEyNjEzIiwiYXV0aF90aW1lIjoxNjc1Mjc2Nzk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJlbWFpbCI6InJhbXlhbmFuZGhpbmkubXVyYWxpZGhhcmFuQGthc2FkYXJhdGVjaC5jb20iLCJzY29wZSI6WyJmYWNpbHRlYXN5X2FwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.QceDHTVqrmm54-Sc60GpN5Cmzg6L8zV7kDzjqQ5NRiszXU1av_w9DNL4V5ZSTpOW3nUu4IDD6Rf2tcveZ2ywvD_IqSYy94CcHV9GxUdOWIYmGw-n6PX5WIDyIq3phfMjOLW9x2MlE40clqeQLBUR430iGEuQ91QicQsknEIdDXm8TScL9bT4n3PddWFz7xHkVr9xbdzmgtBOgjlhDaubyS_u5b1cuV6fRP8K4DdlcOgKh5OSnaBcwqTgg_KhwpAq-6HZEs4QNS_HrqIcIV5bMLxr7EcOe50vswV56on_v1P4-aQKp_fGH1i8AVfgN74FrhoyRXwAp5YT0j9Pw944jg'
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

}
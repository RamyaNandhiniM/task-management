import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITaskListModal } from "../shared/task-modal";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  endpoint: string = 'https://api-qa.faciliteasy.com/api/v1/Tasks?OnlyMyTasks=false&page=1'
  taskList: ITaskListModal[] = []

  constructor(private http: HttpClient) {
    this.getTasks().subscribe((res) => this.taskList = res);
  }

  getTasks(): Observable<ITaskListModal[]> {
    return this.http.get<ITaskListModal[]>(this.endpoint, {
      headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzUxODU2MDgsImV4cCI6MTY3NTE4OTIwOCwiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiNWFkMGY0Y2QtZjlmYS00ODY5LWFhM2MtMDhkOGZiMGQ5MTA2IiwiYXV0aF90aW1lIjoxNjc1MTQxNjk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkxOTk5QGdtYWlsLmNvbSIsImVtYWlsIjoicmFteWFuYW5kaGluaTE5OTlAZ21haWwuY29tIiwic2NvcGUiOlsiZmFjaWx0ZWFzeV9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Rb35AEpy0-waZrd0qvvO1GRszhsublSS-lwjxlqN-u8ccQy2mkbUY65gE-Ilogxj5Xdit930jTU_3-5BTy4eSOZWpjWX6hycsy7Zdr4njwo_OcfxCG62qDhk-ks5VqlxYh7soJxS3F-TMjj36S46COXMLg-6JuS6lmk4TEIWQeMNZ2hgZcVUG_kZayiu9Zvr072Q0eYgwYWJKCZaYRGxT7v5FV3KTUWSXtvEww3OSmH1HuwLoOMR0Alx6W95WHmG3tKDlauTbVfBxq-gaog0O7MgWHsMJruSQMFKDrm9O9NygTJAQhLN6lzLHhtjMJWThCwOAOJ3cb_gipnPvbANbA',
        org_id: 'ff58144e-18b0-4244-a67e-15cada9ffd41'
      }
    });
  }
  getTaskById(id: number): ITaskListModal | undefined {
    return this.taskList.find(x => x.id == id);
  }
  addTask(payload: ITaskListModal): number {
    payload.id = this.taskList.slice(-1)[0].id + 1
    this.taskList.push(payload);
    return payload.id;
  }
  getFacilities() {
    return this.http.get<ITaskListModal[]>('https://api-qa.faciliteasy.com/api/v1/Facilities?includeSubLocations=false', {
      headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzUxODU2MDgsImV4cCI6MTY3NTE4OTIwOCwiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiNWFkMGY0Y2QtZjlmYS00ODY5LWFhM2MtMDhkOGZiMGQ5MTA2IiwiYXV0aF90aW1lIjoxNjc1MTQxNjk5LCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkxOTk5QGdtYWlsLmNvbSIsImVtYWlsIjoicmFteWFuYW5kaGluaTE5OTlAZ21haWwuY29tIiwic2NvcGUiOlsiZmFjaWx0ZWFzeV9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Rb35AEpy0-waZrd0qvvO1GRszhsublSS-lwjxlqN-u8ccQy2mkbUY65gE-Ilogxj5Xdit930jTU_3-5BTy4eSOZWpjWX6hycsy7Zdr4njwo_OcfxCG62qDhk-ks5VqlxYh7soJxS3F-TMjj36S46COXMLg-6JuS6lmk4TEIWQeMNZ2hgZcVUG_kZayiu9Zvr072Q0eYgwYWJKCZaYRGxT7v5FV3KTUWSXtvEww3OSmH1HuwLoOMR0Alx6W95WHmG3tKDlauTbVfBxq-gaog0O7MgWHsMJruSQMFKDrm9O9NygTJAQhLN6lzLHhtjMJWThCwOAOJ3cb_gipnPvbANbA',
        org_id: 'ff58144e-18b0-4244-a67e-15cada9ffd41'
      }
    });
  }
}
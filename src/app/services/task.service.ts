import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITaskListModel } from "../shared/task-model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  endpoint: string = '/assets/task-list.json'
  taskList: ITaskListModel[] = []
  constructor(private http: HttpClient) {
    this.getTasks().subscribe((res) => this.taskList = res)
  }
  getTasks(): Observable<ITaskListModel[]> {
    return this.http.get<ITaskListModel[]>(this.endpoint);
  }
  getTaskById(id: number): ITaskListModel | undefined {
    return this.taskList.find(x => x.id == id);
  }
  addTask(payload: ITaskListModel): number {
    payload.id = this.taskList.slice(-1)[0].id + 1
    this.taskList.push(payload);
    return payload.id;
  }
}
export interface ITaskListModel {
  id: number,
  name: string,
  number: string,
  assignedTo: string,
  dueDate: string,
  assignedOn: string,
  status: string,
  priority: string,
  photo?: string,
  description?: string
}
export interface ITaskListModal {
  id: number,
  name: string,
  number: string,
  assignedTo: string,
  dueDate: string,
  assignedOn: string,
  status: string,
  priority: IdNamePair,
  photo?: string,
  description?: string,
  facility?: string
}

interface IdNamePair {
  id: string,
  name: string
}
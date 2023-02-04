export interface ITaskListModal {
  "id": string,
  "name": string,
  "taskNumber": string,
  "description": string,
  assignedTo: {
    users: IdNamePair[],
    teams: IdNamePair[]
  },
  "dueDate": Date,
  "featureId": string,
  "featureName": string,
  "status": string,
  "imgLink": string,
  "fileName": string,
  "taskType": string,
  "priority": IdNamePair,
  "hasRecurrence": boolean,
  "completedDateTime": Date,
  "createdDateTime": Date
}

export interface IdNamePair {
  id: string,
  name: string
}
export interface NumIdNamePair {
  id: number,
  name: string
}

export interface ITaskDetailsModal {
  "id": string,
  "name": string,
  "number": string,
  "description": string,
  "assignedTo": {
    "users": IdNamePair[],
    "teams": IdNamePair[]
  },
  "facility": IdNamePair,
  "asset": IdNamePair,
  "status": string,
  "type": NumIdNamePair,
  "priority": NumIdNamePair,
  "remainder": NumIdNamePair,
  "dueDate": Date,
  "rrule": null,
  "featureName": string,
  "featureTitle": string,
  "featureId": string,
  "subFeatureId": string,
  "subTasks": [],
  "assignedBy": IdNamePair,
  "assignedOn": Date,
  "checkListId": string,
  "checkListFieldValues": {}
}

export interface ITaskPayloadModal {
  id?: string
  "name": string,
  "description": string,
  "assignedMembers": string[],
  "assignedTeams": string[],
  "facilityId": string,
  "typeId": number,
  "priority": number,
  "remainder": number,
  "dueDate": Date,
  "subTasks": [],
  "rRuleString": null,
  "checkListFieldValues": {},
  AssetId: string
}
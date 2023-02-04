import { IdNamePair } from "./task-modal"

export interface IFilesModal {
  "id": string,
  "name": string,
  "category": string,
  "uploadedBy": IdNamePair,
  "uploadedOn": Date,
  "description": string,
  "links": IFileLinkModal[]
}

export interface IFileLinkModal {
  "href": string,
  "rel": string
}
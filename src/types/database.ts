export type UserRole =
  | "pending"
  | "presales"
  | "leader"
  | "admin";

export type ProjectStatus =
  | "En Proceso"
  | "Ganado"
  | "Perdido"
  | "Cancelado"
  | "Standby"
  | "Completo";

export type TaskStatus =
  | "Pendiente"
  | "En Progreso"
  | "Bloqueada"
  | "Completada";

export type Priority =
  | "Alta"
  | "Media"
  | "Baja";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface Client {
  id: string;
  businessName: string;
  commercialName: string;
  contactName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface Project {
  id: string;
  projectNumber: string;

  projectName: string;

  clientId: string;

  clientName: string;

  businessName: string;

  contactName: string;

  clientEmail: string;

  clientPhone: string;

  salesOwner: string;

  lineOfBusiness: string;

  presalesEngineer: string;

  presalesLeader: string;

  customerRequirement: string;

  receivedDate: string;

  dueDate: string;

  status: ProjectStatus;

  priority: Priority;

  createdAt: string;
}

export interface Task {
  id: string;

  projectId: string;

  title: string;

  description: string;

  assignees: string[];

  status: TaskStatus;

  priority: Priority;

  dueDate: string;

  createdAt: string;
}

export interface Note {
  id: string;
  projectId: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface Document {
  id: string;
  projectId: string;
  name: string;
  type: string;
  version: string;
  author: string;
  url: string;
  createdAt: string;
}

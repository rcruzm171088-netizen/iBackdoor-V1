import { Client, Project } from "@/types/database";

export const clients: Client[] = [
  {
    id: "1",
    businessName: "Grupo Sictel SA de CV",
    commercialName: "Grupo Sictel",
    contactName: "Carlos Gomez",
    email: "cgomez@sictel.com",
    phone: "5555555555",
    createdAt: new Date().toISOString(),
  },
];

export const projects: Project[] = [
  {
    id: "1",
    projectNumber: "PR-0001",

    projectName: "Migración Data Center",

    clientId: "1",

    clientName: "Grupo Sictel",

    businessName: "Grupo Sictel SA de CV",

    contactName: "Carlos Gomez",

    clientEmail: "cgomez@sictel.com",

    clientPhone: "5555555555",

    salesOwner: "Juan Perez",

    lineOfBusiness: "Infraestructura",

    presalesEngineer: "Ricardo Cruz",

    presalesLeader: "Jorge Ramirez",

    customerRequirement:
      "Migración completa del Data Center",

    receivedDate: "2026-08-01",

    dueDate: "2026-09-01",

    status: "En Proceso",

    priority: "Alta",

    createdAt: new Date().toISOString(),
  },
];
`

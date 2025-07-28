import axios from "axios";
import type {
  Project,
  Skill,
  Certificate,
  Contact,
  ContactCreate,
} from "../types/api";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Projects API
export const projectsApi = {
  getAll: (featuredOnly = false) =>
    api.get<Project[]>(`/projects?featured_only=${featuredOnly}`),

  getById: (id: number) => api.get<Project>(`/projects/${id}`),

  create: (project: Omit<Project, "id" | "created_at" | "updated_at">) =>
    api.post<Project>("/projects", project),

  update: (id: number, project: Partial<Project>) =>
    api.put<Project>(`/projects/${id}`, project),

  delete: (id: number) => api.delete(`/projects/${id}`),
};

// Skills API
export const skillsApi = {
  getAll: (category?: string) =>
    api.get<Skill[]>(`/skills${category ? `?category=${category}` : ""}`),

  getById: (id: number) => api.get<Skill>(`/skills/${id}`),

  create: (skill: Omit<Skill, "id" | "created_at" | "updated_at">) =>
    api.post<Skill>("/skills", skill),

  update: (id: number, skill: Partial<Skill>) =>
    api.put<Skill>(`/skills/${id}`, skill),

  delete: (id: number) => api.delete(`/skills/${id}`),
};

// Certificates API
export const certificatesApi = {
  getAll: () => api.get<Certificate[]>("/certificates"),

  getById: (id: number) => api.get<Certificate>(`/certificates/${id}`),

  create: (
    certificate: Omit<Certificate, "id" | "created_at" | "updated_at">
  ) => api.post<Certificate>("/certificates", certificate),

  update: (id: number, certificate: Partial<Certificate>) =>
    api.put<Certificate>(`/certificates/${id}`, certificate),

  delete: (id: number) => api.delete(`/certificates/${id}`),
};

// Contacts API
export const contactsApi = {
  getAll: (unreadOnly = false) =>
    api.get<Contact[]>(`/contacts?unread_only=${unreadOnly}`),

  getById: (id: number) => api.get<Contact>(`/contacts/${id}`),

  create: (contact: ContactCreate) => api.post<Contact>("/contacts", contact),

  markAsRead: (id: number) => api.put<Contact>(`/contacts/${id}/read`),

  delete: (id: number) => api.delete(`/contacts/${id}`),
};

export default api;

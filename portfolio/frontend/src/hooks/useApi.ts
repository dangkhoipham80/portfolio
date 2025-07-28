import { useState, useEffect } from "react";
import {
  projectsApi,
  skillsApi,
  certificatesApi,
  contactsApi,
} from "../services/api";
import type { ContactCreate } from "../types/api";

// Generic hook for API calls
export function useApi<T>(
  apiCall: () => Promise<{ data: T }>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiCall();
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
}

// Projects hooks
export function useProjects(featuredOnly = false) {
  return useApi(() => projectsApi.getAll(featuredOnly), [featuredOnly]);
}

export function useProject(id: number) {
  return useApi(() => projectsApi.getById(id), [id]);
}

// Skills hooks
export function useSkills(category?: string) {
  return useApi(() => skillsApi.getAll(category), [category]);
}

export function useSkill(id: number) {
  return useApi(() => skillsApi.getById(id), [id]);
}

// Certificates hooks
export function useCertificates() {
  return useApi(() => certificatesApi.getAll());
}

export function useCertificate(id: number) {
  return useApi(() => certificatesApi.getById(id), [id]);
}

// Contacts hooks
export function useContacts(unreadOnly = false) {
  return useApi(() => contactsApi.getAll(unreadOnly), [unreadOnly]);
}

export function useContact(id: number) {
  return useApi(() => contactsApi.getById(id), [id]);
}

// Mutation hooks
export function useCreateContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createContact = async (contact: ContactCreate) => {
    try {
      setLoading(true);
      setError(null);
      const response = await contactsApi.create(contact);
      return response.data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createContact, loading, error };
}

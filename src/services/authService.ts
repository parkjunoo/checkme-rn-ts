import apiClient from "./apiClient";
import { User } from "../types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<User | null> {
    const response = await apiClient.post<User>(
      `${API_ENDPOINTS.AUTH}/login`,
      credentials
    );
    return response?.data || null;
  }

  async register(data: RegisterData): Promise<User | null> {
    const response = await apiClient.post<User>(
      `${API_ENDPOINTS.AUTH}/register`,
      data
    );
    return response?.data || null;
  }

  async logout(): Promise<boolean> {
    const response = await apiClient.post(`${API_ENDPOINTS.AUTH}/logout`, {});
    return response?.success || false;
  }

  async refreshToken(): Promise<string | null> {
    const response = await apiClient.post<{ token: string }>(
      `${API_ENDPOINTS.AUTH}/refresh`,
      {}
    );
    return response?.data?.token || null;
  }
}

export default new AuthService();

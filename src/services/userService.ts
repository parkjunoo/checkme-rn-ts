import apiClient from "./apiClient";
import { User } from "../types";

class UserService {
  async getProfile(userId: string): Promise<User | null> {
    const response = await apiClient.get<User>(
      `${API_ENDPOINTS.USERS}/${userId}`
    );
    return response?.data || null;
  }

  async updateProfile(
    userId: string,
    data: Partial<User>
  ): Promise<User | null> {
    const response = await apiClient.put<User>(
      `${API_ENDPOINTS.USERS}/${userId}`,
      data
    );
    return response?.data || null;
  }

  async deleteAccount(userId: string): Promise<boolean> {
    const response = await apiClient.delete(`${API_ENDPOINTS.USERS}/${userId}`);
    return response?.success || false;
  }
}

export default new UserService();

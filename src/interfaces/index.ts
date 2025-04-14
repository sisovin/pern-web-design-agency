export interface User {
  id: string;
  email: string;
  password: string;
  refreshToken?: string;
  deletedAt?: Date;
  createdAt: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RefreshTokenData {
  refreshToken: string;
}

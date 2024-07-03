export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
};

export interface LoginSuccessData {
  email: string;
  id: string;
}

export type LoginApiResponse = ApiResponse<{
  token: string;
  refreshToken: string;
  session: UserSession;
}>;

export type RefreshApiResponse = ApiResponse<{
  token: string;
}>;

export type UserSession = {
  userId?: string;
  email?: string;
};

export type DataLogin = {
  userId: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

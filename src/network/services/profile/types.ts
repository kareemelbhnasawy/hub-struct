export interface HeaderResponse {
  name: string;
  nickname: string;
  jobTitle: string;
  department: string;
  profileImage: string;
  banner: string;
  status: string;
}


export interface EditKunyaRequest {
  email: string;
  nickname: string;
}

export interface EditKunyaResponse {
  success: boolean;
}

export interface DeleteKunyaRequest {
  email: string;
}

export interface DeleteKunyaResponse {
  success: boolean;
}
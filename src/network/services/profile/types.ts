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

export type QualificationResponseObject = {
  id: string;
  qualificationName: string;
  issuingAuthority: string;
  startDate: string;
  endDate: string;
  status: string;
};

export interface getQualificationsRequest {
  userId: string;
}

export interface getQualificationsResponse {
  qualifications: QualificationResponseObject[];
}

export interface SkillResponse {
  id: number;
  name: string;
}

export interface SkillsListResponse {
  skills?: SkillResponse[];
}

export type SkillsListGETResponse = SkillResponse[] | null | undefined;

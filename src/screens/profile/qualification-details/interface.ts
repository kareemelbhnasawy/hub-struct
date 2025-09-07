export type QualificationDetailsScreenParams = {
  qualificationId?: string;
};

export type InfoItem = {
  key: string;
  label: string;
  value: string;
  type?: string;
  data?: QualificationDetailsResponse;
};

export interface QualificationDetailsResponse {
  qualificationInfo: QualificationInfo;
  studyDetails: StudyDetails;
  feesInfo: FeesInfo;
  notes: string;
  attachments: Attachment[];
}

export interface QualificationInfo {
  type: string;
  university: string;
  country: string;
  degree: string;
  fieldOfStudy: string;
  learningMethod: string;
  grantingAuthority: string;
}

export interface StudyDetails {
  startDate: string;
  endDate: string;
}

export interface FeesInfo {
  amount: string;
  currency: string;
  paymentStatus: string;
}

export interface Attachment {
  fileName: string;
  fileType: string;
  fileUrl: string;
}

export type QualificationDetailsListResponse = QualificationDetailsResponse[];
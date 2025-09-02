interface ProfileState {
  name: string;
  kunya: string;
  avatarUrl: string;
  bannerId: string;
  status: string;
  jobTitle: string;
  department: string;
  getFullName: () => { name: string; kunya: string };
  getName: () => string;
  getKunya: () => string;
  getAvatarUrl: () => string;
  getBannerId: () => string;
  getStatus: () => string;
  getJobTitle: () => string;
  getDepartment: () => string;
  setName: (name: string) => void;
  setKunya: (kunya: string) => void;
  setFullName: (name: string, kunya: string) => void;
  setAvatarUrl: (url: string) => void;
  setBannerId: (id: string) => void;
  setStatus: (status: string) => void;
  setJobTitle: (title: string) => void;
  setDepartment: (department: string) => void;

}
export default ProfileState;

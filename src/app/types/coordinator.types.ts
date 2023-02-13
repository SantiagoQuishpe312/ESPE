export interface CoordinatorAllocation {
  names: string;
  surnames: string;
  fullName: string;
  pidm: number;
  position: string;
  periodCode: string;
  startDate: Date;
  endDate: Date;
  campusCode: string;
  campus: string;
  idBanner: string;
  email: string;
  department: string;
}

export interface Coordinator {
  code: number;
  userTypeCode: number;
  campusCode: number;
  programCode: string;
  unit: string;
  position: string;
  names: string;
  surnames: string;
  initialDate: Date;
  endDate: Date;
  isActive: boolean;
  email: string;
  pidm: number;
  departmentCode: string;
  educationLevelCode: string;
}

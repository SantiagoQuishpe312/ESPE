import { Status } from 'src/app/types/status.types';

export interface EvaluationSubject {
  id: number;
  department: string;
  campus: string;
  nrc: string;
  subjectCode: string;
  subject: string;
  instructor: string;
  status: Status;
}

export interface AnalyticProgram {
  areaCode: string;
  area: string;
  courseCode: string;
  courseName: string;
  campus: string;
  elaboratedAt: Date;
  lastReviewedAt: Date;
}

export interface DetailAnalyticProgram extends AnalyticProgram {
  courseDescription: string;
  courseContribution: string;
  courseObjective: string;
  careerLearnResult: string;
  courseLearnResult: string;
}

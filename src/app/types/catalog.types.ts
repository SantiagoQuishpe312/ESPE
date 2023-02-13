export interface PeriodCatalog {
  code: string;
  description: string;
  startDate: Date;
  finishDate: Date;
}

export interface GroupedPeriodCatalog {
  year: string;
  periods: PeriodCatalog[];
}

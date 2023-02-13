import { TableColumn } from 'src/@vex/interfaces/table-column.interface';

export function trackByTableColumnProperty<T>(
  index: number,
  column: TableColumn<T>
): any {
  return column.property;
}

export function getVisibleColumns<T>(columns: TableColumn<T>[]): string[] {
  return columns
    .filter(column => column.visible)
    .map(column => column.property);
}

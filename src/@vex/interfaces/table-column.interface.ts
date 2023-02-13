export interface TableColumn<T> {
  label: string;
  property: string;
  type:
    | 'text'
    | 'image'
    | 'badge'
    | 'progress'
    | 'checkbox'
    | 'button'
    | 'index'
    | 'date'
    | 'datetime'
    | 'object';
  visible?: boolean;
  cssClasses?: string[];
}

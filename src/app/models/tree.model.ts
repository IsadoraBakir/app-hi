export interface Tree {
  id: string;
  name: string;
  children?: any;
  level?: number;
  selected?: boolean;
  opened?: boolean;
}

export interface IDish {
  id: number;
  name: string;
  table: string;
  quantity: number;
  orderedAt: number;
  comment?: string;
}

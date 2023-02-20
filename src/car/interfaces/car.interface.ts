import { Document } from 'mongoose';

export interface Icar extends Document {
  readonly id: number;
  readonly brand: string;
  readonly color: string;
  readonly model: string;
}

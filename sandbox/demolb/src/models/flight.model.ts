import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Flight extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  origin: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  number?: number;

  @property({
    type: 'string',
    required: true,
    default: 'LAX',
  })
  destination: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Flight>) {
    super(data);
  }
}

export interface FlightRelations {
  // describe navigational properties here
}

export type FlightWithRelations = Flight & FlightRelations;

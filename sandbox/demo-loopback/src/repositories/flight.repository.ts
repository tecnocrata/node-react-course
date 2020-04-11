import {DefaultCrudRepository} from '@loopback/repository';
import {Flight, FlightRelations} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FlightRepository extends DefaultCrudRepository<
  Flight,
  typeof Flight.prototype.number,
  FlightRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Flight, dataSource);
  }
}

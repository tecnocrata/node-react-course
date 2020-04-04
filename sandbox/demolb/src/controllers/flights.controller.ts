import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Flight} from '../models';
import {FlightRepository} from '../repositories';

export class FlightsController {
  constructor(
    @repository(FlightRepository)
    public flightRepository : FlightRepository,
  ) {}

  @post('/flights', {
    responses: {
      '200': {
        description: 'Flight model instance',
        content: {'application/json': {schema: getModelSchemaRef(Flight)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flight, {
            title: 'NewFlight',
            
          }),
        },
      },
    })
    flight: Flight,
  ): Promise<Flight> {
    return this.flightRepository.create(flight);
  }

  @get('/flights/count', {
    responses: {
      '200': {
        description: 'Flight model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Flight) where?: Where<Flight>,
  ): Promise<Count> {
    return this.flightRepository.count(where);
  }

  @get('/flights', {
    responses: {
      '200': {
        description: 'Array of Flight model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Flight, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Flight) filter?: Filter<Flight>,
  ): Promise<Flight[]> {
    return this.flightRepository.find(filter);
  }

  @patch('/flights', {
    responses: {
      '200': {
        description: 'Flight PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flight, {partial: true}),
        },
      },
    })
    flight: Flight,
    @param.where(Flight) where?: Where<Flight>,
  ): Promise<Count> {
    return this.flightRepository.updateAll(flight, where);
  }

  @get('/flights/{id}', {
    responses: {
      '200': {
        description: 'Flight model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Flight, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Flight, {exclude: 'where'}) filter?: FilterExcludingWhere<Flight>
  ): Promise<Flight> {
    return this.flightRepository.findById(id, filter);
  }

  @patch('/flights/{id}', {
    responses: {
      '204': {
        description: 'Flight PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flight, {partial: true}),
        },
      },
    })
    flight: Flight,
  ): Promise<void> {
    await this.flightRepository.updateById(id, flight);
  }

  @put('/flights/{id}', {
    responses: {
      '204': {
        description: 'Flight PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() flight: Flight,
  ): Promise<void> {
    await this.flightRepository.replaceById(id, flight);
  }

  @del('/flights/{id}', {
    responses: {
      '204': {
        description: 'Flight DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.flightRepository.deleteById(id);
  }
}

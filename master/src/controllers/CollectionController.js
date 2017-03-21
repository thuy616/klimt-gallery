import BaseController from './BaseController';
import CollectionSchema from '../schemas/CollectionSchema';
import _ from 'lodash';
import Joi from 'joi';
import db from '../../../db.json';
import Hoek from 'hoek';

export default class CollectionController extends BaseController {

  constructor({server}) {
    super({server: server});
  }

  setupRoutes() {
    super.setupRoutes({routePrefix: '/collections'});

    this.addRoute({
      method: 'GET',
      path: '',
      handler: (request, reply) => {
        this.getCollections(request, reply);
      },
      config: {
        description: 'Returns all collections',
        response: {
          schema: Joi.array().items(CollectionSchema.ReadList()).label('CollectionsList')
        }
      }
    });

    this.addRoute({
      method: 'GET',
      path: '/{slug}',
      handler: (request, reply) => {
        this.getCollection(request, reply);
      },
      config: {
        description: 'Return the collection details and all photos in this collection',
        response: {
          schema: CollectionSchema.Read()
        }
      }
    })
  }

  // Route Handlers

  getCollections(request, reply) {
    console.log("db", db.collections.length);
    let collections = _.map(db.collections, item => { return _.pick(item, ['slug', 'name', 'about', 'cover'])})
    reply(collections);
  }

  getCollection(request, reply) {
    // TODO:
  }
}

import BaseController from './BaseController';
import CollectionSchema from '../schemas/CollectionSchema';
import _ from 'lodash';
import Joi from 'joi';
import Hoek from 'hoek';

const collections = require('../../../db.json');
const naturePhotos = require('../../../nature-photos.json');
const citiesPhotos = require('../../../cities-photos.json');
const portraitsPhotos = require('../../../portraits-photos.json');
const artPhotos = require('../../../art-photos.json');
const designPhotos = require('../../../design-photos.json');

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
    let list = _.map(collections, item => { return _.pick(item, ['slug', 'name', 'about', 'cover', 'sort_order'])})
    const sortedList = _.orderBy(list, ['sort_order'], ['asc']);
    reply(sortedList);
  }

  getCollection(request, reply) {
    let collection = _.first(_.filter(collections, { slug: request.params.slug }));
    if (!collection) { reply({}) }
    switch (collection.slug) {
      case "nature":
        collection.photos = naturePhotos;
        break;
      case "cities":
        collection.photos = citiesPhotos;
        break;
      case "portraits":
        collection.photos = portraitsPhotos;
        break;
      case "art":
        collection.photos = artPhotos;
        break;
      case "design":
        collection.photos = designPhotos;
        break;
      default:
        collection.photos = naturePhotos;
        break;
    }
    reply(collection);
  }
}

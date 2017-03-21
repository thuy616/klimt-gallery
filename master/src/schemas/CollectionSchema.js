import Joi from 'joi';
import _ from 'lodash';
import PhotoSchema from './PhotoSchema';

const alphanumericHyphenRegex = /^[A-Za-z0-9\-\_]+$/

let getBaseSchema = () => {
  return {
    name: Joi.string().description("Name of the collection"),
    slug: Joi.string().regex(alphanumericHyphenRegex).max(255).allow(null).description('Slug for the collection'),
    about: Joi.string().max(255).description('Short description of the collection in markdown format'),
    cover: Joi.string().description("Cover photo in the collection list page"),
    hero: Joi.string().description("Hero photo in the collection detail page"),
    sort_order: Joi.number().integer().default(0).description("Sort order of the collections list"),
    photos: Joi.array().items(PhotoSchema.Read()).description("Photos in this collection")
  }
}

module.exports = {
  ReadList: () => {
    let schema = getBaseSchema();
    delete schema.photos;
    return Joi.object().keys(schema).label('CollectionList').requiredKeys('slug', 'name', 'about', 'cover', 'sort_order');
  },
  Read: () => {
    let schema = getBaseSchema();
    return Joi.object().keys(schema).label('Collection').requiredKeys('slug', 'name', 'about', 'cover', 'hero', 'photos');
  }
}

import Joi from 'joi';

let getBaseSchema = () => {
  return {
    id: Joi.string().guid(),
    slug: Joi.string().description("URL slug of the photo"),
    original: Joi.string().description("URL for the original photo with full resolution"),
    thumbnail: Joi.string().description("URL for the thumbnail photo"),
    title: Joi.string().description("Title of the photo"),
    about: Joi.string().description("Short description of the photo"),
    height: Joi.number().integer().description("Height of the thumbnail in px"),
    width: Joi.number().integer().description("Width of the thumbnail in px")
  }
}

module.exports = {
  Read: () => {
    let schema = getBaseSchema();
    return Joi.object().keys(schema).label('Photo').requiredKeys('original', 'thumbnail', 'slug');
  }
}

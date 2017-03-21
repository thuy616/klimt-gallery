export default class BaseController {

  constructor({server}) {
    this.routeVersion = '/api';
    this.server = server;
    this.routes = [];
    this.setupRoutes();
    this.responseSampleRate = (process.env.NODE_ENV === 'test') ? 100 : 0;
  }

  setupRoutes({routePrefix = ''}) {
    this.routePrefix = routePrefix;
  }

  addRoute(routeOptions) {
    routeOptions.path = this.routeVersion + this.routePrefix + routeOptions.path;
    if (routeOptions.config && routeOptions.config.response) {
      routeOptions.config.response.sample = this.responseSampleRate;
    }
    this.routes.push(routeOptions);
    this.server.route(routeOptions);
  }

}

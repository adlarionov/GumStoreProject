'use strict';

/**
 * gum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gum.gum');

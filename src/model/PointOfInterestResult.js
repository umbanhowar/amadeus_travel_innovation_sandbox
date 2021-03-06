/**
 * Amadeus Travel Innovation Sandbox
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Geolocation', 'model/ImageSize', 'model/PointOfInterestDetails', 'model/PointOfInterestResultGrades'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Geolocation'), require('./ImageSize'), require('./PointOfInterestDetails'), require('./PointOfInterestResultGrades'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.PointOfInterestResult = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Geolocation, root.AmadeusTravelInnovationSandbox.ImageSize, root.AmadeusTravelInnovationSandbox.PointOfInterestDetails, root.AmadeusTravelInnovationSandbox.PointOfInterestResultGrades);
  }
}(this, function(ApiClient, Geolocation, ImageSize, PointOfInterestDetails, PointOfInterestResultGrades) {
  'use strict';




  /**
   * The PointOfInterestResult model module.
   * @module model/PointOfInterestResult
   * @version 1.2
   */

  /**
   * Constructs a new <code>PointOfInterestResult</code>.
   * @alias module:model/PointOfInterestResult
   * @class
   * @param title {String} Display name of a given point of interest
   * @param mainImage {String} A link to an image of the given location
   * @param location {module:model/Geolocation} 
   * @param categories {Array.<String>} Array of descriptions indicating what type of point of interest this is. You can filter the results to include only certain categories of point of interest using the category input parameter.
   */
  var exports = function(title, mainImage, location, categories) {
    var _this = this;

    _this['title'] = title;
    _this['main_image'] = mainImage;
    _this['location'] = location;

    _this['categories'] = categories;




  };

  /**
   * Constructs a <code>PointOfInterestResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PointOfInterestResult} obj Optional instance to populate.
   * @return {module:model/PointOfInterestResult} The populated <code>PointOfInterestResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('main_image')) {
        obj['main_image'] = ApiClient.convertToType(data['main_image'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Geolocation.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('grades')) {
        obj['grades'] = PointOfInterestResultGrades.constructFromObject(data['grades']);
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = PointOfInterestDetails.constructFromObject(data['details']);
      }
      if (data.hasOwnProperty('contextual_images')) {
        obj['contextual_images'] = ApiClient.convertToType(data['contextual_images'], [ImageSize]);
      }
      if (data.hasOwnProperty('geoname_id')) {
        obj['geoname_id'] = ApiClient.convertToType(data['geoname_id'], 'Integer');
      }
      if (data.hasOwnProperty('walk_time')) {
        obj['walk_time'] = ApiClient.convertToType(data['walk_time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Display name of a given point of interest
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A link to an image of the given location
   * @member {String} main_image
   */
  exports.prototype['main_image'] = undefined;
  /**
   * @member {module:model/Geolocation} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/PointOfInterestResultGrades} grades
   */
  exports.prototype['grades'] = undefined;
  /**
   * Array of descriptions indicating what type of point of interest this is. You can filter the results to include only certain categories of point of interest using the category input parameter.
   * @member {Array.<String>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {module:model/PointOfInterestDetails} details
   */
  exports.prototype['details'] = undefined;
  /**
   * Images taken at this point of interest. Note that these images might have nothing to do with the point itself, particularly if you have enabled the social_media parameter
   * @member {Array.<module:model/ImageSize>} contextual_images
   */
  exports.prototype['contextual_images'] = undefined;
  /**
   * The GeonamesID of this point of interest, if available
   * @member {Integer} geoname_id
   */
  exports.prototype['geoname_id'] = undefined;
  /**
   * Time in minutes that it takes to walk from the searched coordinates to this Point of Interest
   * @member {Number} walk_time
   */
  exports.prototype['walk_time'] = undefined;



  return exports;
}));



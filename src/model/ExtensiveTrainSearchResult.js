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
    define(['ApiClient', 'model/Station', 'model/TrainSearchItinerary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Station'), require('./TrainSearchItinerary'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.ExtensiveTrainSearchResult = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Station, root.AmadeusTravelInnovationSandbox.TrainSearchItinerary);
  }
}(this, function(ApiClient, Station, TrainSearchItinerary) {
  'use strict';




  /**
   * The ExtensiveTrainSearchResult model module.
   * @module model/ExtensiveTrainSearchResult
   * @version 1.2
   */

  /**
   * Constructs a new <code>ExtensiveTrainSearchResult</code>.
   * @alias module:model/ExtensiveTrainSearchResult
   * @class
   * @param origin {module:model/Station} Station object with details about the origin station for this search.
   * @param destination {module:model/Station} Station object with details about the destination station for this search.
   * @param itineraries {Array.<module:model/TrainSearchItinerary>} Routes from the origin to the destination.
   */
  var exports = function(origin, destination, itineraries) {
    var _this = this;

    _this['origin'] = origin;
    _this['destination'] = destination;
    _this['itineraries'] = itineraries;
  };

  /**
   * Constructs a <code>ExtensiveTrainSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtensiveTrainSearchResult} obj Optional instance to populate.
   * @return {module:model/ExtensiveTrainSearchResult} The populated <code>ExtensiveTrainSearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('origin')) {
        obj['origin'] = Station.constructFromObject(data['origin']);
      }
      if (data.hasOwnProperty('destination')) {
        obj['destination'] = Station.constructFromObject(data['destination']);
      }
      if (data.hasOwnProperty('itineraries')) {
        obj['itineraries'] = ApiClient.convertToType(data['itineraries'], [TrainSearchItinerary]);
      }
    }
    return obj;
  }

  /**
   * Station object with details about the origin station for this search.
   * @member {module:model/Station} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * Station object with details about the destination station for this search.
   * @member {module:model/Station} destination
   */
  exports.prototype['destination'] = undefined;
  /**
   * Routes from the origin to the destination.
   * @member {Array.<module:model/TrainSearchItinerary>} itineraries
   */
  exports.prototype['itineraries'] = undefined;



  return exports;
}));



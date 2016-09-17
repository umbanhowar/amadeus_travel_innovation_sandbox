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
    define(['ApiClient', 'model/FlightReservationSegment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FlightReservationSegment'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.FlightReservationBound = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.FlightReservationSegment);
  }
}(this, function(ApiClient, FlightReservationSegment) {
  'use strict';




  /**
   * The FlightReservationBound model module.
   * @module model/FlightReservationBound
   * @version 1.2
   */

  /**
   * Constructs a new <code>FlightReservationBound</code>.
   * @alias module:model/FlightReservationBound
   * @class
   * @param flights {Array.<module:model/FlightReservationSegment>} The individual flights that make up this itinerary. These flights are presented in the order required to fly from the origin to the destination, and the array of flights represents a connection.
   */
  var exports = function(flights) {
    var _this = this;

    _this['flights'] = flights;
  };

  /**
   * Constructs a <code>FlightReservationBound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlightReservationBound} obj Optional instance to populate.
   * @return {module:model/FlightReservationBound} The populated <code>FlightReservationBound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flights')) {
        obj['flights'] = ApiClient.convertToType(data['flights'], [FlightReservationSegment]);
      }
    }
    return obj;
  }

  /**
   * The individual flights that make up this itinerary. These flights are presented in the order required to fly from the origin to the destination, and the array of flights represents a connection.
   * @member {Array.<module:model/FlightReservationSegment>} flights
   */
  exports.prototype['flights'] = undefined;



  return exports;
}));


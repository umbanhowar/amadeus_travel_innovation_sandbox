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
    define(['ApiClient', 'model/Amount', 'model/FlightReservationBound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./FlightReservationBound'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.FlightTicket = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Amount, root.AmadeusTravelInnovationSandbox.FlightReservationBound);
  }
}(this, function(ApiClient, Amount, FlightReservationBound) {
  'use strict';




  /**
   * The FlightTicket model module.
   * @module model/FlightTicket
   * @version 1.2
   */

  /**
   * Constructs a new <code>FlightTicket</code>.
   * The flight itineraries with a ticket or transitional stored ticket (TST) in this reservation, and their prices.
   * @alias module:model/FlightTicket
   * @class
   * @param id {String} Uniquely identifies this ticket in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @param price {module:model/Amount} The cost of this ticket.
   * @param travelerIds {Array.<String>} Traveler identifiers to indicate the travelers to whom this ticket applies.
   * @param flightBounds {Array.<module:model/FlightReservationBound>} The flight itinerary for this ticket.
   */
  var exports = function(id, price, travelerIds, flightBounds) {
    var _this = this;

    _this['id'] = id;
    _this['price'] = price;
    _this['traveler_ids'] = travelerIds;
    _this['flight_bounds'] = flightBounds;
  };

  /**
   * Constructs a <code>FlightTicket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlightTicket} obj Optional instance to populate.
   * @return {module:model/FlightTicket} The populated <code>FlightTicket</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('traveler_ids')) {
        obj['traveler_ids'] = ApiClient.convertToType(data['traveler_ids'], ['String']);
      }
      if (data.hasOwnProperty('flight_bounds')) {
        obj['flight_bounds'] = ApiClient.convertToType(data['flight_bounds'], [FlightReservationBound]);
      }
    }
    return obj;
  }

  /**
   * Uniquely identifies this ticket in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The cost of this ticket.
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Traveler identifiers to indicate the travelers to whom this ticket applies.
   * @member {Array.<String>} traveler_ids
   */
  exports.prototype['traveler_ids'] = undefined;
  /**
   * The flight itinerary for this ticket.
   * @member {Array.<module:model/FlightReservationBound>} flight_bounds
   */
  exports.prototype['flight_bounds'] = undefined;



  return exports;
}));



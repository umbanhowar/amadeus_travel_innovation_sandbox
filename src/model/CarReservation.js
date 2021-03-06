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
    define(['ApiClient', 'model/CarReservationBookingInfo', 'model/Company', 'model/Vehicle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CarReservationBookingInfo'), require('./Company'), require('./Vehicle'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.CarReservation = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.CarReservationBookingInfo, root.AmadeusTravelInnovationSandbox.Company, root.AmadeusTravelInnovationSandbox.Vehicle);
  }
}(this, function(ApiClient, CarReservationBookingInfo, Company, Vehicle) {
  'use strict';




  /**
   * The CarReservation model module.
   * @module model/CarReservation
   * @version 1.2
   */

  /**
   * Constructs a new <code>CarReservation</code>.
   * @alias module:model/CarReservation
   * @class
   * @param id {String} Uniquely identifies this car rental reservation in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @param pickUp {String} Date on which the car rental will be collected from the car rental location. <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date format yyyy-MM-ddTHH.
   * @param dropOff {String} Date at which the car rental will end and the car will be returned to the rental location. <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date format yyyy-MM-ddTHH.
   * @param provider {module:model/Company} Details of the car company offering this rental.
   * @param origin {String} This car rental company office location ID. If this is an airport location, this will be the airport's <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a>. Otherwise, this is a custom value provided by the car rental provider.
   * @param car {module:model/Vehicle} A car information object giving further details about the vehicle provided for rental.
   */
  var exports = function(id, pickUp, dropOff, provider, origin, car) {
    var _this = this;

    _this['id'] = id;
    _this['pick_up'] = pickUp;
    _this['drop_off'] = dropOff;
    _this['provider'] = provider;
    _this['origin'] = origin;
    _this['car'] = car;


  };

  /**
   * Constructs a <code>CarReservation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarReservation} obj Optional instance to populate.
   * @return {module:model/CarReservation} The populated <code>CarReservation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('pick_up')) {
        obj['pick_up'] = ApiClient.convertToType(data['pick_up'], 'String');
      }
      if (data.hasOwnProperty('drop_off')) {
        obj['drop_off'] = ApiClient.convertToType(data['drop_off'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = Company.constructFromObject(data['provider']);
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
      if (data.hasOwnProperty('car')) {
        obj['car'] = Vehicle.constructFromObject(data['car']);
      }
      if (data.hasOwnProperty('traveler_ids')) {
        obj['traveler_ids'] = ApiClient.convertToType(data['traveler_ids'], ['String']);
      }
      if (data.hasOwnProperty('booking_info')) {
        obj['booking_info'] = CarReservationBookingInfo.constructFromObject(data['booking_info']);
      }
    }
    return obj;
  }

  /**
   * Uniquely identifies this car rental reservation in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date on which the car rental will be collected from the car rental location. <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date format yyyy-MM-ddTHH.
   * @member {String} pick_up
   */
  exports.prototype['pick_up'] = undefined;
  /**
   * Date at which the car rental will end and the car will be returned to the rental location. <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date format yyyy-MM-ddTHH.
   * @member {String} drop_off
   */
  exports.prototype['drop_off'] = undefined;
  /**
   * Details of the car company offering this rental.
   * @member {module:model/Company} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * This car rental company office location ID. If this is an airport location, this will be the airport's <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a>. Otherwise, this is a custom value provided by the car rental provider.
   * @member {String} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * A car information object giving further details about the vehicle provided for rental.
   * @member {module:model/Vehicle} car
   */
  exports.prototype['car'] = undefined;
  /**
   * Traveler identifiers to indicate the travelers to whom this car rental applies. Generally, only drivers of the vehicle will be marked in this array.
   * @member {Array.<String>} traveler_ids
   */
  exports.prototype['traveler_ids'] = undefined;
  /**
   * Additional details the status of this car rental reservation.
   * @member {module:model/CarReservationBookingInfo} booking_info
   */
  exports.prototype['booking_info'] = undefined;



  return exports;
}));



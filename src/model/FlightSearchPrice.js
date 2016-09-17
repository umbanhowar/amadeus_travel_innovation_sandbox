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
    define(['ApiClient', 'model/Fare', 'model/FareRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Fare'), require('./FareRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.FlightSearchPrice = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Fare, root.AmadeusTravelInnovationSandbox.FareRestrictions);
  }
}(this, function(ApiClient, Fare, FareRestrictions) {
  'use strict';




  /**
   * The FlightSearchPrice model module.
   * @module model/FlightSearchPrice
   * @version 1.2
   */

  /**
   * Constructs a new <code>FlightSearchPrice</code>.
   * @alias module:model/FlightSearchPrice
   * @class
   * @param totalPrice {String} The total price for all the requested passengers for this flight
   * @param pricePerAdult {module:model/Fare} The per-passenger fare for each adult on this flight
   * @param restrictions {module:model/FareRestrictions} The restrictions associated with this fare
   */
  var exports = function(totalPrice, pricePerAdult, restrictions) {
    var _this = this;

    _this['total_price'] = totalPrice;
    _this['price_per_adult'] = pricePerAdult;


    _this['restrictions'] = restrictions;
  };

  /**
   * Constructs a <code>FlightSearchPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlightSearchPrice} obj Optional instance to populate.
   * @return {module:model/FlightSearchPrice} The populated <code>FlightSearchPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total_price')) {
        obj['total_price'] = ApiClient.convertToType(data['total_price'], 'String');
      }
      if (data.hasOwnProperty('price_per_adult')) {
        obj['price_per_adult'] = Fare.constructFromObject(data['price_per_adult']);
      }
      if (data.hasOwnProperty('price_per_child')) {
        obj['price_per_child'] = Fare.constructFromObject(data['price_per_child']);
      }
      if (data.hasOwnProperty('price_per_infant')) {
        obj['price_per_infant'] = Fare.constructFromObject(data['price_per_infant']);
      }
      if (data.hasOwnProperty('restrictions')) {
        obj['restrictions'] = FareRestrictions.constructFromObject(data['restrictions']);
      }
    }
    return obj;
  }

  /**
   * The total price for all the requested passengers for this flight
   * @member {String} total_price
   */
  exports.prototype['total_price'] = undefined;
  /**
   * The per-passenger fare for each adult on this flight
   * @member {module:model/Fare} price_per_adult
   */
  exports.prototype['price_per_adult'] = undefined;
  /**
   * The per-passenger fare for each child on this flight
   * @member {module:model/Fare} price_per_child
   */
  exports.prototype['price_per_child'] = undefined;
  /**
   * The per-passenger fare for each infant on this flight
   * @member {module:model/Fare} price_per_infant
   */
  exports.prototype['price_per_infant'] = undefined;
  /**
   * The restrictions associated with this fare
   * @member {module:model/FareRestrictions} restrictions
   */
  exports.prototype['restrictions'] = undefined;



  return exports;
}));



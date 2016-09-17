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
    define(['ApiClient', 'model/AffiliateFlightSearchPrice', 'model/AffiliatePayout', 'model/FlightSearchBound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AffiliateFlightSearchPrice'), require('./AffiliatePayout'), require('./FlightSearchBound'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.AffiliateSearchResult = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.AffiliateFlightSearchPrice, root.AmadeusTravelInnovationSandbox.AffiliatePayout, root.AmadeusTravelInnovationSandbox.FlightSearchBound);
  }
}(this, function(ApiClient, AffiliateFlightSearchPrice, AffiliatePayout, FlightSearchBound) {
  'use strict';




  /**
   * The AffiliateSearchResult model module.
   * @module model/AffiliateSearchResult
   * @version 1.2
   */

  /**
   * Constructs a new <code>AffiliateSearchResult</code>.
   * @alias module:model/AffiliateSearchResult
   * @class
   * @param outbound {module:model/FlightSearchBound} The flight from the origin to the destination
   * @param fare {module:model/AffiliateFlightSearchPrice} The price and fare information which applies to all itineraries in this response
   * @param payout {module:model/AffiliatePayout} Details of the amount of payout that the affiliate will received per click or if this flight is sold
   * @param airline {String} The 2 character alphanumeric <a href=\"https://en.wikipedia.org/wiki/Airline_codes\">IATA airline code</a> of the airline that is selling this result
   * @param deepLink {String} A link to the page from which this result can be purchased from the affiliate
   */
  var exports = function(outbound, fare, payout, airline, deepLink) {
    var _this = this;

    _this['outbound'] = outbound;

    _this['fare'] = fare;
    _this['payout'] = payout;
    _this['airline'] = airline;
    _this['deep_link'] = deepLink;
  };

  /**
   * Constructs a <code>AffiliateSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AffiliateSearchResult} obj Optional instance to populate.
   * @return {module:model/AffiliateSearchResult} The populated <code>AffiliateSearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('outbound')) {
        obj['outbound'] = FlightSearchBound.constructFromObject(data['outbound']);
      }
      if (data.hasOwnProperty('inbound')) {
        obj['inbound'] = FlightSearchBound.constructFromObject(data['inbound']);
      }
      if (data.hasOwnProperty('fare')) {
        obj['fare'] = AffiliateFlightSearchPrice.constructFromObject(data['fare']);
      }
      if (data.hasOwnProperty('payout')) {
        obj['payout'] = AffiliatePayout.constructFromObject(data['payout']);
      }
      if (data.hasOwnProperty('airline')) {
        obj['airline'] = ApiClient.convertToType(data['airline'], 'String');
      }
      if (data.hasOwnProperty('deep_link')) {
        obj['deep_link'] = ApiClient.convertToType(data['deep_link'], 'String');
      }
    }
    return obj;
  }

  /**
   * The flight from the origin to the destination
   * @member {module:model/FlightSearchBound} outbound
   */
  exports.prototype['outbound'] = undefined;
  /**
   * The return flight from the destination to the origin
   * @member {module:model/FlightSearchBound} inbound
   */
  exports.prototype['inbound'] = undefined;
  /**
   * The price and fare information which applies to all itineraries in this response
   * @member {module:model/AffiliateFlightSearchPrice} fare
   */
  exports.prototype['fare'] = undefined;
  /**
   * Details of the amount of payout that the affiliate will received per click or if this flight is sold
   * @member {module:model/AffiliatePayout} payout
   */
  exports.prototype['payout'] = undefined;
  /**
   * The 2 character alphanumeric <a href=\"https://en.wikipedia.org/wiki/Airline_codes\">IATA airline code</a> of the airline that is selling this result
   * @member {String} airline
   */
  exports.prototype['airline'] = undefined;
  /**
   * A link to the page from which this result can be purchased from the affiliate
   * @member {String} deep_link
   */
  exports.prototype['deep_link'] = undefined;



  return exports;
}));



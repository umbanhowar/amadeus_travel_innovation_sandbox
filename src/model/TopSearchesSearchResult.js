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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.TopSearchesSearchResult = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopSearchesSearchResult model module.
   * @module model/TopSearchesSearchResult
   * @version 1.2
   */

  /**
   * Constructs a new <code>TopSearchesSearchResult</code>.
   * @alias module:model/TopSearchesSearchResult
   * @class
   * @param destination {String} The <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
   * @param searches {Integer} Average number of daily searches for the destination during the search period provided
   * @param searchesPriorYear {Integer} Prior year average number of daily searches for the destination during the search period provided
   */
  var exports = function(destination, searches, searchesPriorYear) {
    var _this = this;

    _this['destination'] = destination;
    _this['searches'] = searches;
    _this['searches_prior_year'] = searchesPriorYear;
  };

  /**
   * Constructs a <code>TopSearchesSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopSearchesSearchResult} obj Optional instance to populate.
   * @return {module:model/TopSearchesSearchResult} The populated <code>TopSearchesSearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('destination')) {
        obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
      }
      if (data.hasOwnProperty('searches')) {
        obj['searches'] = ApiClient.convertToType(data['searches'], 'Integer');
      }
      if (data.hasOwnProperty('searches_prior_year')) {
        obj['searches_prior_year'] = ApiClient.convertToType(data['searches_prior_year'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
   * @member {String} destination
   */
  exports.prototype['destination'] = undefined;
  /**
   * Average number of daily searches for the destination during the search period provided
   * @member {Integer} searches
   */
  exports.prototype['searches'] = undefined;
  /**
   * Prior year average number of daily searches for the destination during the search period provided
   * @member {Integer} searches_prior_year
   */
  exports.prototype['searches_prior_year'] = undefined;



  return exports;
}));


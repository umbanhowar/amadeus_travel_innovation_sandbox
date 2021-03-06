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
    define(['ApiClient', 'model/Geolocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Geolocation'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.AirportInformation = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Geolocation);
  }
}(this, function(ApiClient, Geolocation) {
  'use strict';




  /**
   * The AirportInformation model module.
   * @module model/AirportInformation
   * @version 1.2
   */

  /**
   * Constructs a new <code>AirportInformation</code>.
   * @alias module:model/AirportInformation
   * @class
   * @param code {String} The 3 letter IATA airport code of this given airport. You can use this as an input parameter for a low-fare flight search, to get more specific results than the city code, but inspiration search works best using the city code.
   * @param name {String} The name of this airport, in UTF-8 format
   * @param cityCode {String} The three letter <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a> of the city of the city in which this airport is located.
   * @param cityName {String} The English name of the city in which this airport is located
   * @param country {String} The <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2\">ISO 3166-1 alpha-2 country code</a> in which this city can be found.
   * @param location {module:model/Geolocation}   An object containing the longitude and latitude of the given airport.
   * @param timezone {String} The <a href=\"http://en.wikipedia.org/wiki/List_of_tz_database_time_zones\">Olson format</a> name of the timezone in which this airport is located
   */
  var exports = function(code, name, cityCode, cityName, country, location, timezone) {
    var _this = this;

    _this['code'] = code;
    _this['name'] = name;
    _this['city_code'] = cityCode;
    _this['city_name'] = cityName;

    _this['country'] = country;
    _this['location'] = location;

    _this['timezone'] = timezone;
  };

  /**
   * Constructs a <code>AirportInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AirportInformation} obj Optional instance to populate.
   * @return {module:model/AirportInformation} The populated <code>AirportInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('city_code')) {
        obj['city_code'] = ApiClient.convertToType(data['city_code'], 'String');
      }
      if (data.hasOwnProperty('city_name')) {
        obj['city_name'] = ApiClient.convertToType(data['city_name'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Geolocation.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('aircraft_movements')) {
        obj['aircraft_movements'] = ApiClient.convertToType(data['aircraft_movements'], 'Integer');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * The 3 letter IATA airport code of this given airport. You can use this as an input parameter for a low-fare flight search, to get more specific results than the city code, but inspiration search works best using the city code.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The name of this airport, in UTF-8 format
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The three letter <a href=\"https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code\">IATA code</a> of the city of the city in which this airport is located.
   * @member {String} city_code
   */
  exports.prototype['city_code'] = undefined;
  /**
   * The English name of the city in which this airport is located
   * @member {String} city_name
   */
  exports.prototype['city_name'] = undefined;
  /**
   * The state code of this city, if applicable
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2\">ISO 3166-1 alpha-2 country code</a> in which this city can be found.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   *   An object containing the longitude and latitude of the given airport.
   * @member {module:model/Geolocation} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The annual number of aircraft movements at that airport.
   * @member {Integer} aircraft_movements
   */
  exports.prototype['aircraft_movements'] = undefined;
  /**
   * The <a href=\"http://en.wikipedia.org/wiki/List_of_tz_database_time_zones\">Olson format</a> name of the timezone in which this airport is located
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));



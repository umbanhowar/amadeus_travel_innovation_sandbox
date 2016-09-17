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
    define(['ApiClient', 'model/Airport', 'model/Station', 'model/TrainSearchPricing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Airport'), require('./Station'), require('./TrainSearchPricing'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.TrainSearchSegment = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Airport, root.AmadeusTravelInnovationSandbox.Station, root.AmadeusTravelInnovationSandbox.TrainSearchPricing);
  }
}(this, function(ApiClient, Airport, Station, TrainSearchPricing) {
  'use strict';




  /**
   * The TrainSearchSegment model module.
   * @module model/TrainSearchSegment
   * @version 1.2
   */

  /**
   * Constructs a new <code>TrainSearchSegment</code>.
   * @alias module:model/TrainSearchSegment
   * @class
   * @param departsAt {String} The <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date-time of the train's departure in the local time zone of the departure station, in the format YYYY-MM-DDTHH:mm.
   * @param arrivesAt {String} The <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date-time of the train's arrival in the local time zone of the arrival station, in the format YYYY-MM-DDTHH:mm.
   * @param departureStation {module:model/Station} The station object representing the station at which the passenger should board this train in order to complete this part of the itinerary.
   * @param arrivalStation {module:model/Airport} The station object representing the station at which the passenger should disembark this train in order to complete this part of the itinerary.
   * @param marketingCompany {String} The name of the train company selling this train journey. This is the name you should see printed on your ticket.
   * @param operatingCompany {String} The name of the train company operating this train journey. This is the name you should see written on the train.
   * @param trainNumber {String} The identifying number of this train service. Usually the marketing company will only operate on train per day with this train number.
   * @param prices {Array.<module:model/TrainSearchPricing>} Possible pricing for this train journey.
   */
  var exports = function(departsAt, arrivesAt, departureStation, arrivalStation, marketingCompany, operatingCompany, trainNumber, prices) {
    var _this = this;

    _this['departs_at'] = departsAt;
    _this['arrives_at'] = arrivesAt;
    _this['departure_station'] = departureStation;
    _this['arrival_station'] = arrivalStation;
    _this['marketing_company'] = marketingCompany;
    _this['operating_company'] = operatingCompany;
    _this['train_number'] = trainNumber;

    _this['prices'] = prices;
  };

  /**
   * Constructs a <code>TrainSearchSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrainSearchSegment} obj Optional instance to populate.
   * @return {module:model/TrainSearchSegment} The populated <code>TrainSearchSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('departs_at')) {
        obj['departs_at'] = ApiClient.convertToType(data['departs_at'], 'String');
      }
      if (data.hasOwnProperty('arrives_at')) {
        obj['arrives_at'] = ApiClient.convertToType(data['arrives_at'], 'String');
      }
      if (data.hasOwnProperty('departure_station')) {
        obj['departure_station'] = Station.constructFromObject(data['departure_station']);
      }
      if (data.hasOwnProperty('arrival_station')) {
        obj['arrival_station'] = Airport.constructFromObject(data['arrival_station']);
      }
      if (data.hasOwnProperty('marketing_company')) {
        obj['marketing_company'] = ApiClient.convertToType(data['marketing_company'], 'String');
      }
      if (data.hasOwnProperty('operating_company')) {
        obj['operating_company'] = ApiClient.convertToType(data['operating_company'], 'String');
      }
      if (data.hasOwnProperty('train_number')) {
        obj['train_number'] = ApiClient.convertToType(data['train_number'], 'String');
      }
      if (data.hasOwnProperty('train_type')) {
        obj['train_type'] = ApiClient.convertToType(data['train_type'], 'String');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [TrainSearchPricing]);
      }
    }
    return obj;
  }

  /**
   * The <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date-time of the train's departure in the local time zone of the departure station, in the format YYYY-MM-DDTHH:mm.
   * @member {String} departs_at
   */
  exports.prototype['departs_at'] = undefined;
  /**
   * The <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date-time of the train's arrival in the local time zone of the arrival station, in the format YYYY-MM-DDTHH:mm.
   * @member {String} arrives_at
   */
  exports.prototype['arrives_at'] = undefined;
  /**
   * The station object representing the station at which the passenger should board this train in order to complete this part of the itinerary.
   * @member {module:model/Station} departure_station
   */
  exports.prototype['departure_station'] = undefined;
  /**
   * The station object representing the station at which the passenger should disembark this train in order to complete this part of the itinerary.
   * @member {module:model/Airport} arrival_station
   */
  exports.prototype['arrival_station'] = undefined;
  /**
   * The name of the train company selling this train journey. This is the name you should see printed on your ticket.
   * @member {String} marketing_company
   */
  exports.prototype['marketing_company'] = undefined;
  /**
   * The name of the train company operating this train journey. This is the name you should see written on the train.
   * @member {String} operating_company
   */
  exports.prototype['operating_company'] = undefined;
  /**
   * The identifying number of this train service. Usually the marketing company will only operate on train per day with this train number.
   * @member {String} train_number
   */
  exports.prototype['train_number'] = undefined;
  /**
   * The type of train that you may expect for this journey. For example&colon; InterCity, Regional...
   * @member {String} train_type
   */
  exports.prototype['train_type'] = undefined;
  /**
   * Possible pricing for this train journey.
   * @member {Array.<module:model/TrainSearchPricing>} prices
   */
  exports.prototype['prices'] = undefined;



  return exports;
}));



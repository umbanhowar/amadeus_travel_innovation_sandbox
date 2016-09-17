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
    root.AmadeusTravelInnovationSandbox.OtherReservationBookingInfo = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OtherReservationBookingInfo model module.
   * @module model/OtherReservationBookingInfo
   * @version 1.2
   */

  /**
   * Constructs a new <code>OtherReservationBookingInfo</code>.
   * @alias module:model/OtherReservationBookingInfo
   * @class
   * @param status {String} An enumeration to represent the reservation status for this hotel reservation. For example&colon; CONFIRMED, CANCELLED, REQUESTED, REJECTED, PENDING_CANCELLATION, PENDING_CONFIRMATION.
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>OtherReservationBookingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OtherReservationBookingInfo} obj Optional instance to populate.
   * @return {module:model/OtherReservationBookingInfo} The populated <code>OtherReservationBookingInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * An enumeration to represent the reservation status for this hotel reservation. For example&colon; CONFIRMED, CANCELLED, REQUESTED, REJECTED, PENDING_CANCELLATION, PENDING_CONFIRMATION.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));



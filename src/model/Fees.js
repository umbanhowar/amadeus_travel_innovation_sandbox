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
    root.AmadeusTravelInnovationSandbox.Fees = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Fees model module.
   * @module model/Fees
   * @version 1.2
   */

  /**
   * Constructs a new <code>Fees</code>.
   * @alias module:model/Fees
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Fees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fees} obj Optional instance to populate.
   * @return {module:model/Fees} The populated <code>Fees</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('service_fees')) {
        obj['service_fees'] = ApiClient.convertToType(data['service_fees'], 'String');
      }
      if (data.hasOwnProperty('creditcard_fees')) {
        obj['creditcard_fees'] = ApiClient.convertToType(data['creditcard_fees'], 'String');
      }
    }
    return obj;
  }

  /**
   * The cost of any required service fees in addition to the total price
   * @member {String} service_fees
   */
  exports.prototype['service_fees'] = undefined;
  /**
   * The cost of any fees for common credit cards, such as Visa or Mastercard, in addition to the total price
   * @member {String} creditcard_fees
   */
  exports.prototype['creditcard_fees'] = undefined;



  return exports;
}));



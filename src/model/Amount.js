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
    root.AmadeusTravelInnovationSandbox.Amount = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Amount model module.
   * @module model/Amount
   * @version 1.2
   */

  /**
   * Constructs a new <code>Amount</code>.
   * A monetary amount with a price and a currency
   * @alias module:model/Amount
   * @class
   * @param currency {String} <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217</a> currency code.
   * @param amount {String} Total amount in the given currency, formatted appropriately. For example&colon; 194.99
   */
  var exports = function(currency, amount) {
    var _this = this;

    _this['currency'] = currency;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Amount} obj Optional instance to populate.
   * @return {module:model/Amount} The populated <code>Amount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
    }
    return obj;
  }

  /**
   * <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217</a> currency code.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Total amount in the given currency, formatted appropriately. For example&colon; 194.99
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


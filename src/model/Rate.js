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
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.Rate = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';




  /**
   * The Rate model module.
   * @module model/Rate
   * @version 1.2
   */

  /**
   * Constructs a new <code>Rate</code>.
   * @alias module:model/Rate
   * @class
   * @param type {String} The type or applicability period of rate being applied. For example&colon; DAILY, WEEKLY, WEEKEND.
   * @param price {module:model/Amount} The long name of the provider corresponding to the above code.
   */
  var exports = function(type, price) {
    var _this = this;

    _this['type'] = type;
    _this['price'] = price;
  };

  /**
   * Constructs a <code>Rate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rate} obj Optional instance to populate.
   * @return {module:model/Rate} The populated <code>Rate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
    }
    return obj;
  }

  /**
   * The type or applicability period of rate being applied. For example&colon; DAILY, WEEKLY, WEEKEND.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The long name of the provider corresponding to the above code.
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


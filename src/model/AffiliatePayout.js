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
    root.AmadeusTravelInnovationSandbox.AffiliatePayout = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';




  /**
   * The AffiliatePayout model module.
   * @module model/AffiliatePayout
   * @version 1.2
   */

  /**
   * Constructs a new <code>AffiliatePayout</code>.
   * @alias module:model/AffiliatePayout
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AffiliatePayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AffiliatePayout} obj Optional instance to populate.
   * @return {module:model/AffiliatePayout} The populated <code>AffiliatePayout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CPC')) {
        obj['CPC'] = Amount.constructFromObject(data['CPC']);
      }
      if (data.hasOwnProperty('CPA')) {
        obj['CPA'] = Amount.constructFromObject(data['CPA']);
      }
      if (data.hasOwnProperty('CPS')) {
        obj['CPS'] = Amount.constructFromObject(data['CPS']);
      }
    }
    return obj;
  }

  /**
   * See https://en.wikipedia.org/wiki/Pay_per_click for commission earned when the provided deep link is clicked
   * @member {module:model/Amount} CPC
   */
  exports.prototype['CPC'] = undefined;
  /**
   * See https://en.wikipedia.org/wiki/Cost_per_action for commission earned for a given action from the provided deep link
   * @member {module:model/Amount} CPA
   */
  exports.prototype['CPA'] = undefined;
  /**
   * See https://en.wikipedia.org/wiki/Pay_per_sale for commission earned as a result of a booking made from the provided deep link
   * @member {module:model/Amount} CPS
   */
  exports.prototype['CPS'] = undefined;



  return exports;
}));



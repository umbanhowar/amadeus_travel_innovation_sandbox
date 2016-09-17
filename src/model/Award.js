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
    root.AmadeusTravelInnovationSandbox.Award = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Award model module.
   * @module model/Award
   * @version 1.2
   */

  /**
   * Constructs a new <code>Award</code>.
   * @alias module:model/Award
   * @class
   * @param provider {String} The organization that issued the award. For example&colon;. Local Star Rating, AAA.
   * @param rating {String} The level of the award that was awarded on the provider's scale. For example&colon; 4 or RECOMMENDED.
   */
  var exports = function(provider, rating) {
    var _this = this;

    _this['provider'] = provider;
    _this['rating'] = rating;
  };

  /**
   * Constructs a <code>Award</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Award} obj Optional instance to populate.
   * @return {module:model/Award} The populated <code>Award</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('rating')) {
        obj['rating'] = ApiClient.convertToType(data['rating'], 'String');
      }
    }
    return obj;
  }

  /**
   * The organization that issued the award. For example&colon;. Local Star Rating, AAA.
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * The level of the award that was awarded on the provider's scale. For example&colon; 4 or RECOMMENDED.
   * @member {String} rating
   */
  exports.prototype['rating'] = undefined;



  return exports;
}));



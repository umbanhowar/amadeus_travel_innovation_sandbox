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
    define(['ApiClient', 'model/Logos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Logos'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.CarrierInfo = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Logos);
  }
}(this, function(ApiClient, Logos) {
  'use strict';




  /**
   * The CarrierInfo model module.
   * @module model/CarrierInfo
   * @version 1.2
   */

  /**
   * Constructs a new <code>CarrierInfo</code>.
   * @alias module:model/CarrierInfo
   * @class
   * @param logos {module:model/Logos} Logos of the airline in a variety of sizes
   * @param name {String} Display name of the airline
   */
  var exports = function(logos, name) {
    var _this = this;

    _this['logos'] = logos;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>CarrierInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierInfo} obj Optional instance to populate.
   * @return {module:model/CarrierInfo} The populated <code>CarrierInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('logos')) {
        obj['logos'] = Logos.constructFromObject(data['logos']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Logos of the airline in a variety of sizes
   * @member {module:model/Logos} logos
   */
  exports.prototype['logos'] = undefined;
  /**
   * Display name of the airline
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


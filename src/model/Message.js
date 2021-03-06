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
    root.AmadeusTravelInnovationSandbox.Message = factory(root.AmadeusTravelInnovationSandbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Message model module.
   * @module model/Message
   * @version 1.2
   */

  /**
   * Constructs a new <code>Message</code>.
   * @alias module:model/Message
   * @class
   * @param severity {String} An indicator of the importance of this message as part of the flow. May be ERROR or INFO.
   * @param type {String} An indicator of the source or type of message that has been generated. May be USER or SYSTEM.
   * @param message {String} A free text message that provides more information.
   */
  var exports = function(severity, type, message) {
    var _this = this;

    _this['severity'] = severity;
    _this['type'] = type;
    _this['message'] = message;
  };

  /**
   * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message} obj Optional instance to populate.
   * @return {module:model/Message} The populated <code>Message</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('severity')) {
        obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * An indicator of the importance of this message as part of the flow. May be ERROR or INFO.
   * @member {String} severity
   */
  exports.prototype['severity'] = undefined;
  /**
   * An indicator of the source or type of message that has been generated. May be USER or SYSTEM.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A free text message that provides more information.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/Contact', 'model/FrequentTravelerCard', 'model/Infant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contact'), require('./FrequentTravelerCard'), require('./Infant'));
  } else {
    // Browser globals (root is window)
    if (!root.AmadeusTravelInnovationSandbox) {
      root.AmadeusTravelInnovationSandbox = {};
    }
    root.AmadeusTravelInnovationSandbox.Traveler = factory(root.AmadeusTravelInnovationSandbox.ApiClient, root.AmadeusTravelInnovationSandbox.Contact, root.AmadeusTravelInnovationSandbox.FrequentTravelerCard, root.AmadeusTravelInnovationSandbox.Infant);
  }
}(this, function(ApiClient, Contact, FrequentTravelerCard, Infant) {
  'use strict';




  /**
   * The Traveler model module.
   * @module model/Traveler
   * @version 1.2
   */

  /**
   * Constructs a new <code>Traveler</code>.
   * @alias module:model/Traveler
   * @class
   * @param id {String} Uniquely identifies this traveler in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @param lastName {String} The last name of the passenger, as entered by the agent, in upper-case. May include suffixes. For example&colon; THACKSTON, KING III, LU.
   * @param firstName {String} The first name of the passenger, as entered by the agent, in upper-case. May include middle names, initials or prefixes. The total combined length of the first name and last name must be between 2 and 57 characters. For example&colon; ALEXANDRA, JOSE-ANTONIO MR, ELAINE T DR.
   * @param travelerType {String} Enumeration of the type of traveler. May be ADULT or CHILD.
   */
  var exports = function(id, lastName, firstName, travelerType) {
    var _this = this;

    _this['id'] = id;
    _this['last_name'] = lastName;
    _this['first_name'] = firstName;
    _this['traveler_type'] = travelerType;




  };

  /**
   * Constructs a <code>Traveler</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Traveler} obj Optional instance to populate.
   * @return {module:model/Traveler} The populated <code>Traveler</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('traveler_type')) {
        obj['traveler_type'] = ApiClient.convertToType(data['traveler_type'], 'String');
      }
      if (data.hasOwnProperty('infant')) {
        obj['infant'] = Infant.constructFromObject(data['infant']);
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
      }
      if (data.hasOwnProperty('frequent_traveler_cards')) {
        obj['frequent_traveler_cards'] = ApiClient.convertToType(data['frequent_traveler_cards'], [FrequentTravelerCard]);
      }
    }
    return obj;
  }

  /**
   * Uniquely identifies this traveler in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The last name of the passenger, as entered by the agent, in upper-case. May include suffixes. For example&colon; THACKSTON, KING III, LU.
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The first name of the passenger, as entered by the agent, in upper-case. May include middle names, initials or prefixes. The total combined length of the first name and last name must be between 2 and 57 characters. For example&colon; ALEXANDRA, JOSE-ANTONIO MR, ELAINE T DR.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Enumeration of the type of traveler. May be ADULT or CHILD.
   * @member {String} traveler_type
   */
  exports.prototype['traveler_type'] = undefined;
  /**
   * Details on any infant that may be sharing this seat with this traveler. Absence of this key indicates that no infant is traveling with this passenger. An empty object at this key indicated an anonymous infant is traveling with the passenger.
   * @member {module:model/Infant} infant
   */
  exports.prototype['infant'] = undefined;
  /**
   * An <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO 8601</a> date indicating the birth date of the traveler, as provided by the agent. For example&colon; 1972-02-19.
   * @member {Date} date_of_birth
   */
  exports.prototype['date_of_birth'] = undefined;
  /**
   * Details on how to contact this traveler. At least one traveler in a travel-record will have a contact element.
   * @member {Array.<module:model/Contact>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Information regarding loyalty cards that the traveler would like to use to accrue benefits as part of this travel record. Where possible, the system will attempt to validate that the frequent traveler card is eligible for use in the context of this travel record.
   * @member {Array.<module:model/FrequentTravelerCard>} frequent_traveler_cards
   */
  exports.prototype['frequent_traveler_cards'] = undefined;



  return exports;
}));



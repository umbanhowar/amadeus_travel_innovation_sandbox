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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmadeusTravelInnovationSandbox);
  }
}(this, function(expect, AmadeusTravelInnovationSandbox) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmadeusTravelInnovationSandbox.TrainScheduleSearchResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TrainScheduleSearchResult', function() {
    it('should create an instance of TrainScheduleSearchResult', function() {
      // uncomment below and update the code to test TrainScheduleSearchResult
      //var instane = new AmadeusTravelInnovationSandbox.TrainScheduleSearchResult();
      //expect(instance).to.be.a(AmadeusTravelInnovationSandbox.TrainScheduleSearchResult);
    });

    it('should have the property originStationId (base name: "origin_station_id")', function() {
      // uncomment below and update the code to test the property originStationId
      //var instane = new AmadeusTravelInnovationSandbox.TrainScheduleSearchResult();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new AmadeusTravelInnovationSandbox.TrainScheduleSearchResult();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instane = new AmadeusTravelInnovationSandbox.TrainScheduleSearchResult();
      //expect(instance).to.be();
    });

  });

}));

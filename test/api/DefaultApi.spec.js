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
    instance = new AmadeusTravelInnovationSandbox.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('airportAutocomplete', function() {
      it('should call airportAutocomplete successfully', function(done) {
        //uncomment below and update the code to test airportAutocomplete
        //instance.airportAutocomplete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('carRentalAirportSearch', function() {
      it('should call carRentalAirportSearch successfully', function(done) {
        //uncomment below and update the code to test carRentalAirportSearch
        //instance.carRentalAirportSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('carRentalGeosearch', function() {
      it('should call carRentalGeosearch successfully', function(done) {
        //uncomment below and update the code to test carRentalGeosearch
        //instance.carRentalGeosearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flightAffiliateSearch', function() {
      it('should call flightAffiliateSearch successfully', function(done) {
        //uncomment below and update the code to test flightAffiliateSearch
        //instance.flightAffiliateSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flightExtensiveSearch', function() {
      it('should call flightExtensiveSearch successfully', function(done) {
        //uncomment below and update the code to test flightExtensiveSearch
        //instance.flightExtensiveSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flightInspirationSearch', function() {
      it('should call flightInspirationSearch successfully', function(done) {
        //uncomment below and update the code to test flightInspirationSearch
        //instance.flightInspirationSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flightLowFareSearch', function() {
      it('should call flightLowFareSearch successfully', function(done) {
        //uncomment below and update the code to test flightLowFareSearch
        //instance.flightLowFareSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flightTrafficAPI', function() {
      it('should call flightTrafficAPI successfully', function(done) {
        //uncomment below and update the code to test flightTrafficAPI
        //instance.flightTrafficAPI(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hotelAirportSearch', function() {
      it('should call hotelAirportSearch successfully', function(done) {
        //uncomment below and update the code to test hotelAirportSearch
        //instance.hotelAirportSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hotelGeosearchByBox', function() {
      it('should call hotelGeosearchByBox successfully', function(done) {
        //uncomment below and update the code to test hotelGeosearchByBox
        //instance.hotelGeosearchByBox(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hotelGeosearchByCircle', function() {
      it('should call hotelGeosearchByCircle successfully', function(done) {
        //uncomment below and update the code to test hotelGeosearchByCircle
        //instance.hotelGeosearchByCircle(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hotelPropertyCodeSearch', function() {
      it('should call hotelPropertyCodeSearch successfully', function(done) {
        //uncomment below and update the code to test hotelPropertyCodeSearch
        //instance.hotelPropertyCodeSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('locationInformation', function() {
      it('should call locationInformation successfully', function(done) {
        //uncomment below and update the code to test locationInformation
        //instance.locationInformation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nearestRelevantAirport', function() {
      it('should call nearestRelevantAirport successfully', function(done) {
        //uncomment below and update the code to test nearestRelevantAirport
        //instance.nearestRelevantAirport(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('railStationAutocomplete', function() {
      it('should call railStationAutocomplete successfully', function(done) {
        //uncomment below and update the code to test railStationAutocomplete
        //instance.railStationAutocomplete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('railStationInformation', function() {
      it('should call railStationInformation successfully', function(done) {
        //uncomment below and update the code to test railStationInformation
        //instance.railStationInformation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('topFlightDestinations', function() {
      it('should call topFlightDestinations successfully', function(done) {
        //uncomment below and update the code to test topFlightDestinations
        //instance.topFlightDestinations(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('topFlightSearches', function() {
      it('should call topFlightSearches successfully', function(done) {
        //uncomment below and update the code to test topFlightSearches
        //instance.topFlightSearches(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trainExtensiveSearch', function() {
      it('should call trainExtensiveSearch successfully', function(done) {
        //uncomment below and update the code to test trainExtensiveSearch
        //instance.trainExtensiveSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trainScheduleSearch', function() {
      it('should call trainScheduleSearch successfully', function(done) {
        //uncomment below and update the code to test trainScheduleSearch
        //instance.trainScheduleSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('travelRecordRetrieve', function() {
      it('should call travelRecordRetrieve successfully', function(done) {
        //uncomment below and update the code to test travelRecordRetrieve
        //instance.travelRecordRetrieve(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('yapQCityNameSearch', function() {
      it('should call yapQCityNameSearch successfully', function(done) {
        //uncomment below and update the code to test yapQCityNameSearch
        //instance.yapQCityNameSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('yapQGeosearch', function() {
      it('should call yapQGeosearch successfully', function(done) {
        //uncomment below and update the code to test yapQGeosearch
        //instance.yapQGeosearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

# AmadeusTravelInnovationSandbox.FlightTicket

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Uniquely identifies this ticket in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record. | 
**price** | [**Amount**](Amount.md) | The cost of this ticket. | 
**travelerIds** | **[String]** | Traveler identifiers to indicate the travelers to whom this ticket applies. | 
**flightBounds** | [**[FlightReservationBound]**](FlightReservationBound.md) | The flight itinerary for this ticket. | 



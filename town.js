function buildTownMap()
{
	locationNames = shuffle(locationNames);
	
	var mapInnerHtml = "";
	for (let i = 0; i < 5; i++)
	{
		mapInnerHtml += "<tr>";
		var maprow = [];
		for (let j = 0; j < 5; j++)
		{
			var locationIndex = i*5 + j;
			mapInnerHtml += "<td>" + locationNames[locationIndex] + "</td>";
			maprow.push(newLocation(locationNames[locationIndex]));
		}
		mapInnerHtml += "</tr>";
		map.push(maprow);
	}
	$('#mapTable').html(mapInnerHtml);
}

var map = [];

function newLocation(name)
{
	var newLocation = {
		name: name,
		items: []
	}
	
	switch(name)
	{
		case "Library":
			newLocation.items.push(newItem("\"How to Kill Dracula\" Book"));
			break;
	}
	
	return newLocation;
}

var locationNames =
[
	"Schoolhouse",
	"Church",
	"Graveyard",
	"Town Hall",
	"Gas Station",
	
	"Bus Stop",
	"Library",
	"Post Office",
	"Firehouse",
	"Police Station",
	
	"Bar",
	"Motel",
	"Coffee Shop",
	"Apartment Building",
	"Farm",
	
	"Park",
	"Warehouse",
	"Bowling Alley",
	"Car Wash",
	"Office Building",
	
	"Lighthouse",
	"Community Center",
	"Pawn Shop",
	"Drug Store",
	"Park-and-Ride"
]
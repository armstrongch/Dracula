var position = {x:2, y:2};
var items = [];

function showInfo()
{
	var infoHtml = "";
	infoHtml += "Location: " + map[position.y][position.x].name;
	if (items.length == 0)
	{
		infoHtml += "<br/>Items: none";
	}
	else
	{
		infoHtml += "<br/>Items:";
		for (let i = 0; i < items.length; i++)
		{
			infoHtml += " " + items[i].name;
			if (i < items.length - 1)
			{
				infoHtml += ",";
			}
		}
	}
	
	$('#infoDiv').html(infoHtml);
}

function move(xMod, yMod)
{
	var oldLocation = map[position.y][position.x].name;
	
	position.x += xMod;
	position.y += yMod;
	
	var newLocation = map[position.y][position.x].name
	
	showMessage("You travel from the " + oldLocation + " to the " + newLocation + ".");
	
	endTurn();
}

function searchLocation()
{
	if (map[position.y][position.x].items.length == 0)
	{
		showMessage("You don't find anything in the " + map[position.y][position.x].name);
	}
	else
	{
		var messageText = "You find the following items in the " + map[position.y][position.x].name + ":";
		for (let i = 0; i < map[position.y][position.x].items.length; i++)
		{
			var locationItem = map[position.y][position.x].items[i];
			messageText += " " + locationItem.name;
			if (i < map[position.y][position.x].items.length - 1)
			{
				messageText += ",";
			}
			else
			{
				messageText += ".";
			}
			items.push(locationItem);
		}
		showMessage(messageText);
	}
	endTurn();
}

function endTurn()
{
	draculaTurn();
	showInfo();
	showChoices();
}
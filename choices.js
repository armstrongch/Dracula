function getChoiceHTML(name, funcText)
{
	return "<a onclick='" + funcText + "'>" + name + "</a><br/>"
}

function showChoices()
{
	var choiceHTML = "";
	
	choiceHTML += getChoiceHTML("Search the " + map[position.y][position.x].name, "searchLocation()");
	choiceHTML += getItemHTML();
	choiceHTML += getMovementChoicesHTML();
	$('#chooseDiv').html(choiceHTML);
}

function getMovementChoicesHTML()
{
	var movementChoicesHTML = "";
	
	if (position.x > 0)
	{
		movementChoicesHTML += getChoiceHTML("Go West (" + map[position.y][position.x-1].name + ")", "move(-1, 0)");
	}
	if (position.x < 4)
	{
		movementChoicesHTML += getChoiceHTML("Go East (" + map[position.y][position.x+1].name + ")", "move(1, 0)");
	}
	
	if (position.y > 0)
	{
		movementChoicesHTML += getChoiceHTML("Go North (" + map[position.y-1][position.x].name + ")", "move(0, -1)");
	}
	if (position.y < 4)
	{
		movementChoicesHTML += getChoiceHTML("Go South (" + map[position.y+1][position.x].name + ")", "move(0, 1)");
	}
	
	return movementChoicesHTML;
}

function getItemHTML()
{
	var itemHTML = "";
	for (let i = 0; i < items.length; i++)
	{
		switch(items[i].name)
		{
			case "Magic Compass":
				itemHTML += getChoiceHTML("Use Magic Compass to detect Dracula", "detectDracula()");
				break;
			case "\"How to Kill Dracula\" Book":
				itemHTML += getChoiceHTML("Read \"How to Kill Dracula\" Book", "readBook()");
				break;
		}
	}
	return itemHTML;
}
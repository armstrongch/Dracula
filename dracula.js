var dracula = 
{
	currentMode: "searching",
	position: {x: 0, y: 0}
}

function draculaTurn()
{
	var messageText = "";
	switch(dracula.currentMode)
	{
		case "searching":
			messageText += dracula_searching();
			break;
		case "flying":
			messageText += dracula_flying();
			break;
		case "hunting":
			messageText += dracula_hunting();
			break;
	}
	showMessage(messageText);
}

function dracula_flying()
{
	var messageText = "You can hear the beating of leathery wings as Dracula flies through the night sky.";
	
	// Search for the furthest location that Dracula hasn't searched
	var currentTarget = {x:-1, y:-1};
	var targetDistance = -1;
	
	for (let i = 0; i < map.length; i++)
	{
		for (let j = 0; j < map[i].length; j++)
		{
			if (!map[i][j].searchedByDracula)
			{
				testDistance = Math.abs(i - dracula.position.y) + Math.abs(j - dracula.position.x);
				
				if ((targetDistance == -1) || (testDistance > targetDistance) || ((testDistance == targetDistance) && (Math.random() > 0.5)))
				{
					currentTarget = {x: j, y: i};
					targetDistance = testDistance;
				}
			}
		}
	}
	
	//If we found a sport, go there
	if (targetDistance != -1)
	{
		dracula.position = currentTarget;
	}
	else
	// otherwise, reset all locations and fly diagonally
	{
		for (let i = 0; i < map.length; i++)
		{
			for (let j = 0; j < map[i].length; j++)
			{
				map[i][j].searchedByDracula = false;
			}
		}
		dracula.position.x = 4 - dracula.position.x;
		dracula.position.y = 4 - dracula.position.y;
	}
	dracula.currentMode = "searching";
	return messageText;
}

function dracula_hunting()
{
	var messageText = "Dracula knows where you are. He is hunting for you.";
	return messageText;
}

function dracula_searching()
{
	var messageText = "Dracula is searching for you.";
	if (!map[dracula.position.y][dracula.position.x].searchedByDracula)
	{
		
		for (let i = 0; i < map.length; i++)
		{
			for (let j = 0; j < map[i].length; j++)
			{
				if ((Math.abs(i - dracula.position.y) + Math.abs(j - dracula.position.x)) <= 2)
				{
					map[i][j].searchedByDracula = true;
				}
			}
		}
		if ((Math.abs(position.y - dracula.position.y) + Math.abs(position.x - dracula.position.x)) <= 2)
		{
			messageText += "<br/>Dracula is close enough to sense your presence! You can hear him yelling from the " + map[dracula.position.y][dracula.position.x].name + ": <strong>\"I'm gonna getcha!\"</strong>";
			dracula.currentMode = "hunting";
		}
		else
		{
			dracula.currentMode = "flying";
		}
	}
	else
	{
		dracula.currentMode = "flying";
	}
	
	return messageText;
}

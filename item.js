function newItem(name)
{
	return {
		name: name,
	}
}

function detectDracula()
{
	var horizontalDraculaDirection = "";
	var verticalDraculaDirection = "";
	
	if (dracula.position.x > position.x)
	{
		horizontalDraculaDirection = "east";
	}
	else if (dracula.position.x < position.x)
	{
		horizontalDraculaDirection = "west";
	}
	
	if (dracula.position.y > position.y)
	{
		verticalDraculaDirection = "south";
	}
	else if (dracula.position.y < position.y)
	{
		verticalDraculaDirection = "north";
	}
	
	if ((horizontalDraculaDirection == "") && (verticalDraculaDirection == ""))
	{
		showMessage("The Magic Compass is going haywire! Dracula is right on top of you!");
	}
	else
	{
		showMessage("The Magic Compass indicates that Dracula is "
			+ verticalDraculaDirection + horizontalDraculaDirection
			+ " of your current position.");
	}
	
	endTurn();
}

function readBook()
{
	var messageText = "";
	messageText += "The book describes several steps for killing Dracula:<br/>"
	messageText += "<strong>";
	messageText += "1) Weaken Dracula using garlic, a crucifix, or fire.<br/>"
	messageText += "2) Follow Dracula to his coffin, and trap him inside using holy water or the bramble of a wild rose.<br/>"
	messageText += "3) Shoot Dracula in the chest with a blessed bullet, or impale him with a stake."
	messageText += "</strong>";
	showMessage(messageText);
	endTurn();
}
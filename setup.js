function setupGame()
{
	buildTownMap();
	setupItems();
	setupDracula();
	showInfo();
	showChoices();
}

function setupItems()
{
	items.push(newItem("Map"));
	items.push(newItem("Magic Compass"));
}

function setupDracula()
{
	if (Math.random() > 0.5)
	{
		dracula.position.x = 4;
	}
	if (Math.random() > 0.5)
	{
		dracula.position.y = 4;
	}
}


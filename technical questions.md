1.How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
I spent a couple of hours coding this test. If I had more time I would add more functionality to the application. One additional feature could include integrating google maps
to each restaurant to help users find the location. Another feature I would add would be to include more restaurant as I only include the first 25 restaurants right now. I
would also add the ability to sort the list of restaurants by categories like price, type of food, etc. I would also put in the ability for users to register and save
restaurants. Furthermore I would focus a little bit more on the user interface and add some animations.

2.What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
A useful feature added to ES8 was the ability to have trailing commas at the end of a function parameter input or inside objects and there would be no error. This is useful
because it prevents less bugs.

eg.
const myObj={
	name:"jack",
	age:22,
	numPotatoes:10,
	favColour:"blue",
}
There is a comma at the end of the last property but the Javascript code will still compile.

3.How would you track down a performance issue in production? Have you ever had to do this?
Performance issues can come from inefficient coding. If there was a performance issue in my project, I would go through places of the code where memory leaks can occur. Having
data take up space in the memory heap could slow down the performance of an application and I would try to find the source of these leaks. Database management could also cause
performance issues so I would look through the  database and try to see if something there is causing a problem. Sometimes an algorithm you may be using is not the most efficient
in terms of time complexity and a new algorithm needs to be replace it. When using a slow algorithm and having a lot of traffic to your application, it could slow everything down.


4.How would you improve the API that you just used?
I would add API tokens or authentication so that it would be more secure.
Sidenote: The  instructions were not completely clear which API to use (official or unofficial). When I tried to used the official OpenTable API, it required a registration but
the registration would not be approved for at least 3-4weeks. Therefore for this application I used the unofficial opentable API.


5.Please describe yourself using JSON
{
	"name":"paul vo",
	"gender":"male",
	"school":"ryerson university",
	"job":"freelance developer",
	"country":"Canada",
	"phone":"iPhone 6",
	"hobbies":["piano", "games", "biking"]
}

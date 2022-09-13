

	<?php
	$name_query = 'goose+island';
	//using simplexml we will load the proper url for a location query (substitute your api key of course)
	$xml = simplexml_load_file('http://beermapping.com/webservice/locquery/API_KEY/'.$name_query);
	//we will loop through any possible returned values.
	foreach($xml->location as $location){
		//if we want to use the unique id: $location->id;
		
		//first we print the location name and link to the review page
		echo '<p><a href="'.$location->reviewlink.'">';
		echo $location->name;
		echo '</a>';
		echo '<br />';
		//next we echo address:
		echo  $location->street;
		echo '<br />';
		echo $location->city.', '. $location->state.' '.$location->zip;
		echo '<br />';
		echo $location->country;
		echo '<br />';
		echo $location->phone;
		echo '</p>';
	}
	?>
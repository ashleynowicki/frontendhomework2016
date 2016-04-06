//DOM elements load first
$(document).ready(function() {
  //stop auto refresh with submit
console.log ('if you see this, jQuery is working')
  $('#submit-btn').click(function(){
    event.preventDefault();
    //define the city variable
    var city = $('#city-type').val();
    $('#city-type').val('');
    console.log("Your city is: " + city)
    //Isolating city names so they correspond with abbreviation, city, state
    if(city == 'new york city' || city == 'nyc' || city == 'new york'){
      $('body').attr('class', 'nyc');
    }
    //Then move into elseif for the rest of the cities:
    //Austin
    else if (city == 'austin' || city =='atx') {
      $('body').attr('class', 'austin')
    }
    //Los Angeles
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class', 'la');
    }
    //San Francisco
    else if (city == 'sf' || city == 'san francisco' || city == "sfo") {
      $('body').attr('class', 'sf')
    }
    //Sydney
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class', 'sydney')
    }
  });
});

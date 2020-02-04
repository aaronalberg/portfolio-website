

      /*  
    fetch('https://api-v3.mbta.com/predictions?filter[stop]=place-sstat&filter[direction_id]=0&include=stop')
.then(function(response) {
  console.log(response.json());
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
        */
fetch('http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&max=1&mapid=40360')
.then(function(response) {
  console.log(response.json());
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});



AIM: to consume the public Flickr API and display the results according to wireframe produces.

Technologies used:

Vanilla JS
* JavaScript used to alongside axios, to store API values in array to call from HTML using
 Vue js event handling methods.

Vue JS
* "axios" used for making"GET" HTTPRequest to store response in an array.
* Vue JS was implemented to assist in both the frontend development and also to handle event 
requests from the HTML to the JS functions. For example, v-for was used to render flickr image
 containers based on the number of each object returned from the API response array.

CSS
* Pure CSS was used, incluiding the use of "@media queries" for device responsivenessas well as
 references to "@support" to enable cross browser compatability.

Cors proxy 
* As the data retrieved from the flickr API is shown in JSONP, it generates Cross Origin Errors. 
Therefore cors proxy (https://cors-anywhere.herokuapp.com/) was used in addition to a "nojsoncallback=1" 
(https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1) , to return the
 data in standard JSON format.

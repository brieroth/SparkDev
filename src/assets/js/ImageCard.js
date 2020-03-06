import axios from 'axios'

/* eslint-disable no-new */
export default {
    id: '#app',
    template: '<App/>',
    data() {
        return {
            items: [],
            loaded: true
        }
    },
    mounted: function() {

        var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        var reqUrl = cors_api_url + 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
        axios.get(reqUrl)
            .then(response => {
                var flickerResponse = []
                flickerResponse.push(response.data);
                for (var i = 0; i < flickerResponse.length; i++) {
                    var innerlen = flickerResponse.length;

                    for (var j = 0; j < innerlen; j++) {
                        var itemsDataTitle = flickerResponse[i].items[j].title;
                        var itemsDataAuthor = flickerResponse[i].items[j].author;
                        var itemsDataDescription = flickerResponse[i].items[j].description;
                        var itemDataImage = flickerResponse[i].items[j].media.m;
                        var itemDataTag = flickerResponse[i].items[j].tags.includes("safe");

                        for (var k = 0; k < flickerResponse[i].items.length; k++) {
                            this.items.push(flickerResponse[i].items[j++]);
                        }
                    }
                }
            })
            .catch((err) => {})
    }
}
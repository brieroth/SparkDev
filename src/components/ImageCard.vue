<template>
<body>
  <div class="pageHeading">
    <h2>Flickr API Images</h2>
  </div>
  <div id="app">
    <div class="cardRow"> 
      <div class="cardColumn" v-show="loaded" v-for="(item, index) in items">  
        <div class="cardContainer" >
          <img :src=item.media.m  class="imageSize">
          <div>
            <h4 v-if=item.title ><a :href=item.media.m  target="blank"> {{item.title}}</a>
              by <a :href=item.link target="blank">{{item.author}}</a>
            </h4> 
            <h5>Description: {{item.description}}</h5>
            </div>
              <div class="tagSelector">
                <select id="tags">
                  <option value="tags">Tags</option>
                  <option>{{item.tags}}</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script scoped src="../assets/js/ImageCard.js">
 @import '../assets/js/ImageCard.js';
</script>
<style scoped src="../assets/css/ImageCard.css">
@import '../assets/css/ImageCard.css';
</style>

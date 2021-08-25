<template>
  <div>
      <div class="header">
          <a class="button" @click="changevalue(Mujer)">Mujer</a>
          <a class="button" @click="changevalue(Hombre)">Hombre</a>
      </div>
      <div class="gallery">
        <div class="gallery-panel"
            v-for="photo in photos"
            :key="photo.id">
        <router-link :to="`/photo/${photo.id}`">
            <img :src="thumbUrl(photo.filename)">
        </router-link>
        </div>
    </div>
  </div>
  
</template>

<script>
import photos from '@/photos.json';

export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
    changeValue(value) {
        if(value == Mujer) {
            value = Hombre;
        }
    }
  },
};
</script>

<style>
  .header {
    width: 100%;
    height: 2rem;
    align-content: center;
    display: flex;
    justify-content: center;
  }
  
    a {
      color: hotpink;
      margin: 1rem;
      
    }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }

  .gallery-panel img {
    width: 100%;
    height: 30vw;
    /*object-fit: cover;*/  
  }
</style>
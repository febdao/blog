<template>
  <div class="">
    <div class="card text-4xl md:text-6xl p-20" 
      :class="{ 'is-flipped': isFlipped }"
      @click="myToggle()">
      <div class="card__face card__face--front px-8 py-4 overflow-hidden text-gray-900 items-center flex justify-items-center justify-center bg-white  shadow-lg rounded-lg easy-in-out font-z">
          {{ convertText(card.text) }}</div>
      <div class="card__face px-8 py-4 card__face--back overflow-hidde text-gray-900 items-center flex justify-items-center justify-cente bg-green-50  shadow-lg rounded-lg easy-in-out">
        <div class="block w-full text-center">
          <div class="w-full text-2xl">{{ convertText(card.text) }}</div>
          <hr class="my-6" />
          {{ card.text }}
          <hr class="my-6" />
          <div v-if="card.auth" class="w-full text-xl">(From: {{ card.auth }})</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isFlipped: false
    }
  },
  props: ["card"],
  methods: {
    myToggle: function() {
      this.isFlipped = !this.isFlipped;
    },
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    convertText: function(text) {
      let newText = text.replace(/\s/g,'').split('');
      let newArrayText = this.shuffle(newText);
      return newArrayText.join('/');
    }
  }
}
</script>

<style>
  .card {
    width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 400px;
    position: relative;
  }

  .card__face {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    backface-visibility: hidden;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card__face--back {
    transform: rotateY( 180deg );
  }

  .is-flipped .card__face--back {
    transform: rotateY( 0deg );
  }

  .is-flipped .card__face--front {
    transform: rotateY( 180deg );
  }
</style>
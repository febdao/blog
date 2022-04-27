<template>
  <div class="">
    <div class="card w-full h-full text-4xl md:text-6xl relative" 
      :class="{ 'is-flipped': isFlipped }"
      @click="myToggle()">
      <div class="card__face absolute inset-0 card__face--front px-8 py-4 overflow-hidden text-gray-900 items-center flex justify-items-center justify-center bg-white  shadow-lg rounded-lg easy-in-out font-z">
          {{ convertText(card.text) }}</div>
      <div class="card__face p-10 md:p-20  card__face--back overflow-hidde text-gray-900 items-center flex justify-items-center justify-cente bg-green-50  shadow-lg rounded-lg easy-in-out">
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
  .card__face {
    backface-visibility: hidden;
    transition: transform 1s;
    transform-style: preserve-3d;
    transform: rotateY( 0deg );
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
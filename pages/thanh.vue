<template>
  <div class="fixed inset-0 bg-gray-400 z-10 bg-center bg-cover bg-no-repeat h-screen overflow-scroll" style="background-image: url('/images/thanhvu.jpg');">
    <div class="fixed inset-0 z-9 min-h-screen bg-black opacity-60 ">
    </div>
    <div class="fixed
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate opacity-20 inset-0 z-0"></div>
    <div v-if="isDone">
      <div class="container mx-auto mt-20 p-20 bg-green-800 relative z-50 bg-opacity-80">
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li v-for="(card, index) in cards" :key="card.text">
            {{ index  + 1 }}. {{ card.text }}
          </li>
        </ul>
        <p class="text-3xl my-4 mt-20 w-full text-center">
          <button @click="reset()" class="button bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate white inline-block w-250 opacity-100 lg:px-20 px-10 py-2 relative z-40">Reset</button>
        </p>
      </div>
    </div>
    <div v-else>
      <div v-if="isShow">
        <div class="container mx-auto">
          <div class="carousel-wrapper">
            <client-only>
              <slick :options="slickOptions">
                <div v-for="(card, index) in cards" :key="card.text">
                  <p class="w-full text-center p-2">
                    {{ index  + 1 }}/{{ cards.length }}
                  </p>
                  <FlipCard :card="card" />
                </div>
              </slick>
            </client-only>
          </div>
          <p class="text-3xl my-4 w-full text-center">
            <button @click="endShow()" class="button bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate white inline-block w-250 opacity-100 lg:px-20 px-10 py-2  relative z-40">Done</button>
          </p>
        </div>
      </div>
      <div v-else>
        <div class="h-screen items-center justify-center flex flex-col relative">
          <div class="absolute inset-0 z-10 min-h-screen flex items-center text-white ">
            <div class="w-full px-10 md:px-24 z-10">
              <div class="container mx-auto p-10 md:p-20">
                <h1 class="md:flex text-3xl md:text-5xl font-bold text-left tracking-wide">Chúc mừng sinh nhật</h1>
                <h2 class="md:flex text-4xl md:text-7xl font-bold text-white text-left tracking-wide">Thành Vũ</h2>
                <p class="text-3xl my-4">
                  <button @click="showTime()" class="button bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate white inline-block w-250 opacity-100 lg:px-20 px-10 py-2">Let's play!!!</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from '@/utils/global';
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  data() {
    return {
      isShow: false,
      isDone: false,
      cards: [
        {
          text: 'Lò xo rụt'
        },
        {
          text: 'Kim Liên'
        },
        {
          text: 'Phi Công'
        },
        {
          text: 'Ông ngoại'
        },
        {
          text: 'Quan hệ rộng '
        },
        {
          text: 'Rửa bát'
        },
        {
          text: 'Tiệc tùng'
        },
        {
          text: 'Anh cả'
        },
        {
          text: 'Melba'
        },
        {
          text: 'Em gái mưa'
        },
        {
          text: 'Bé bự',
          auth: 'Bình lớn'
        },
        {
          text: 'Nhiệt tình',
          auth: 'Nhung'
        },
        {
          text: 'Ú',
          auth: 'Bình Bé'
        },
        {
          text: 'Đào hoa',
          auth: 'Minh Ngọc'
        },
        {
          text: 'OT boy',
          auth: 'Minh Ngọc'
        },
        {
          text: 'Bựa',
          auth: 'Tôm Nguyễn'
        },
        {
          text: 'Thân thiện',
          auth: 'Linh Phạm'
        },
        {
          text: 'Thiện lành',
          auth: 'Trang mèo'
        },
        {
          text: 'Cơ trưởng',
          auth: 'Hòa Nguyễn'
        },
        {
          text: 'To',
          auth: 'Trang mèo (ko rõ cái gì to ^^)'
        },
        {
          text: 'Xởi lởi',
          auth: 'Phương Anh'
        },
        {
          text: 'Múp rụp',
          auth: 'Mạnh Linh'
        },
        {
          text: 'Đẹp trai',
          auth: 'Văn Hải - Cũng ko quen nói dối. Nhưng mà thôi sn. Hêhhe'
        },
        {
          text: 'Buồn cười',
          auth: 'Quang 7'
        },
        {
          text: 'Popular',
          auth: 'Một bạn nữ giấu tên'
        },
        {
          text: 'Bụ bẫm',
          auth: 'Một bạn nữ giấu tên'
        },
        {
          text: 'Tốt bụng',
          auth: 'Một bạn nữ giấu tên - cả nghĩa đen lẫn bóng'
        }
      ],
      slickOptions: {
        arows: true,
        slidesToShow: 1
      }
    }
  },
  methods: {
    showTime: function() {
      this.isShow = true;
    },
    endShow: function() {
      this.isDone = true;
    },
    reset: function() {
      this.isDone = false;
      this.isShow = false;
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `${global.siteUrl}/${this.$route.params.slug}`,
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      meta: [
        ...this.meta
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${global.siteUrl}/${this.$route.params.slug}`,
        },
      ],
    };
  },
}
</script>

<style>
  .carousel-wrapper {
    padding: 40px;
  }

  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
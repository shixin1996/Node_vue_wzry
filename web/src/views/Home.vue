<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/1f697ea2154a2127d5abe8585fcdc17f.png">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/59ee0d7a242a2c4beeb4376be574cd7a.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/609947f44b2eaa6e2d220256a74a45c2.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2"
           slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"
             v-for="i in 10"
             :key="i">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card :newsCats='newsCats'
                 icon='menu'
                 title="新闻资讯">
      <template #items='{category}'>
        <div v-for="(item,i) in category.newsList"
             :key="i"
             class="d-flex py-2 fs-lg">
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
          <span class="text-grey-1 fs-sm">{{item.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>
    <m-list-card :newsCats='heroCats'
                 icon='menu'
                 title="英雄列表">
      <template #items='{category}'>
        <div class="d-flex flex-wrap"
             style="margin:0 -0.5rem">
          <div v-for="(hero,i) in category.heroList"
               :key="i"
               class="p-2 text-center"
               style="width:20%">
            <img :src="hero.avatar"
                 class="w-100">
            <div>{{hero.name}}</div>
          </div>
        </div>
      </template>
    </m-list-card>
    <m-list-card icon='menu'
                 title="精彩视频"></m-list-card>
    <m-list-card icon='menu'
                 title="图文攻略"></m-list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date (val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }
      },
      newsCats: [],
      heroCats: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const resNews = await this.$http.get('news/list')
      this.newsCats = resNews.data
      const resHeroes = await this.$http.get('heroes/list')
      this.heroCats = resHeroes.data
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    &:not(:nth-child(4n)) {
      border-right: 1px solid $border-color;
    }
  }
}
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>

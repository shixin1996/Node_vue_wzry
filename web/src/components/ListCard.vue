<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex pt-1 pb-3 ai-center">
      <i class="sprite"
         :class="`sprite-${icon}`"></i>
      <div class="fs-xl mx-2 flex-1">{{title}}</div>
      <div class="fs-xl">···</div>
    </div>
    <div class="card-body pt-3 pb-2">
      <div class="nav jc-between">
        <div class="nav-item"
             :class="{active:active===i}"
             v-for="(category,i) in newsCats"
             :key="i">
          <div class="nav-link"
               @click="$refs.list.$swiper.slideTo(i)">{{category.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper ref='list'
                :options='{autoHeight:true}'
                @slide-change='()=>{active=$refs.list.$swiper.realIndex}'>
          <swiper-slide v-for="(category,i) in newsCats"
                        :key="i">
            <slot name="items"
                  :category='category'></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    newsCats: { type: Array }
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
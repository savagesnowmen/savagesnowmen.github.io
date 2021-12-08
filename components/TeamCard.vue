
<template>
  <div class="mx-4">
    <div>
        <slot/>
    </div>
    <h5 class="text-center text-2xl mt-4">{{name}}</h5>
    <a v-if="twitter" :href="twitter">
    <img class="mx-auto w-8" src="~/assets/images/social-twitter-50.svg"/>
    </a>
  </div>
</template>
<script>
export default {
    props: {
        src: String,
        name: String,
        twitter: String
    }
};
</script>
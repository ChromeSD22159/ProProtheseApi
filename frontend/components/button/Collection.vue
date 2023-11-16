<template>
   <div>
        <ButtonLabelWithAnimatedIcon v-if="componentName == 'ButtonLabelWithAnimatedIcon'" :title="link.text" :url="link.href" :target="link.target" />
        <ButtonIconCard v-if="componentName == 'ButtonIconCard'" :link="link" />
        <ButtonFootLink v-if="componentName == 'BottonFootLink'" :link="link" class="text-gray-400" />
        <ButtonFootSocialIconLink v-if="componentName == 'BottonFootSocialIconLink'" :link="link" fill="fill-gray-400"/>
   </div>
</template>

<script>
export default {
  props: {
    link: Object,
  },
  computed: {
    componentName() {
      switch (this.link.component) {
        case 'ButtonLabelWithAnimatedIcon': return 'ButtonLabelWithAnimatedIcon'
        case 'ButtonIconCard': return 'ButtonIconCard'
        case 'BottonFootLink': return 'BottonFootLink'
        case 'BottonFootSocialIconLink': return 'BottonFootSocialIconLink'
        default: return 'ButtonLabelWithAnimatedIcon'
      }
    },
  },
};
</script>
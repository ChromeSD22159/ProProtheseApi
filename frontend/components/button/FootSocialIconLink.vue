<template>
    <a :href="link.href" :target="link.target" rel="noreferrer" class="text-gray-700 transition hover:opacity-75">
        <span class="sr-only">Facebook</span>

        <IconApple v-if="iconName == 'apple'" :classList="iconClasses" :class="fill" />
        <IconXing v-if="iconName == 'xing'" :classList="iconClasses" :class="fill" />
        <IconGithub v-if="iconName == 'github'" :classList="iconClasses" :class="fill" />
        <IconMail v-if="iconName == 'mail'" :classList="iconClasses" :class="fill" />
        <IconPhone v-if="iconName == 'phone'" :classList="iconClasses" :class="fill" />
        <IconInstagram v-if="iconName == 'instagram'" :classList="iconClasses" :class="fill" />
    </a>
</template>

<script>
export default {
  props: {
    link: Object,
    fill: String
  },
   computed: {
    iconName() {
        switch (this.link.icon) {
            case 'apple': return 'apple'
            case 'xing': return 'xing'
            case 'github': return 'github'
            case 'mail': return 'mail'
            case 'phone': return 'phone'
            case 'instagram': return 'instagram'
            default: return 'null'
        }
        // https://icon-sets.iconify.design/ph/phone/
    },
    iconClasses() {
        return "w-6 h-6 fill-gray-500 text-center mx-auto"
    }
  },
}
</script>
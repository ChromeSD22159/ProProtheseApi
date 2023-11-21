<template>
    <div class="h-24 w-24 fk-card rounded-lg">
         <NuxtLink :to="link.href" :target="link.target" class="h-full w-full flex flex-col justify-center content-center text-center gap-2 text-xs">
            <IconApple v-if="iconName == 'apple'" />
            <IconXing v-if="iconName == 'xing'" />
            <IconGithub v-if="iconName == 'github'" />
            <IconMail v-if="iconName == 'mail'" />
            <IconPhone v-if="iconName == 'phone'" />
            <IconInstagram v-if="iconName == 'instagram'" />
            <p class="text-white text-xs text-center">{{ link.text }}</p>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
    .fk-card {
         background: $bg_dark;
         transition: all ease-in-out 0.3s;
        
        a > * {
            transition: all ease-in-out 0.4s;
            fill: $accent;
            color: $accent;
        }

        p {
            margin: 0;
        }

        &:hover {
            background: $highlight;

            a > * {
                fill: $bg_dark
                ;
                color: $bg_dark;
            }
        }
    }
</style>

<script>
export default {
  props: {
    link: Object,
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
  },
};
</script>
<template>
    <footer>
        <div class="mx-auto pb-8" 
            :class="{ 
                'px-4': !props.padding, 
                'sm:px-6': !props.padding,
                'lg:px-8': !props.padding,
            }">
            <div class="pt-8 sm:flex sm:items-center sm:justify-between">
                    <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                        <li v-for="link in links" :key="link.id">
                            <ButtonCollection :link="link" />
                        </li>
                    </ul>

                    <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                        <li v-for="socialLink in socials" :key="socialLink.id">
                             <ButtonCollection :link="socialLink" />
                        </li>
                        <li>
                            <ButtonStatusBadge size="small"/>
                        </li>
                    </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    ul {
        a {
            color: red
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps(['padding']);

    const StrapiUrl = useStrapiUrl()

    const { data: links } = await useAsyncData('navigations', () => $fetch(StrapiUrl + '/navigations?filters[name][$eq]=FooterLinks&populate=*'), {
        transform: (data: any) => {
            if (data.data) {
                const links = data.data.map( (links: any) => links.attributes.links.flat() ).flat();
                return links ? links : null;
            } else {
                return null
            }

        }
    })

    const { data: socials } = await useAsyncData('navigationss', () => $fetch(StrapiUrl + '/navigations?filters[name][$eq]=FooterSocials&populate=*'), {
        transform: (data: any) => {
            if (data.data) {
                const socials = data.data.map( (links: any) => links.attributes.links.flat() ).flat();

                return socials ? socials : null;
            } else {
                return null
            }

        }
    })
</script>
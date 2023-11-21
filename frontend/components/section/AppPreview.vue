<template>
    <div class="flex flex-col relative gap-10 lg:px-0 mx-auto" :class="isObjectNotEmpty(fullSize) ? 'max-w-5xl' : 'max-w-2xl flex-1'">
        <div class="flex flex-col gap-5">
            <h2 v-if="content.titel" class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans">{{ content.titel }}</h2> 
            <Content :content="content.intro" /> 
        </div>

        <div v-for="(app, index) in content.apps" :key="app.id" :ref="`animateCta${index}`" :class="['flex', 'flex-col', 'mx-auto', 'gap-5', 'mx-auto']">
            <NuxtLink :to="`/app/${app.name.toLowerCase().replaceAll(' ', '-')}`" class="flex flex-col gap-7">
               <div>
                    <h3 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans">{{ app.name }}</h3>
                    <h4 class="text-sm antialiased tracking-wide font-sans text-accent">{{ app.subline }}</h4>
                </div>
                <ImageWithHover :image="app.image" :alt="app.subline" />
            </NuxtLink>
                <p class="antialiased">{{ app.description }}</p>

                <ul class="flex flex-row gap-5">
                    <li v-for="link in app.links" :key="link.id">
                        <ButtonCollection :link=link />
                    </li>
                </ul>
            

            <!-- test  -->
            <!-- <div class="cta-button left-0 bottom-0" ref="ctaButton">
                <div class="cta-button-wrapper">
                    <a class="cta-button-text" ref="ctaButtonText">{{ app.name }}</a>
                    <div class="icon-wrapper" ref="iconWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                    </div>
                </div>
            </div> -->
            <!--  -->

        </div>
    </div>
</template>

<script setup lang="ts">
    const { content, socialMedias, fullSize } = defineProps({
        content: { type: Object, default: () => {} },
        socialMedias: { type: Object, default: () => {} },
        fullSize: { type: Boolean, default: () => false },
    });

    /* 
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { Draggable } from 'gsap/Draggable'

    gsap.registerPlugin(ScrollTrigger)

    const animateCta = ref(null);
    const ctaButton = ref(null);
    const ctaButtonText = ref(null)
    const iconWrapper = ref(null)
    const duration = "0.35";
    const delay = "0.3";

    let ctx, tl;
    onMounted(() => {
        console.log(animateCta.value, tl)
        tl = gsap.timeline({
             scrollTrigger: {
                trigger: animateCta.value,
                start: "0% 80%",
                end: "80% 10%",
                toggleActions: "play none none reverse",
                markers:false
            },
            smoothChildTiming: true
        });

        tl.set(ctaButtonText.value, {
            padding: "0 1rem 0 1rem",
            opacity: 1,
            
            delay: 0.5,
            duration: duration
        }, "bounce")

         tl.to(ctaButtonText.value, {
            padding: "0",
            opacity: 0,
            width: "auto",
            duration: duration
        }, "bounce")

        tl.set(ctaButton.value, {
            width: "0",
            duration: duration
        }, "scale")

        tl.to(ctaButton.value, {
            opacity: 1,
            scale: 1,
            duration: duration
        }, "scale")
    })
    */
</script>

<style lang="scss" scoped>
    .cta-content {
        height: 100%;
        width: 100%;
    }

    .cta-button {
        position: sticky;
        right: 0;
        bottom: 2rem;
        display: block;
        cursor: pointer;
        width: 6rem;
        height: 6rem;
        //transform: scale(0.8);
        .cta-button-wrapper {
            padding: 0.5rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background: rgba(255,255,255,0.1);
            border-radius: 4rem;
            a { 
                font-size: 1em;
                color: white;
                white-space: nowrap;
                padding: 0;
                opacity: 0;
                width: 0;
            }

            .icon-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                background: $highlight;
                border-radius: 100%;
                padding: 0.5rem;
                .icon {
                    width: 2rem;
                    height: 2rem;
                    svg {
                        fill: white;
                    }
                }
            }
            
        }
    }
</style>
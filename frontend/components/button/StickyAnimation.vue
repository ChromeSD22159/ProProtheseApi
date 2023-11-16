<template>
    <div class="cta-button" ref="ctaButton">
        <div class="cta-button-wrapper">
            <a class="cta-button-text" ref="ctaButtonText">hola Content</a>
            <div class="icon-wrapper" ref="iconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </div>
        </div>
    </div>
</template>


<script setup>

    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { Draggable } from 'gsap/Draggable'

    gsap.registerPlugin(ScrollTrigger)

    //const animateCta = ref(null);
    const ctaButton = ref(null);
    const ctaButtonText = ref(null)
    const iconWrapper = ref(null)
    const duration = "0.35";
    const delay = "0.3";

    defineProps({
        apps: { type: Array, default: () => [] },
        modelValue: Object,
    })

    let ctx, tl;
    onMounted(() => {
        tl = gsap.timeline({
             scrollTrigger: {
                trigger: modelValue,
                start: "0% 80%",
                end: "80% 10%",
                toggleActions: "play none none reverse",
                markers:true
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
</script>

<style lang="scss" scoped>
    .cta-content {
        height: 100%;
        width: 100%;
    }

    .cta-button {
        position: absolute;
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
                .svg {
                    fill: none;
                    stroke-width: 1.5;
                    stroke: white;
                    width: 2rem;
                    height: 2rem;
                }
            }
            
        }
    }
</style>
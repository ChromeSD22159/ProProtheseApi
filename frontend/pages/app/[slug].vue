<template>
   <div>
    <NuxtLayout name="multi-row" :primarySticky="false" :secondarySticky="true">
        <template v-slot:primary>
             <div class="flex flex-col flex-1 mx-auto gap-10" ref="contentHeight">
                <div class="flex flex-col gap-2">
                    <h1 class="text-xl md:text-xl xl:text-3xl line-break fk-colored-text antialiased tracking-wide font-sans"> {{ app.feature.titel }} </h1>
                    <h2 class="text-sm md:text-md xl:text-xl line-break text-gray-500 antialiased tracking-wide font-sans"> {{ app.feature.subtitle }} </h2>
                    <p>{{app.feature.description}}</p>
                    
                    <NuxtLink v-if="isNotNullOrUndefined(app.feature.badge.data) && isNotNullOrUndefined(app.feature.appstore)" :to="app.feature.appstore" >
                            <img :src="buildImageUrl(app.feature.badge.data.attributes.url)" 
                                :alt="`${app.seo.title} im AppStore`" style="height: 40px" 
                            />
                    </NuxtLink>
                    
                </div>

                <div 
                    v-if="app.feature && app.feature.features && app.feature.features.length > 0" 
                    :class="{ 'flex': true, 'flex-col': true, 'gap-5': true, 'mb-10': isMobileViewport || isContentBiggerAsViewport }"
                >
                    <div v-for="(feature, index) in app.feature.features" :key="feature.id" @click="changeImage(index, feature.image )">
                            <PageCard
                            :content="feature"
                            :isActive="currentCard === index"
                            :class="'max-w-2xl flex-1 mx-auto'"
                            :isMobil="isMobileViewport"
                        />
                    </div>
                    
                </div>

                <PageFoot v-if="isMobileViewport"/>
            </div>
        </template>
        
        <template v-slot:secondary v-if="!isMobileViewport">
            <div class="h-full mx-auto my-auto flex flex-col justify-between">

                <div></div>

                <Transition name="bounce" mode="out-in">
                    <NuxtImg 
                    :key="currentImage" 
                    :src="currentImage" 
                    class="image"
                    alt="history screenshot vom iphone"
                    style="max-height: 480px"
                    />
                </Transition>

                <PageFoot />
            </div>
        </template>
    </NuxtLayout>
</div>
</template>


<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  40% {
    filter: blur(10px);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    filter: blur(0);
    transform: scale(1);
  }
}
</style>

<script setup> // http://192.168.0.227:1337/api/apps?populate=seo&filters[localizations][slug]=pro-prothese
import { onBeforeMount, onMounted } from "vue";

    const router = useRouter();
    const StrapiUrl = useStrapiMedia()    
    const titelBinding = ref('');

    var currentImage = ref("");
    var currentCard = ref(0);

    const buildImageUrl = (url) => `${StrapiUrl}${url}`;

    const changeImage = (index, url) => {        
        currentCard.value = index

         if (isNotNullOrUndefined(url)) {
            currentImage.value = buildImageUrl(url.data.attributes.url)
        }
    };

    /*  */
    const { findOne } = useStrapi();
    const { slug } = useRoute().params;

    const { data: app } = await useAsyncData(`${slug}-appdata`, async () => {
        try {
            const data = await findOne('apps', { 
                    filters: {
                        localizations: {
                            slug: slug,
                        }
                    },
                    fields: ['name', 'slug'],
                    populate: {
                        localizations: {
                        fields: ['name', 'slug', 'appStoreID', 'deepLink'],
                        populate: {
                            seo: {
                                fields: ['title', 'description', 'author'],
                            },
                            features: {
                                fields: ['titel','subtitle', 'description', 'appstore'],
                                populate: {
                                    features: {
                                        fields: ['titel', 'text'],
                                        populate: {
                                            icon: {
                                                fields: ['name', 'alternativeText', 'caption', 'url'],
                                            },
                                            image: {
                                                fields: ['name', 'alternativeText', 'caption', 'url'],
                                            }
                                        },
                                    },
                                    badge: {
                                        fields: ['name', 'alternativeText', 'url'],
                                    }
                                }
                            }
                        },
                        },
                    },
            })

            const transformData = (rawData) => {
               
                return rawData.data.map(item => {
                    const seo = item.attributes.localizations.data.map(localizedData => {
                        return localizedData.attributes.seo.map(seoItem => seoItem);
                    }).flat();

                     const features = item.attributes.localizations.data.map(localizedData => {
                        return localizedData.attributes.features.map(featureItem => featureItem);
                    }).flat();

                    const other = item.attributes.localizations.data.map(localizedData => {
                        return localizedData.attributes
                    }).flat();

                    if (features.length > 0) {
                        currentImage.value = buildImageUrl(features[0].features[0].image.data.attributes.url)
                    } else {
                        currentImage.value = "images/mockImages/screenshot-applewatch.webp"
                    }

                    const transformedData = {
                        seo: seo.length > 0 ? seo[0] : null,
                        feature: features.length > 0 ? features[0] : null,
                        other: other.length > 0 ? other[0] : null,
                    };

                    return transformedData
                });
            };

            const transformed = transformData(data)

            if (transformed.length >= 0) {
                return transformed[0];
            } else {
                return null
            }
        } catch (err) {
            console.error('Fehler bei der Datenabfrage:', err);
            throw err;
        }

    })
    /*  */

    onMounted(() => {
        const inputString = router.currentRoute.value.params.slug.replace(/_/g, ' ');
        titelBinding.value = inputString.replace(/\b\w/g, (match) => match.toUpperCase());

        if (app.value && app.value.seo) {
            useSeoMeta({
                title:          `${app.value.seo.title} App von ${app.value.seo.author}`,
                ogTitle:        `${app.value.seo.title} App von ${app.value.seo.author}`,
                description:    `${app.value.seo.description}`,
                ogDescription:  `${app.value.seo.description}`,
                ogImage:        'https://frederikkohler.de/image.png',
                author:         `${app.value.seo.author}`
            });
            
            setHeadMeta(app.value.other.appStoreID, app.value.other.deepLink);
        }

        useHead({
            htmlAttrs: {
                lang: 'de'
            }
        });

         
    });

    const setHeadMeta = (appStoreID, deepLink) => {
        
        if (appStoreID && deepLink) {
            const head = document.head || document.getElementsByTagName('head')[0];

            const appleItunesAppMeta = document.createElement('meta');
            appleItunesAppMeta.name = 'apple-itunes-app';
            appleItunesAppMeta.content = `app-id=${appStoreID}, app-argument=${deepLink}statistic`;
            head.appendChild(appleItunesAppMeta);
        } 
        
    };

    /* Sticky >= large */
    const viewportWidth = ref(window.innerWidth || document.documentElement.clientWidth);
    const viewportHeight = ref(window.innerHeight || document.documentElement.clientHeight);
    const isMobileViewport = ref(viewportWidth.value <= 1024);
    const contentHeight = ref(null);
    const isContentBiggerAsViewport = ref(isContentHeigherAsViewport(getElementSize(contentHeight), viewportHeight.value));

    const updateViewportWidth = () => {
        viewportWidth.value = window.innerWidth || document.documentElement.clientWidth;
        isMobileViewport.value = viewportWidth.value <= 1024;
        isContentBiggerAsViewport.value = isContentHeigherAsViewport(getElementSize(contentHeight).height, window.innerHeight || document.documentElement.clientHeight)
    };

    onMounted(() => {
        window.addEventListener('resize', updateViewportWidth);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateViewportWidth);
    });
    /* Sticky >= large */
</script>
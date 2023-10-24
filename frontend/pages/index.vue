<template>
    <div class="page">
       <div class="wrapper">
           <div>
                <h1>Hallo, ich bin Frederik.<br>Designer & Entwickler.</h1>
                <p>In Waldshut-Tiengen zuhause, bringe ich als leidenschaftlicher Frontend- und iOS-Entwickler meine kreativen Ideen in die Welt der digitalen Technologien ein. 
                    Mit meinen Kompetenzen in Vue.js, Strapi, SwiftUI und WordPress gestalte ich fesselnde Benutzererlebnisse und entwickle innovative Apps.</p> 
                <p>Mein Weg begann als Mediengestalter für digitale und gedruckte Medien in Hamburg, und seitdem habe ich meine Leidenschaft für die Gestaltung und Umsetzung digitaler 
                    Projekte kontinuierlich erweitert. Wenn Sie nach einem Entwickler suchen, der vielseitige Fähigkeiten und kreative Lösungen bietet, stehe ich gerne zur Verfügung. </p>
                <p>Wie kann ich Ihr nächstes Projekt zum Leben erwecken?</p>
           </div>

             <div></div>
       </div>
    </div>
</template>

<style lang="scss" scoped>
    .page {
        padding: 2rem;

        .wrapper > div {
            max-width: 100%;
        }

        @media screen and (min-width: 770px) {
            .wrapper > div {
                max-width: 50%;
            }
        }

        .wrapper {
            h1 {
                background: -webkit-linear-gradient(92deg, #e1882a 25%, #7b8bdc );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            p {
                display: inline-block;
                margin: 0 0 0.95rem;
                padding: 0;
                color: #b7b2b6;
                line-height: 1.65em;
                font-size: var(--size-font-regular);
                font-weight: 500;
                width: 100%;
                font-family: $roboto;
                word-wrap: break-word;
            }
        }
    }
</style>


<script setup lang="ts">
useSeoMeta({
  title: 'Freiberuflicher Web Designer & Software Entwickler',
  ogTitle: 'Freiberuflicher Web Designer & Software Entwickler',
  description: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
  ogDescription: 'Suchen Sie Entwickler, UX/IX-Designer oder Hilfe bei Websites? Brauchen Sie Unterstützung bei Software Projekten oder bei Ihrer Website?',
  ogImage: 'https://frederikkohler.de/image.png',
  author: 'Frederik Kohler, Portfolio'
})
</script>
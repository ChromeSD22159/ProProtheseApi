<template>
    <div class="page">
        <div class="wrapper">
          <div>
            <h1>Neues Projekt starten</h1>
            <p>Lerne mich und meine Arbeit in einem unverbindlichen Erstgespräch kennen und stelle mir dein Projekt im Detail vor.</p> 
            <p>Hierzu erstelle einfach eine Projektanfrage und erzähle mir einige Details zu deinem Anliegen. Zusammen werden wir deine Probleme lösen und damit dein Unternehmen auf die nächste Stufe in der digitalen Welt kommt. Ich freue mich dich und dein Projekt kennen zu lernen.</p>
          </div>
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
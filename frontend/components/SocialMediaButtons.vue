<template>
  <div>
    <ul v-if="links.length !== null" class="grid grid-cols-3 xl:grid-cols-4 gap-4"> <!--class="flex flex-wrap flex-row justify-start pb-7 gap-7 md:gap-16">-->
      <li v-for="link in links" :key="link.id">
          <ButtonCollection :link=link />
      </li>
    </ul>

    <p v-else class="fk-text-highlight">Lade soziale Medien...</p>
  </div>
</template>

<script>
export default {
  props: ['links'],
}
</script>
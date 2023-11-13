<template>
    <button @click.once="callback" class="fk-button shadow fk-bg-highlight hover:fk-text-highlight focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded w-full" type="button">
        {{ text }}
    </button>
</template>

<style scoped lang="scss">
    .fk-button {
        transition: all ease-in-out .3s;
        color: rgb(0, 0, 0);

        &:hover {
            color: rgb(40, 40, 40);
            background: $highlightHover;
        }
    }
</style>

<script setup>
    const props = defineProps({
        text: { type: String, default: 'text' },
    });

   /* const { emit } = defineEmits();

    const callback = () => {
        // Hier können Sie das Event-Objekt manuell erstellen, wenn es benötigt wird
        const event = new Event('click');
        
        // Dann können Sie das Event-Objekt an $emit übergeben
        emit('click', event);
    };
    */
</script>
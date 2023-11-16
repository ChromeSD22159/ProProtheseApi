<template>    
    <section v-html="$markdown.render(content)" class="flex flex-col gap-3 content" /> 
</template>

<style lang="scss" scoped>
    .content > h6 {
       padding: 20px 0 0 0;
    }
</style>

<script>
import MarkdownIt from 'markdown-it';

export default {
  props: {
    content: {
      type: [String, Number, Object, Array],
      default: "",
    },
  },
  methods: {
    renderMarkdown(content) {
      return $markdownrender(content);
    },
  },
};
</script>

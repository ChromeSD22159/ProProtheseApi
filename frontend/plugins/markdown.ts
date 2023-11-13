import md from 'markdown-it';

export default defineNuxtPlugin( () => {
    const renderer = md({
        linkify: true,
        html: true
    }).disable(['code']);

    return {
        provide: {
            markdown: renderer
        }
    }
});
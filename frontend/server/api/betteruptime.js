export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    //const betterUptimePages = JSON.parse(config.BETTERUPTIMEPAGES);

    return await $fetch('https://betteruptime.com/api/v2/status-pages/174778', {
        headers: {
            Authorization: `Bearer ${config.betterUptimeToken}`
        },
    }
})
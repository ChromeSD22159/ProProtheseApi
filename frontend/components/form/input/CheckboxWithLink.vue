<template>
<div :class="(fullSize ? 'sm:col-span-2' : 'sm:col-span-1')"> 
    <div class="flex items-start mb-4">
         <input 
            type="checkbox" 
            :name="name" 
            :checked="checked"
            @click="clickHandler"
            :class="[
                'w-4',
                'h-4',
                'rounded',
                accentColor
            ]" 
        >
        
        <label 
            :for="name" 
            :class="[
                'ml-2',
                'text-sm',
                'font-medium',
                textColor,
                'dark:text-gray-300',
            ]">
            
            {{ textBefore }} 
            
            <a :href="ahref" :class="[
                textColor,
                'hover:underline'
            ]">{{ atext }}</a>
            {{ textAfter }}
        </label>
    </div>
</div>
</template>

<script>
export default 
{
    props:   {
        name: {  type: String, required: true  },
        checked: { type: Boolean },

        textBefore: { type: String, default: '#' },
        textAfter: { type: String, default: '#' },
        ahref: { type: String, default: '#' },
        atext: { type: String, default: '#' },

        textColor: { type: String, default: 'text-gray-500' },
        accentColor: { type: String, default: 'text-gray-500' },

        fullSize: { type: Boolean, default: false },
    }, 
    methods: {
        clickHandler(e) {
            this.$emit("toggle");
        }
    }
}
</script>
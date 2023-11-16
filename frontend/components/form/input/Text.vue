<template>
    <div :class="(fullSize ? 'sm:col-span-2' : 'sm:col-span-1')"> 
        <label :for="for" :class="['block', 'text-sm', 'font-semibold', 'leading-6', color]">
            {{ placeholder }}
        </label>
        

        <div :class="[
            'mt-2.5',
             'border',
            { 'focused': focused }
        ]">

          <input 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="onFocus"
            @blur="onBlur"
            :type="type" 
            :name="placeholder" 
            :id="placeholder" 
            autocomplete="given-name" 
            :class="[
                'block',
                'w-full',
                'rounded-md', 
                'border-0',
                'px-3.5', 
                'py-2', 
                color,
                'shadow-sm',
               'placeholder:text-gray-400',
           
                'sm:text-sm',
                'sm:leading-6',
            ]">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    for: { type: String, default: '' },
    color: { type: String, default: 'text-gray-500' },
    fullSize: { type: Boolean, default: false },
});

defineEmits(['update:modelValue'])

const focused = ref(false);

const onFocus = () => {
  focused.value = true; // Toggle the value
};

const onBlur = () => {
  focused.value = false;
};
</script>

<style scoped>
</style>
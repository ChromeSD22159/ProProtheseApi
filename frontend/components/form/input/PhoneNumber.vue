<template>
    <div :class="(fullSize ? 'sm:col-span-2' : 'sm:col-span-1')"> 
        <label :for="for" :class="['block', 'text-sm', 'font-semibold', 'leading-6', color ?? 'text-gray-500']">
            {{ placeholder }}
        </label>
        <div :class="[
            'relative',
            'mt-2.5',
             'border',
            { 'focused': focused }]">

          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" :class="['h-full', 'rounded-md', 'border-0', 'bg-transparent', 'bg-none', 'py-0', 'pl-4', 'pr-9', color, 'focus:ring-2', 'focus:ring-inset', 'focus:ring-indigo-600', 'sm:text-sm']">
                <option>DE</option>
                <option>CH</option>
                <option>AT</option>
            </select>
            
          </div>
          <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
             @focus="onFocus"
            @blur="onBlur"
            :type="type ?? 'text'" 
            :name="placeholder ?? ''" 
            :id="placeholder ?? ''" 
            autocomplete="tel" 
            :class="[
                'block',
                'w-full',
                'rounded-md',
                'border-0',
                'px-3.5',
                'py-2',
                'pl-24', 
                'shadow-sm',
                color,
                'ring-gray-300',
                'placeholder:text-gray-400',
                'sm:text-sm',
                'sm:leading-6',
            ]"
            >
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    for: { type: String, default: '' },
    color: { type: String, default: "text-gray-500" },
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
<template>
  <div :class="{ 'sm:col-span-2': fullSize, 'sm:col-span-1': !fullSize }"> 
    <label :for="for" :class="{ 'block': true, 'text-sm': true, 'font-semibold': true, 'leading-6': true, [color]: true }">
      {{ placeholder }}
    </label>

    <div :class="[
            'mt-2.5',
             'border',
            { 'focused': focused }]">

      <textarea
        :value="modelValue"
        :rows="rows"
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
          'placeholder:text-gray-800',
          'sm:text-sm',
          'sm:leading-6'
        ]"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  rows: { type: String, default: 5 },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  for: { type: String, default: '' },
  color: { type: String, default: 'text-gray-500' },
  fullSize: { type: Boolean, default: false },
});

const focused = ref(false);

const onFocus = () => {
  focused.value = true; // Toggle the value
};

const onBlur = () => {
  focused.value = false;
};
</script>
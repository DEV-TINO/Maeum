<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

const updateInputValue = (value) => {
  inputValue.value = value;
  emit("update:modelValue", value);
};
</script>

<template>
  <input
    class="bg-box-color outline-none h-12 rounded-xl px-2"
    :value="inputValue"
    @input="(event) => updateInputValue(event.target.value)"
  />
</template>

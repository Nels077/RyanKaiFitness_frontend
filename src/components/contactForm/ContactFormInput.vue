<template>
  <div class="inputParent flex flex-col">
    <label :for="id" class="block text-sm font-medium">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full text-creamy_yellow bg-input_bg font-bold p-2 focus:outline-none focus:border-blue-500"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {type: String, required: true},
  id: {type: String, required: true},
  type: {type: String, default: "text"},
  modelValue: {type: String, default: ""},
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.inputParent {
  gap: 5px;
  padding: 1rem;
}

.inputParent input {
  border-radius: .5rem;
}
</style>

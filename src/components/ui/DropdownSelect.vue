<template>
  <div ref="rootRef" class="dropdown-select">
    <button
      :id="id"
      ref="triggerRef"
      type="button"
      class="dropdown-select__trigger"
      :class="{ 'dropdown-select__trigger--placeholder': !selectedOption }"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-controls="listId"
      :aria-activedescendant="isOpen ? activeOptionId : undefined"
      :aria-label="ariaLabel"
      :title="selectedLabel"
      @click="toggle"
      @keydown="handleTriggerKeydown"
    >
      <span class="dropdown-select__value">{{ selectedLabel }}</span>
      <ChevronDown class="dropdown-select__chevron" :class="{ 'rotate-180': isOpen }" />
    </button>

    <transition name="dropdown-select">
      <div
        v-if="isOpen"
        :id="listId"
        ref="listRef"
        class="dropdown-select__list"
        role="listbox"
        tabindex="-1"
        :aria-label="ariaLabel"
        @keydown="handleListKeydown"
        @wheel.stop
        @touchmove.stop
      >
        <button
          v-for="(option, index) in options"
          :id="optionId(index)"
          :key="option.value"
          type="button"
          class="dropdown-select__option"
          :class="{
            'dropdown-select__option--active': activeIndex === index,
            'dropdown-select__option--selected': modelValue === option.value,
          }"
          role="option"
          :aria-selected="modelValue === option.value"
          :title="option.label"
          tabindex="-1"
          @mouseenter="activeIndex = index"
          @click="selectOption(option.value)"
        >
          <span class="dropdown-select__option-label">{{ option.label }}</span>
          <Check v-if="modelValue === option.value" class="dropdown-select__check" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Check, ChevronDown } from 'lucide-vue-next';

type DropdownOption = {
  value: string;
  label: string;
};

const props = defineProps<{
  id: string;
  modelValue: string;
  options: DropdownOption[];
  placeholder: string;
  ariaLabel: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [value: string];
}>();

const rootRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);
const listRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const activeIndex = ref(0);

const listId = computed(() => `${props.id}-listbox`);
const selectedOption = computed(() => props.options.find((option) => option.value === props.modelValue));
const selectedLabel = computed(() => selectedOption.value?.label ?? props.placeholder);
const activeOptionId = computed(() => optionId(activeIndex.value));

function optionId(index: number) {
  return `${props.id}-option-${index}`;
}

function selectedIndex() {
  const index = props.options.findIndex((option) => option.value === props.modelValue);
  return index >= 0 ? index : 0;
}

async function open() {
  if (!props.options.length) return;
  activeIndex.value = selectedIndex();
  isOpen.value = true;
  await nextTick();
  listRef.value?.focus({ preventScroll: true });
  document.getElementById(optionId(activeIndex.value))?.scrollIntoView({ block: 'nearest' });
}

function close(restoreFocus = true) {
  isOpen.value = false;
  if (restoreFocus) nextTick(() => triggerRef.value?.focus({ preventScroll: true }));
}

function toggle() {
  if (isOpen.value) close();
  else open();
}

function moveActive(direction: number) {
  if (!props.options.length) return;
  activeIndex.value = (activeIndex.value + direction + props.options.length) % props.options.length;
  nextTick(() => document.getElementById(optionId(activeIndex.value))?.scrollIntoView({ block: 'nearest' }));
}

function selectOption(value: string) {
  if (value !== props.modelValue) {
    emit('update:modelValue', value);
    emit('change', value);
  }
  close();
}

function handleTriggerKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    open().then(() => {
      if (event.key === 'ArrowUp') moveActive(-1);
    });
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggle();
  }
}

function handleListKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    moveActive(event.key === 'ArrowDown' ? 1 : -1);
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    activeIndex.value = event.key === 'Home' ? 0 : props.options.length - 1;
    nextTick(() => document.getElementById(optionId(activeIndex.value))?.scrollIntoView({ block: 'nearest' }));
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    const option = props.options[activeIndex.value];
    if (option) selectOption(option.value);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    close();
  } else if (event.key === 'Tab') {
    close(false);
  }
}

function handleOutsidePointer(event: PointerEvent) {
  if (isOpen.value && rootRef.value && !rootRef.value.contains(event.target as Node)) close(false);
}

watch(() => props.modelValue, () => {
  activeIndex.value = selectedIndex();
});

onMounted(() => document.addEventListener('pointerdown', handleOutsidePointer));
onBeforeUnmount(() => document.removeEventListener('pointerdown', handleOutsidePointer));
</script>

<style scoped>
.dropdown-select {
  position: relative;
  width: 100%;
  min-width: 0;
}

.dropdown-select__trigger {
  display: flex;
  width: 100%;
  min-width: 0;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #f8fafc;
  padding-inline: 20px 16px;
  color: #193661;
  font-size: .875rem;
  font-weight: 600;
  text-align: start;
  transition: border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}

.dropdown-select__trigger:hover { border-color: #7dd3fc; }
.dropdown-select__trigger:focus-visible { border-color: #0ea5e9; outline: none; box-shadow: 0 0 0 2px rgba(14, 165, 233, .24); }
.dropdown-select__trigger--placeholder { color: #94a3b8; }
.dropdown-select__value,
.dropdown-select__option-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dropdown-select__chevron { width: 20px; height: 20px; flex: none; color: #64748b; transition: transform 180ms ease; }

.dropdown-select__list {
  position: absolute;
  z-index: 80;
  inset-inline: 0;
  top: calc(100% + 6px);
  width: 100%;
  max-width: 100%;
  max-height: min(17.5rem, 42dvh);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  touch-action: pan-y;
  border: 1px solid #dbe5f0;
  border-radius: 12px;
  background: #fff;
  padding: 6px 6px 10px;
  box-shadow: 0 18px 38px rgba(25, 54, 97, .18);
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 transparent;
  outline: none;
}

.dropdown-select__list::-webkit-scrollbar { width: 7px; }
.dropdown-select__list::-webkit-scrollbar-track { background: transparent; }
.dropdown-select__list::-webkit-scrollbar-thumb { border: 2px solid transparent; border-radius: 999px; background: #94a3b8; background-clip: padding-box; }

.dropdown-select__option {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 9px;
  padding: 10px 12px;
  color: #334155;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.35;
  text-align: start;
}

.dropdown-select__option:hover,
.dropdown-select__option--active { background: #f0f9ff; color: #193661; }
.dropdown-select__option--selected { color: #0369a1; }
.dropdown-select__check { width: 16px; height: 16px; flex: none; color: #0ea5e9; }

:global(.portfolio-shell[data-theme='dark']) .dropdown-select__trigger {
  border-color: rgba(68, 200, 245, .28);
  background: rgba(34, 83, 127, .82);
  color: #fff;
}
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__trigger--placeholder { color: #c0b0a3; }
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__chevron { color: #e2dddb; }
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__list {
  border-color: rgba(68, 200, 245, .28);
  background: #22537f;
  box-shadow: 0 18px 42px rgba(9, 27, 50, .42);
  scrollbar-color: #44c8f5 transparent;
}
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__list::-webkit-scrollbar-thumb { background: #44c8f5; background-clip: padding-box; }
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__option { color: #e2dddb; }
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__option:hover,
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__option--active { background: rgba(68, 200, 245, .16); color: #fff; }
:global(.portfolio-shell[data-theme='dark']) .dropdown-select__option--selected { color: #8edfff; }

.dropdown-select-enter-active,
.dropdown-select-leave-active { transition: opacity 150ms ease, transform 150ms ease; }
.dropdown-select-enter-from,
.dropdown-select-leave-to { opacity: 0; transform: translateY(-4px); }

@media (max-width: 480px) {
  .dropdown-select__list { max-height: min(15rem, 38dvh); }
}

@media (prefers-reduced-motion: reduce) {
  .dropdown-select-enter-active,
  .dropdown-select-leave-active,
  .dropdown-select__chevron { transition-duration: .01ms; }
}
</style>

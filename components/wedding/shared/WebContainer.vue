<template>
    <component :is="props.as" :class="cn('container max-w-screen-sm mx-auto', props.class)">
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AsTag } from "reka-ui";

interface Props {
    class?: HTMLAttributes["class"];
    as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
    class: "",
    as: "div",
});
</script>

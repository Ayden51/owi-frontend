<template>
    <component :is="props.as" class="flex items-center space-x-2">
        <img :src="logo" alt="E-Wedding by CTPG logo" width="36" height="36" loading="eager" />
        <div class="flex flex-col">
            <span class="font-bold text-pink-500 text-lg/none">E-Wedding</span>
            <span class="text-gray-500 text-xs/none">by CTPG</span>
        </div>
    </component>
</template>

<script setup lang="ts">
import type { AsTag } from "reka-ui";

interface Props {
    as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
    as: "div",
});

const logo = useLogoPreload();
</script>

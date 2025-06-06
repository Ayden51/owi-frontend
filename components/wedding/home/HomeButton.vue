<template>
    <component :is="h(Button, buttonProps, () => props.btnChildren ?? props.text)" />
</template>

<script setup lang="ts">
import { h } from "vue";
import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LandingCtaButton, ButtonProps } from "@/components/wedding/types";

const homeButtonVariants = cva(
    "px-10 py-6 text-lg font-semibold transition-all duration-500 rounded-full shadow-lg hover:shadow-xl",
    {
        variants: {
            variant: {
                primary: "text-white bg-pink-500 hover:bg-pink-600",
                secondary: "text-pink-500 bg-white hover:bg-pink-500 hover:text-white",
                tertiary: "border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

const props = withDefaults(defineProps<LandingCtaButton>(), {
    type: "primary",
    btnChildren: undefined,
});

const buttonProps = computed(
    (): ButtonProps => ({
        as: "a",
        ...props.linkProps,
        size: "lg",
        variant: props.type === "tertiary" ? "outline" : "default",
        ...props.btnProps,
        class: cn(homeButtonVariants({ variant: props.type }), props.btnProps?.class),
    })
);
</script>

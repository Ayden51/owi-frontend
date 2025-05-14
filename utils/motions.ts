import type { Transition, MotionVariants } from "@vueuse/motion";

const defaultTransition: Transition = {
    duration: 800,
    ease: "easeInOut",
};

export const motionDirectives = {
    "w-fade-up": {
        initial: {
            y: 100,
            opacity: 0,
        },
        visibleOnce: {
            y: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-down": {
        initial: {
            y: -100,
            opacity: 0,
        },
        visibleOnce: {
            y: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-left": {
        initial: {
            x: 100,
            opacity: 0,
        },
        visibleOnce: {
            x: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-right": {
        initial: {
            x: -100,
            opacity: 0,
        },
        visibleOnce: {
            x: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
} satisfies Record<string, MotionVariants<never>>;

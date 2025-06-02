import type { Transition, MotionVariants } from "@vueuse/motion";

export const defaultTransition: Transition = {
    duration: 800,
    ease: "easeInOut",
};

export const motionDirectives = {
    "w-fade": {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-once": {
        initial: {
            opacity: 0,
        },
        visibleOnce: {
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-up": {
        initial: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-up-once": {
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
        visible: {
            y: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-down-once": {
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
        visible: {
            x: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-left-once": {
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
        visible: {
            x: 0,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-fade-right-once": {
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
    "w-pop": {
        initial: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: defaultTransition,
        },
    },
    "w-pop-once": {
        initial: {
            scale: 0,
            opacity: 0,
        },
        visibleOnce: {
            scale: 1,
            opacity: 1,
            transition: defaultTransition,
        },
    },
} satisfies Record<string, MotionVariants<never>>;

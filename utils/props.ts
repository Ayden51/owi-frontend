import type { Updater } from "@tanstack/vue-table";
import type { Ref } from "vue";

export function valueUpdater<T extends Updater<unknown>>(updaterOrValue: T, ref: Ref) {
    ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
}

export function removeKeysFromProps(props: { [key: string]: unknown }, ...keys: string[]) {
    return Object.fromEntries(Object.entries(props).filter(([key]) => keys.indexOf(key) === -1));
}

/**
 * Helper function to process sub-properties.
 * If the prop's sub-property is explicitly null, it returns null.
 * Otherwise, it merges the default sub-property with the prop's sub-property.
 * If the prop's sub-property is undefined, it effectively returns the default.
 *
 * @template T - The type of the sub-property object.
 * @param {T} defaultSubProperty - The default value for the sub-property.
 * @param {T | null | undefined} propSubProperty - The value from props for the sub-property.
 * @returns {T | null} - The processed sub-property.
 */
export const processSubProperty = <T extends object>(
    defaultSubProperty: T,
    propSubProperty: T | null | undefined
): T | null => {
    if (propSubProperty === null) {
        return null;
    }

    return { ...defaultSubProperty, ...propSubProperty };
};

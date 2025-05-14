<script setup lang="ts">
import { UtensilsCrossed } from "lucide-vue-next";
import type { EventDetailsData } from "../types/wedding";

const props = defineProps<{
    data: EventDetailsData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: EventDetailsData = {
    title: "Wedding Day",
    groomEvent: {
        title: "Tiệc cưới nhà trai",
        time: "17h-18h pm",
        date: "27/10/2018",
        address: "Tại Sảnh Continental Patio, Continental Hotel, Quận 1, TP. Hồ Chí Minh",
        icon: UtensilsCrossed,
    },
    brideEvent: {
        title: "Tiệc cưới nhà gái",
        time: "9h-10h am",
        date: "27/10/2018",
        address: "Tại tư gia, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh",
        icon: UtensilsCrossed,
    },
    groomMap: {
        title: "Địa chỉ nhà trai",
        address: "132-134 Đồng Khởi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.441698161218!2d106.70112384107864!3d10.777442948482655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48098c0da3%3A0x71bd0afc663e612e!2sHotel%20Continental%20Saigon!5e0!3m2!1svi!2s!4v1743489900707!5m2!1svi!2s",
    },
    brideMap: {
        title: "Địa chỉ nhà gái",
        address: "72/53 Nguyễn Văn Thương, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.129700178137!2d106.71789951144015!3d10.801376989304458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752954601a59e7%3A0xef2bd57d27c593f7!2sCong%20Thanh%20Phat%20Group!5e0!3m2!1svi!2s!4v1743492212889!5m2!1svi!2s",
    },
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    groomEvent: processSubProperty(defaultData.groomEvent!, props.data?.groomEvent),
    brideEvent: processSubProperty(defaultData.brideEvent!, props.data?.brideEvent),
    groomMap: processSubProperty(defaultData.groomMap!, props.data?.groomMap),
    brideMap: processSubProperty(defaultData.brideMap!, props.data?.brideMap),
}));
</script>

<template>
    <WebSection class="p-6 bg-white">
        <WebContainer>
            <slot name="beforeStart" />

            <div class="grid items-center justify-center grid-cols-5 gap-4 mt-2 mb-6 sm:grid-cols-4">
                <NuxtPicture
                    v-motion-w-fade-right
                    src="/images/mics/stars-1.png"
                    alt="Wedding star decoration"
                    loading="lazy"
                    class="w-6 h-6 ms-auto sm:w-8 sm:h-8"
                />
                <h2
                    v-motion-w-fade-down
                    :delay="100"
                    class="col-span-3 text-3xl text-center sm:text-4xl font-brittany-signature text-primary-dark sm:col-span-2"
                >
                    {{ data.title }}
                </h2>
                <NuxtPicture
                    v-motion-w-fade-left
                    :delay="200"
                    src="/images/mics/stars-1.png"
                    alt="Wedding star decoration"
                    loading="lazy"
                    class="w-6 h-6 me-auto sm:w-8 sm:h-8"
                />
            </div>

            <slot name="afterTitle" />

            <!-- Add padding-left for icon space -->
            <template v-if="data.groomEvent && data.brideEvent">
                <div class="relative max-w-lg pl-12 mx-auto mb-12 sm:pl-14">
                    <div
                        v-motion-w-fade-up
                        :delay="300"
                        class="absolute left-4 sm:left-[1.125rem] top-0 h-full w-0.5 bg-primary opacity-50 -translate-x-1/2"
                    />

                    <div
                        v-for="(event, index) in [data.groomEvent, data.brideEvent]"
                        :key="index"
                        class="relative mb-8"
                    >
                        <div
                            v-motion-w-fade-up
                            :delay="400 + index * 100"
                            class="absolute top-0 flex items-center justify-center w-8 h-8 rounded-full sm:w-9 sm:h-9 -left-12 sm:-left-14 bg-primary text-primary-foreground"
                        >
                            <component :is="event.icon" :size="16" />
                        </div>
                        <h3
                            v-motion-w-fade-right
                            :delay="500 + index * 100"
                            class="mb-1 text-2xl font-semibold sm:text-3xl font-dancing-script"
                        >
                            {{ event.title }}
                        </h3>
                        <p
                            v-motion-w-fade-right
                            :delay="600 + index * 100"
                            class="mb-1 text-sm sm:text-base font-montserrat text-primary-dark"
                        >
                            {{ event.time }} | {{ event.date }}
                        </p>
                        <p
                            v-motion-w-fade-right
                            :delay="700 + index * 100"
                            class="text-sm sm:text-base font-montserrat text-primary-dark"
                        >
                            {{ event.address }}
                        </p>
                    </div>
                </div>
            </template>

            <slot name="afterEvent" />

            <template v-if="data.groomMap && data.brideMap">
                <div
                    v-for="(map, index) in [data.groomMap, data.brideMap]"
                    :key="index"
                    v-motion-w-fade-up
                    :delay="400 + index * 100"
                    class="mt-6 text-center"
                >
                    <h3 class="mb-2 text-2xl sm:text-3xl font-dancing-script">
                        {{ map.title }}
                    </h3>
                    <p class="mb-4 text-sm sm:text-base font-montserrat text-primary-dark">{{ map.address }}</p>
                    <AspectRatio :ratio="4 / 3">
                        <iframe
                            :src="map.embedUrl"
                            width="400"
                            height="300"
                            allow="fullscreen"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="w-full h-full"
                        />
                    </AspectRatio>
                </div>
            </template>

            <slot name="afterEnd" />
        </WebContainer>
    </WebSection>
</template>

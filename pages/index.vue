<script setup lang="ts">
import type {
    EventDetailsData,
    GalleryData,
    GiftInfoData,
    InvitationData,
    MessageData,
    SaveTheDateData,
    ThankYouData,
} from "../components/wedding/types/wedding";

// Initialize with empty objects or default structures matching the interfaces
const invitationData = ref<InvitationData>({ groom: {}, bride: {} });
const saveTheDateData = ref<SaveTheDateData>({ date: {} });
const messageData = ref<MessageData>({}); // OK as is, no required nested objects
const eventDetailsData = ref<EventDetailsData>({
    groomEvent: {
        title: "Welcome Drink and BRIDE & GROOM photograph",
        time: "17h - 18h30",
        address: "Tại Sảnh Continental Patio",
    },
    brideEvent: {
        title: "Primary Meal",
        time: '18h30 - "Until The Time Is Through"',
        address: "Continental Hotel Saigon, Quận 1, TP.HCM",
    },
    groomMap: null,
    brideMap: null,
});
const giftInfoData = ref<GiftInfoData>({ groom: {}, bride: {} });
const galleryData = ref<GalleryData>({ images: [] }); // OK as is, images array is optional
const thankYouData = ref<ThankYouData>({}); // OK as is, all properties are optional

// TODO: Implement API fetching logic (e.g., in onMounted or using useFetch/useAsyncData)
// import { onMounted } from 'vue';
// import { fetchWeddingData } from '~/composables/api'; // Example API composable

// onMounted(async () => {
//   try {
//     // const allData = await fetchWeddingData(); // Assuming this fetches all needed data
//     // invitationData.value = allData.invitation;
//     // saveTheDateData.value = allData.saveTheDate;
//     // messageData.value = allData.message;
//     // eventDetailsData.value = allData.eventDetails;
//     // giftInfoData.value = allData.giftInfo;
//     // galleryData.value = allData.gallery;
//     // thankYouData.value = allData.thankYou;
//   } catch (error) {
//     console.error("Failed to fetch wedding data:", error);
//     // Handle error appropriately (e.g., show error message)
//   }
// });

// Note: Using default data within components for now, so empty refs here are okay for initial render.
</script>

<template>
    <main class="min-h-screen bg-green-950">
        <!-- Added max-width for mobile-first view -->
        <InvitationIntroA :data="invitationData" />
        <SaveTheDateA :data="saveTheDateData" />
        <MessageA :data="messageData" />
        <EventDetailsA :data="eventDetailsData">
            <template #afterEnd>
                <div v-motion-w-fade-down :delay="900" class="flex items-center justify-center mt-6">
                    <NuxtImg
                        src="/images/mics/continental-hotel-saigon-logo.png"
                        alt="Continental Hotel Saigon Logo"
                        loading="lazy"
                        width="3839"
                        height="2145"
                        quality="100"
                        densities="x1"
                        class="w-64"
                    />
                </div>
            </template>
        </EventDetailsA>
        <GiftInfoA :data="giftInfoData" />
        <GalleryA :data="galleryData" />
        <ThankYouA :data="thankYouData" />
    </main>
</template>

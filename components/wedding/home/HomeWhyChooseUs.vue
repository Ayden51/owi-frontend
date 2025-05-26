<template>
    <section id="benefits" class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div
                v-motion
                class="text-center mb-16"
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                    {{ data.title }}
                </h2>
                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Cho ngày cưới của bạn trở nên ấn tượng hơn, dễ dàng chuyển tiếp yêu cầu của bạn để đăng chia sẻ đến
                    mọi người, và dễ sử dụng trong suốt quá trình được lưu giữ mãi theo thời gian.
                </p>
            </div>

            <!-- Benefits Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div
                    v-for="(benefit, index) in data.benefits"
                    :key="index"
                    v-motion
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    :initial="{ opacity: 0, y: 50 }"
                    :visible-once="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 600,
                            delay: index * 150 + 200,
                        },
                    }"
                >
                    <!-- Benefit Illustration -->
                    <div class="mb-6 flex justify-center">
                        <div
                            class="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                            <component :is="getIllustrationComponent(benefit.image)" class="w-12 h-12 text-pink-600" />
                        </div>
                    </div>

                    <!-- Benefit Content -->
                    <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">
                        {{ benefit.title }}
                    </h3>
                    <p class="text-gray-600 leading-relaxed text-center">
                        {{ benefit.description }}
                    </p>
                </div>

                <!-- CTA Button -->
                <div
                    v-motion
                    class="text-center mt-16"
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
                >
                    <Button
                        size="lg"
                        class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        @click="openZaloContact"
                    >
                        Liên hệ ngay
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Globe, Users, Gift, Palette, BarChart3, Headphones, Calendar, Heart, MessageCircle } from "lucide-vue-next";
import type { LandingWhyChooseUsData } from "@/components/wedding/types";

interface Props {
    data: LandingWhyChooseUsData;
}

defineProps<Props>();

const illustrationComponents = {
    "website-free": Globe,
    "no-time-limit": Calendar,
    "easy-planning": Users,
    "beautiful-interface": Palette,
    "easy-sharing": MessageCircle,
    "guest-wishes": Heart,
    "guest-tracking": BarChart3,
    "digital-gifts": Gift,
    support: Headphones,
};

const getIllustrationComponent = (imageName: string) => {
    return illustrationComponents[imageName as keyof typeof illustrationComponents] || Globe;
};

const openZaloContact = () => {
    window.open("https://dub.sh/StudyCare-Zalo", "_blank");
};
</script>

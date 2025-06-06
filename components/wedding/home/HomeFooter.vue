<template>
    <WebSection as="footer" class="py-16 text-gray-500 bg-gray-100">
        <WebContainer>
            <!-- Top Bar -->
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                <!-- Company Info -->
                <div class="sm:col-span-2">
                    <WebLogo />

                    <h2 class="mt-6 mb-2 text-xl font-bold text-pink-500">
                        Thiệp cưới online – Đơn giản, tinh tế, đậm dấu ấn riêng!
                    </h2>
                    <p class="max-w-md text-gray-500">
                        Nền tảng tạo thiệp cưới online miễn phí, giúp bạn hiện thực hóa lời mời cưới vừa tiện lợi vừa
                        tinh tế.
                    </p>
                </div>

                <!-- Footer Navs -->
                <div v-for="(nav, index) in footerNavs" :key="index">
                    <h3 class="mb-4 text-lg font-semibold text-pink-500">{{ nav.title }}</h3>
                    <nav>
                        <ul>
                            <li v-for="(navItem, i) in nav.navMenu" :key="i">
                                <NuxtLink
                                    class="block py-1 text-gray-500 transition-colors duration-200 hover:text-pink-500 hover:underline"
                                    v-bind="reactiveOmit(navItem, 'text')"
                                >
                                    {{ navItem.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 mt-8 border-t border-gray-500">
                <p class="text-sm text-gray-500">Copyrights © 2025 E-Wedding by CTPG. All rights reserved</p>
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { LandingFooterData } from "@/components/wedding/types";

const props = defineProps<{
    data: LandingFooterData;
}>();

const { navMenu, policiesNavMenu } = props.data;
const footerNavs = [
    { title: "Liên kết nhanh", navMenu },
    { title: "Hỗ trợ", navMenu: policiesNavMenu },
];
</script>

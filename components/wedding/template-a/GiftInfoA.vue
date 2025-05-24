<script setup lang="ts">
import { CircleArrowLeft, CircleArrowRight } from "lucide-vue-next";
import type { GiftInfoData } from "@/components/wedding/types";

const props = defineProps<{
    data: GiftInfoData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: GiftInfoData = {
    title: "HỘP QUÀ YÊU THƯƠNG",
    groom: {
        imageUrl: "/images/gallery/money-groom.jpg",
        triggerText: "Mừng chú rể",
        label: "Chú rể",
        dialogTitle: "Mừng cưới Chú rể",
        dialogDescription: "Bạn có thể gửi quà mừng tới chú rể qua thông tin dưới đây.",
        bankName: "Ngân hàng ABC",
        accountNumber: "1234567890",
        accountName: "NGUYEN VAN A",
        qrCodeUrl: "https://img.vietqr.io/image/MB-0938359464-compact.png",
    },
    bride: {
        imageUrl: "/images/gallery/money-bride.jpg",
        triggerText: "Mừng cô dâu",
        label: "Cô dâu",
        dialogTitle: "Mừng cưới Cô dâu",
        dialogDescription: "Bạn có thể gửi quà mừng tới cô dâu qua thông tin dưới đây.",
        bankName: "Ngân hàng XYZ",
        accountNumber: "0987654321",
        accountName: "TRAN THI B",
        qrCodeUrl: "https://img.vietqr.io/image/MB-0938359464-compact.png",
    },
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    groom: { ...defaultData.groom, ...props.data?.groom },
    bride: { ...defaultData.bride, ...props.data?.bride },
}));
</script>

<template>
    <WebSection class="p-6 text-center bg-white text-primary-dark">
        <WebContainer>
            <WeddingOrnament v-motion-w-fade-down width="128" class="mx-auto mb-2 fill-primary-dark" />

            <h2
                v-motion-w-fade-down
                :delay="100"
                class="mb-6 text-2xl font-semibold uppercase sm:text-3xl font-montserrat"
            >
                {{ data.title }}
            </h2>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                <Dialog v-for="(side, index) in [data.groom, data.bride]" :key="index">
                    <div :key="index" v-motion-w-fade-right :delay="100 + index * 100" class="flex flex-col gap-4">
                        <Card class="w-full rounded-none bg-primary-light">
                            <CardContent class="p-2">
                                <AspectRatioPicture
                                    :ratio="{ ratio: 1 / 1 }"
                                    :picture="{ src: side.imageUrl, alt: side.imageAlt ?? side.label, loading: 'lazy' }"
                                />
                            </CardContent>
                            <CardFooter class="justify-center p-2 pt-1 pb-3">
                                <p class="text-3xl font-bold font-dancing-script text-primary-dark">
                                    {{ side.label }}
                                </p>
                            </CardFooter>
                        </Card>
                        <div class="flex items-center justify-center">
                            <CircleArrowRight
                                class="text-secondary motion-safe:animate-[bounceToLeft_1s_infinite]"
                                :size="24"
                            />
                            <DialogTrigger as-child>
                                <Button variant="link" class="h-auto text-3xl/relaxed font-brittany-signature">
                                    {{ side.triggerText }}
                                </Button>
                            </DialogTrigger>
                            <CircleArrowLeft
                                class="text-secondary motion-safe:animate-[bounceToRight_1s_infinite]"
                                :size="24"
                            />
                        </div>
                    </div>

                    <DialogContent class="p-8">
                        <DialogHeader>
                            <DialogTitle class="text-2xl">{{ side.dialogTitle }}</DialogTitle>
                            <DialogDescription class="text-lg">
                                {{ side.dialogDescription }}
                            </DialogDescription>
                        </DialogHeader>

                        <div class="grid gap-2 py-4 text-lg text-left">
                            <p v-if="side.bankName"><strong>Ngân hàng:</strong> {{ side.bankName }}</p>
                            <p v-if="side.accountNumber"><strong>Số tài khoản:</strong> {{ side.accountNumber }}</p>
                            <p v-if="side.accountName"><strong>Chủ tài khoản:</strong> {{ side.accountName }}</p>
                            <NuxtImg
                                v-if="side.qrCodeUrl"
                                :src="side.qrCodeUrl"
                                :alt="index === 0 ? 'QR Code Chú rể' : 'QR Code Cô dâu'"
                                class="mx-auto"
                                loading="lazy"
                                fit="contain"
                            />
                        </div>

                        <DialogFooter>
                            <DialogClose as-child>
                                <Button type="button" variant="secondary" class="text-lg"> Đóng </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </WebContainer>
    </WebSection>
</template>

<style>
@keyframes bounceToLeft {
    0%,
    100% {
        transform: translateX(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
@keyframes bounceToRight {
    0%,
    100% {
        transform: translateX(25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>

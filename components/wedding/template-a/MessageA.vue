<script setup lang="ts">
import type { MessageData } from "@/components/wedding/types";

const props = defineProps<{
    data: MessageData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: MessageData = {
    topDecorationImageUrl: "/images/mics/wedding-bells-1.png", // Replace with actual default image path from design
    title: "We are Getting Married",
    paragraph1:
        "Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!",
    paragraph2:
        "Kết hôn không chỉ là chuyện hai người đến với nhau, mà là sự lựa chọn người sẽ đồng hành cùng bạn suốt đời. Là người bạn sẵn sàng chia sẻ mọi niềm vui, gánh vác mọi nỗi buồn, và cùng nhau xây dựng một tương lai hạnh phúc. Chọn đúng người, để mỗi ngày trôi qua đều là một hành trình đầy yêu thương và thấu hiểu.",
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
}));

const img = useImage();

const sectionStyles = computed(() => {
    const imgUrl = img("/images/background/background-2.png", { quality: 100, format: "webp" });

    return { background: `url('${imgUrl}') center center / cover no-repeat` };
});
</script>

<template>
    <WebSection class="p-6 text-center text-primary-dark" :style="sectionStyles">
        <WebContainer>
            <Card class="bg-white">
                <CardHeader class="items-center gap-1 p-4">
                    <NuxtPicture
                        v-motion-w-fade-down
                        :src="data.topDecorationImageUrl"
                        alt="Decoration"
                        class="w-10 h-10 sm:w-16 sm:h-16"
                        loading="lazy"
                        fit="contain"
                    />
                    <CardTitle
                        v-motion-w-fade-up
                        :delay="200"
                        as="h2"
                        class="text-2xl font-bold sm:text-4xl font-dancing-script"
                    >
                        {{ data.title }}
                    </CardTitle>
                </CardHeader>

                <CardContent class="p-4 pt-0">
                    <p
                        v-for="(paragraph, index) in [data.paragraph1, data.paragraph2]"
                        :key="index"
                        v-motion-w-fade-up
                        :delay="300 + index * 100"
                        class="mb-2 text-base leading-relaxed sm:text-lg font-crimson-text text-primary-dark"
                    >
                        {{ paragraph }}
                    </p>
                </CardContent>
            </Card>
        </WebContainer>
    </WebSection>
</template>

<style scoped>
p {
    text-align: justify; /* Or left, based on preference */
    text-indent: 2em; /* Optional indentation based on design */
}
</style>

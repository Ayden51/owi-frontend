<template>
    <main class="relative overflow-hidden min-h-dvh">
        <Card class="w-[400px]">
            <CardHeader>
                <CardTitle>Test Card</CardTitle>
                <CardDescription>Testing the FloralDecoration component</CardDescription>
            </CardHeader>
            <CardContent>
                <AspectRatio :ratio="16 / 9" class="bg-muted">
                    <NuxtImg
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        class="object-cover w-full h-full rounded-md"
                    />
                </AspectRatio>
                <FloralDecoration
                    image-name="floral-1"
                    corner="top-left"
                    offset-x="10px"
                    offset-y="10px"
                    loading="eager"
                />
                <FloralDecoration
                    image-name="floral-2"
                    corner="top-right"
                    offset-x="-10px"
                    offset-y="10px"
                    loading="eager"
                />
                <p>Some content here.</p>
            </CardContent>
            <CardFooter>
                <p>Footer content</p>
            </CardFooter>
        </Card>
        <!-- <WeddingHeader />
        <WeddingCoupleInfo />
        <WeddingPhotoGallery />
        <WeddingDateLocation />
        <WeddingMessage />
        <WeddingEventDetails />
        <WeddingGiftRegistry />
        <WeddingPhotoAlbum />
        <WeddingThankYou /> -->
    </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>

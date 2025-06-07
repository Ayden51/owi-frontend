/**
 * Composable to ensure logo preload link is only added once per page
 */
export const useLogoPreload = () => {
    const isLogoPreloaded = useState("logo-preloaded", () => false);
    const logo = "/logo.svg";

    if (!isLogoPreloaded.value) {
        useHead({
            link: [
                {
                    rel: "preload",
                    as: "image",
                    href: logo,
                },
            ],
        });

        isLogoPreloaded.value = true;
    }

    return logo;
};

let isCurrentPlatformWindows = true;

const elPlatformOptions = document.querySelectorAll(".platform__option");
const elPlatformWrappers = document.querySelectorAll(".platform__wrapper");

elPlatformOptions.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.target.closest(".platform__option")) {
            // console.log(e.target.closest(".platform__option"));

            // reset options
            elPlatformOptions.forEach((el) =>
                el.classList.remove("platform__active"),
            );

            // reset text
            elPlatformWrappers.forEach((el) => el.classList.add("hidden"));

            // set active platform
            e.target
                .closest(".platform__option")
                .classList.add("platform__active");

            // set active text
            elPlatformWrappers.forEach((el) => {
                let currentDataPlatform = e.target
                    .closest(".platform__option")
                    .getAttribute("data-platform");

                document
                    .querySelector(`.platform__${currentDataPlatform}`)
                    .classList.remove("hidden");
            });
        }
    });
});

// const switchCurrentPlatform = (e) => {
//     console.log(e.target);
// };

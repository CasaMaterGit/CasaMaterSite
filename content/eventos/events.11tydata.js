export default {
    layout: "layouts/event.njk",
    tags: ["events"],
    eleventyComputed: {
        content: data => data.body, // mapeia o body do PageCMS para content do Eleventy
    }
};

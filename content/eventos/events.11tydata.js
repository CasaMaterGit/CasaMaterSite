export default {
    layout: "layouts/evento.njk",  // garante que cada evento use esse layout
    permalink: data => `/eventos/${data.title.toLowerCase().replace(/ /g, "-")}/`,
    eleventyExcludeFromCollections: false
};

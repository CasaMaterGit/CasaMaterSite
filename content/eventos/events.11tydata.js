export default {
    layout: "layouts/evento.njk",
    permalink: data => `/eventos/${data.title.toLowerCase().replace(/ /g,"-")}/`,
    eleventyExcludeFromCollections: false,
};

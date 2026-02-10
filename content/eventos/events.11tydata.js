import slugify from "slugify";

export default {
    layout: "layouts/evento.njk",
    permalink: data => `/eventos/${slugify(data.title, { lower: true, strict: true })}/`,
    eleventyExcludeFromCollections: false,
};

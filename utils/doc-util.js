export function getDocumentsByCategory(docs, category) {
    return docs.filter(doc => doc.category === category);
}

export function getDocumentsByAuthor(docs, author) {
    return docs.filter(doc => doc.author === author.replace("%20", " "));
}

export function getDocumentsByTag(docs, tag) {
    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag));
}
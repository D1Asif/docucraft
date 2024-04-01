import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc"
import { getDocumentsByAuthor } from "@/utils/doc-util";

export default function AuthorPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByAuthor(docs, name);
    return (
        <ContentDisplay id={matchedDocuments[0].id} />
    )
}

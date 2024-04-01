import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc"
import { getDocumentsByCategory } from "@/utils/doc-util";

export default function CategoriesPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs, name);
    return (
        <ContentDisplay id={matchedDocs[0].id} />
    )
}
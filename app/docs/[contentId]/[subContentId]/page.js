import ContentDisplay from "@/components/ContentDisplay";


export default function SubContentPage({params: {subContentId}}) {
  return (
    <ContentDisplay id={subContentId} />
  )
}

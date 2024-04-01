import ContentDisplay from "@/components/ContentDisplay"

export default function ContentPage({params: {contentId}}) {
  return (
    <ContentDisplay id={contentId} />
  )
}

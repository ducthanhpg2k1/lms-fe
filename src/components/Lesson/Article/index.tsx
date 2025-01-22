import Text from "@/components/UI/Text"

const Article = ({ loading, content }: any) => {
    console.log(content, 'content');

    return (
        <div className="w-full min-h-[566px] pt-20 p-12">
            <div className="flex flex-col gap-8 w-8/12 mx-auto">
                <Text type="font-32-700">{content?.title}</Text>
                <div
                    className="text-2xl text-black-5"
                    dangerouslySetInnerHTML={{
                        __html: content?.content,
                    }}
                />
            </div>
        </div>

    )
}
export default Article
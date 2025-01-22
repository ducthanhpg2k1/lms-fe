import Text from "@/components/UI/Text"
import { Check, Star } from "@phosphor-icons/react"

const IsResult = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="bg-green/50 p-8 min-h-[240px]">
                <div className="flex flex-col justify-center  gap-3 w-6/12 mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="w-full bg-white h-[2px]" />
                        <div className="min-w-14 min-h-14 flex justify-center rounded-full  items-center bg-white">
                            <Star size={32} className="text-green" weight="bold" />

                        </div>
                        <div className="w-full bg-white h-[2px]" />

                    </div>

                    <Text className="text-white" type="font-24-700">
                        Great! You're ready to move on to the next lecture.
                    </Text>
                    <Text className="text-white" type="font-16-400">
                        You answered 1/1 question correctly.
                    </Text>
                </div>


            </div>
            <div className="flex-1 p-12 h-full flex flex-col gap-5">
                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-3">
                        <Check size={24} weight="light" className="text-green" />
                        <Text className="text-white" type="font-24-700">Things you need to know
                        </Text>
                    </div>
                    <Text className="text-black-5 pl-10" type="font-20-600">{title}
                    </Text>
                </div>


            </div>
        </div>
    )
}
export default IsResult
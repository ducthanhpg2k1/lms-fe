import Text from '@/components/UI/Text';

const ByTheNumbers = ({ course }: { course: any }) => {
  const lessonCount = course?.sections?.reduce(
    (total: number, section: any) => {
      return total + (section.lessons?.length || 0);
    },
    0
  );
  return (
    <div className="py-6 grid grid-cols-3 border-b border-b-[#1F1F1F] pb-9">
      <Text type="font-18-600" className="text-white">
        By the numbers
      </Text>
      <div className="flex flex-col gap-1">
        <Text type="font-14-400" className="text-white">
          Skill level: {course?.level}
        </Text>
        <Text type="font-14-400" className="text-white">
          Students: {course?.userCourses?.length || course?.countStudents}
        </Text>
        <Text type="font-14-400" className="text-white">
          Languages: {course?.lang}
        </Text>
        <Text type="font-14-400" className="text-white">
          Captions: Yes
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Text type="font-14-400" className="text-white">
          Lectures: {lessonCount || 0}
        </Text>
        <Text type="font-14-400" className="text-white">
          Video: 1.5 total hours
        </Text>
      </div>
    </div>
  );
};
export default ByTheNumbers;

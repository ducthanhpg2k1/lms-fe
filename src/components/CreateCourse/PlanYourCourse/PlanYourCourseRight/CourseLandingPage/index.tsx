import { CATEGORIES } from '@/components/Course/ListCourse';
import InputText from '@/components/UI/InputText';
import QuillEditor from '@/components/UI/QuillEditor';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Control, Controller } from 'react-hook-form';
import UploadImage from './UploadImage';
import PromotionalVideo from './PromotionalVideo';
import { DATA_LANGUAGE, DATA_LEVEL } from '@/utils/const';
import { useGetCategories, useGetLanguages, useGetLevels, useGetTopics } from '@/services/filter.service';
import { useGetSubCategories } from '@/components/CreateCourse/service';
import { useEffect } from 'react';

const CourseLandingPage = ({
  control,
  watch,
}: {
  control: Control;
  watch: any;
}) => {
  const { data } = useGetCategories();
  const { data: levels } = useGetLevels();

  const { data: languages } = useGetLanguages();

  const { data: topics } = useGetTopics();

  const { dataSubCategories, run: runGetSubCategories } = useGetSubCategories();

  const watchCategories = watch('categoryId');

  useEffect(() => {
    if (watchCategories) {
      runGetSubCategories(watchCategories);
    }
  }, [watchCategories]);
  console.log(dataSubCategories, 'dataSubCategories');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Text type="font-28-700" className="text-white">
          Course landing page
        </Text>
        <Text type="font-16-400" className="text-black-6">
          Your course landing page is crucial to your success on Udemy. If it’s
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course. Learn more about creating your course
          landing page and course title standards.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <InputText
              value={field.value}
              onChange={field.onChange}
              maxLength={160}
              label="Course title"
              placeholder="Type"
              inputDefault
            />
          )}
        />
        <Text type="font-12-400" className="text-black-7">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Controller
          name="subtitle"
          control={control}
          render={({ field }) => (
            <InputText
              value={field.value}
              onChange={field.onChange}
              maxLength={160}
              label="Course subtitle"
              placeholder="Type"
              inputDefault
            />
          )}
        />
        <Text type="font-12-400" className="text-black-7">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you've covered during your course.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <QuillEditor
              placeholder="Add a new note..."
              onChange={field.onChange}
              value={field.value}
              label="Course description"
              inputDefault
            />
          )}
        />

        <Text type="font-12-400" className="text-black-7">
          Description should have minimum 200 words.
        </Text>
      </div>
      <div className="flex flex-col gap-3">
        <Text type="font-16-600" className="text-white">
          Basic info
        </Text>

        <div className="grid grid-cols-2 gap-3">
          <Controller
            name="lang"
            control={control}
            render={({ field }) => (
              <SelectCustom
                placeholder="English (US)"
                className="min-w-[120px]"
                onChange={field.onChange}
                value={field.value}
                inputDefault
                options={languages?.data?.map((item: any) => {
                  return {
                    key: item?.value,
                    label: item?.label,
                  };
                }) || []}
              />
            )}
          />
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <SelectCustom
                placeholder="-- Select level --"
                className="min-w-[120px]"
                onChange={field.onChange}
                value={field.value}
                inputDefault
                options={levels?.data?.map((item: any) => {
                  return {
                    key: item?.value,
                    label: item?.label,
                  };
                }) || []}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <SelectCustom
                placeholder="Developer"
                inputDefault
                onChange={field.onChange}
                value={field.value}
                className="min-w-[120px]"
                options={
                  data?.data?.map((item: any) => {
                    return {
                      key: item?.id,
                      label: item?.name,
                    };
                  }) || []
                }
              />
            )}
          />

          <Controller
            name="subCategoryId"
            control={control}
            render={({ field }) => (
              <SelectCustom
                placeholder="-- Select Subcategory --"
                className="min-w-[120px]"
                onChange={field.onChange}
                value={field.value}
                inputDefault
                options={
                  dataSubCategories?.data?.map((item: any) => {
                    return {
                      key: item?.id,
                      label: item?.name,
                    };
                  }) || []
                }
              />
            )}
          />
        </div>
        <Text type="font-12-400" className="text-black-7">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you've covered during your course.
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <Controller
            name="topics"
            control={control}
            render={({ field }) => (
              // <InputText
              //   onChange={field.onChange}
              //   value={field.value}
              //   label="What is primarily taught in your course?"
              //   placeholder="e.g Landscape Photography"
              //   inputDefault
              // />
              <>
                <Text type="font-16-600" className="text-white mb-3">
                  What is primarily taught in your course?
                </Text>
                <SelectCustom
                  placeholder="e.g Landscape Photography"
                  className="min-w-[120px]"
                  onChange={field.onChange}
                  value={field.value}
                  inputDefault
                  options={
                    topics?.data?.map((item: any) => {
                      return {
                        key: item?.value,
                        label: item?.label,
                      };
                    }) || []
                  }
                />
              </>

            )}
          />
        </div>
      </div>
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <UploadImage onChange={field.onChange} value={field.value} />
        )}
      />
      <Controller
        name="video"
        control={control}
        render={({ field }) => (
          <PromotionalVideo onChange={field.onChange} value={field.value} />
        )}
      />
    </div>
  );
};
export default CourseLandingPage;

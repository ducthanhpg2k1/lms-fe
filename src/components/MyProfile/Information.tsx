import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

export default function Information() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };
  const inputFields = [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Cody Fisher',
      type: 'text',
    },
    { name: 'website', label: 'Website', placeholder: 'URL', type: 'url' },
    { name: 'lastName', label: 'Last Name', placeholder: 'Type', type: 'text' },
    { name: 'x', label: 'X', placeholder: 'Username', type: 'text' },
    {
      name: 'headline',
      label: 'Headline',
      placeholder: 'Type',
      type: 'textarea',
    },
    {
      name: 'facebook',
      label: 'Facebook',
      placeholder: 'Username',
      type: 'text',
    },

    {
      name: 'linkedin',
      label: 'LinkedIn',
      placeholder: 'Username',
      type: 'text',
    },
    {
      name: 'biography',
      label: 'Biography',
      placeholder: 'Type',
      type: 'text',
    },
    {
      name: 'youtube',
      label: 'YouTube',
      placeholder: 'Username',
      type: 'text',
    },
  ];

  return (
    <div className="bg-gray-900 text-white rounded-lg w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid col-span-2 gap-6 box-border
      "
      >
        {inputFields.map((field, index) => (
          <div
            key={index}
            className={field.name === 'headline' ? 'row-span-2' : ''}
          >
            <label className="block text-base font-semibold mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                {...register(field.name)}
                placeholder={field.placeholder}
                className={`bg-[#242A30] rounded-[4px] ${
                  field.name === 'headline' ? 'h-[130px]' : 'h-[44px]'
                } w-full p-[10px] resize-none`}
              />
            ) : (
              <input
                {...register(field.name)}
                type={field.type}
                placeholder={field.placeholder}
                className="bg-[#242A30] h-[44px] w-full p-[10px] rounded-[4px] active:outline-hidden"
              />
            )}
          </div>
        ))}

        <div className="col-span-2">
          <Button
            type="submit"
            className="w-fit px-[24px] bg-[#02A6C2] text-white font-semibold py-[10px] rounded-[4px] hover:bg-cyan-400 transition"
          >
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
}

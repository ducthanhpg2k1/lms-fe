import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const Description = () => {
  return (
    <div className="py-6 grid grid-cols-3 border-b border-b-[#1F1F1F] pb-9">
      <div className="col-span-1">
        <Text type="font-18-600" className="text-white">
          Description
        </Text>
      </div>

      <div className="flex flex-col gap-3 col-span-2">
        <Text type="font-14-400" className="text-white">
          Welcome to HTML For Everyone: Real World Coding in HTML5course. HTML5
          for web development essential HTML from scratch. With this HTML
          course, you don't need previous knowledge of HTML HTML stands for
          HyperText Markup Language. It allows the user to create and structure
          sections, paragraphs, headings, links, and blockquotes for web pages
          and applications. HTML is the biggest markup language used to display
          web pages on the Internet. In other words, web pages are composed of
          HTML, which is used to display text, images, or other resources
          through a web browser. Html, coding, web development, free courses,
          free, hmtl, free course, code, full stack web development, front end
          web development, coding for kids, html course, html 5 HTML is the
          basic building block of the web and actually isn’t a technical
          programming language. It is responsible for the structure of the
          website. In this course, You will learn to create static HTML sites
          You will learn to create a beautiful, responsive landing page for
          anyone You will learn to use basic tags which are used commonly
        </Text>
        <Button
          variant="light"
          radius="full"
          size="sm"
          className="hover:bg-main/20 w-max"
        >
          <div className="flex items-center gap-[2px]">
            <Text type="font-14-500" className="text-main">
              See More
            </Text>
            <Image
              src={'/icons/ic-arrow-drop-right-line.svg'}
              width={20}
              height={20}
              alt=""
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Description;

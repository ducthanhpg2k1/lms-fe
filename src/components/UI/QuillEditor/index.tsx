import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Text from '../Text';
import clsx from 'clsx';

const QuillEditor = ({
  label,
  inputDefault,
  placeholder,
}: {
  label?: string;
  inputDefault?: boolean;
  placeholder?: string;
}) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
          ],
        },
        placeholder,
      });
      quill.on('text-change', () => {
        console.log(quill.root.innerHTML);
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current = null;
      }
    };
  }, [placeholder]);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <Text type="font-16-600" className="text-white">
          {label}
        </Text>
      )}
      <div
        className={clsx('w-full', {
          ['custom-quill-editor']: inputDefault,
        })}
      >
        <div ref={editorRef}></div>
      </div>
    </div>
  );
};

export default QuillEditor;

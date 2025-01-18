import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Text from '../Text';
import clsx from 'clsx';

const QuillEditor = ({
  label,
  inputDefault,
  placeholder,
  value,
  onChange,
}: {
  label?: string;
  inputDefault?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState<Quill | null>(null);
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
      setEditor(quill);
      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        if (onChange) {
          onChange(content);
        }
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current = null;
      }
    };
  }, [placeholder]);

  useEffect(() => {
    if (editor && value !== undefined) {
      editor.root.innerHTML = value;
    }
  }, [editor, value]);

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

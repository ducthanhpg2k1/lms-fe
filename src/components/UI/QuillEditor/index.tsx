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
  inputQuizz,
  onChange,
  autoFocus = false,
}: {
  label?: string;
  inputDefault?: boolean;
  placeholder?: string;
  value?: string;
  inputQuizz?: boolean;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
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
      // if (autoFocus) {
      //   quill.on('editor-change', () => {
      //     const length = quill.getLength();
      //     quill.setSelection(length - 1, 0);
      //     quill.focus();
      //   });
      // }
    }

    return () => {
      if (editorRef.current) {
        editorRef.current = null;
      }
    };
  }, [placeholder]);

  useEffect(() => {
    if (editor && value !== undefined) {
      const currentContent = editor.root.innerHTML;
      if (currentContent !== value) {
        const selection = editor.getSelection();
        editor.root.innerHTML = value;
        if (selection) {
          editor.setSelection(selection.index, selection.length);
        }
      }
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
          ['custom-quill-editor-quizz']: inputQuizz,
        })}
      >
        <div ref={editorRef}></div>
      </div>
    </div>
  );
};

export default QuillEditor;

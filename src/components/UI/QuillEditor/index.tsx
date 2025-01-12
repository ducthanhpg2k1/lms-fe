import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const QuillEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow', // Theme to use
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
          ],
        },
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
  }, []);

  return (
    <div className="w-full">
      <div ref={editorRef}></div>
    </div>
  );
};

export default QuillEditor;

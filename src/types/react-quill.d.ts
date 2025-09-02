declare module 'react-quill' {
  import * as React from 'react';
  export interface QuillProps {
    value?: string;
    onChange?: (content: unknown, delta?: unknown, source?: unknown, editor?: unknown) => void;
    theme?: string;
    [key: string]: unknown;
  }
  const Quill: React.ComponentType<QuillProps>;
  export default Quill;
}

import React from 'react';

export function useImagePreview({
  initialPreview = null,
  file = null,
}: {
  initialPreview?: string | null;
  file?: File | null;
}) {
  const [preview, setPreview] = React.useState<string | null>(initialPreview);

  React.useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreview(null);
  }, [file]);

  return preview;
}

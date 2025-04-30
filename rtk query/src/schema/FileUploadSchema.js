import * as z from 'zod';

export const formSchema = z.object({
  files: z.array(
    z.instanceof(File)
      .refine(file => file.size <= 10 * 1024 * 1024, {
        message: 'Each file size must be less than 10MB',
      })
      .refine(file => {
        const fileType = file.type.toLowerCase();
        return fileType === 'image/jpeg' ||
          fileType === 'image/png' ||
          fileType === 'application/pdf';
      }, {
        message: 'Files must be JPG, PNG, or PDF',
      })
  )
  .min(1, { message: 'At least one file is required' })
  .max(5, { message: 'Maximum 5 files allowed' })
});
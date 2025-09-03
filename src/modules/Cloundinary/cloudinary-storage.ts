// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from './cloudinary.config';
//
// export const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: (req, file) => {
//     return {
//       folder: 'movies', // thư mục trong Cloudinary
//       resource_type: 'image',
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//       public_id: file.originalname.split('.')[0] + '-' + Date.now(),
//     };
//   },
// });
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.config';

export const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
    folder: 'movies',
    resource_type: 'image',
    public_id: file.originalname.split('.')[0] + '-' + Date.now(),
  }),
});

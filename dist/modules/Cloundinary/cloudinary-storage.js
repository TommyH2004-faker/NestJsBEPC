"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_config_1 = require("./cloudinary.config");
exports.storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_config_1.default,
    params: (req, file) => {
        return {
            folder: 'movies',
            resource_type: 'image',
            public_id: file.originalname.split('.')[0] + '-' + Date.now(),
        };
    },
});
//# sourceMappingURL=cloudinary-storage.js.map
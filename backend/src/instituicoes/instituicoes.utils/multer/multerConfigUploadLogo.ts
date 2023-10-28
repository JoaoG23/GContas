import { diskStorage } from 'multer';
import { extname } from 'path';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { gerarIndiceRandomico } from 'src/utils/indices/gerarIndiceRandomico/gerarIndiceRandomico';

export const multerConfigUploadLogo = (): MulterOptions => {
  return {
    storage: diskStorage({
      destination: (req, file, callback) => {
        callback(null, './uploads/logos');
      },
      filename: (req, file, callback) => {
        const extensao = extname(file.originalname);
        callback(null, `${gerarIndiceRandomico()}${extensao}`);
      },
    }),

    fileFilter: (req, file, callback) => {
      const isFormatoCorretos = file.originalname.match(/\.(jpg|jpeg|png)$/);

      if (!isFormatoCorretos) {
        return callback(null, false);
      }
      callback(null, true);
    },
  };
};

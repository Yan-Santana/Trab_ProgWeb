const Multer = require('multer');
const path = require('path');

const { BadRequest } = require('../../controllers/utils/errors/badRequest');
const { treatError } = require('../../controllers/utils/errors');

const { photoRepository } = require('../../repositories/photo.repository');

/** @type {multer.Multer} */
const fileUploader = Multer({
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    return cb(new BadRequest('Somente imagem são permitidas'));
  },
  storage: Multer.diskStorage({
    destination: path.join(__dirname, '../../views/uploads'),
    filename: async (req, file, cb) => {
      const randomName = Math.random().toString(36).substring(7);
      const filename = `${randomName}${Date.now()}${path.extname(file.originalname)}`;

      req.dbFile = await photoRepository.create(filename);
      cb(null, filename);
    },
  }),
});

module.exports = { fileUploader };

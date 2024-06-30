const { Photo } = require('../models/photo');

class PhotoRepository {
  async create(filename) {
    return (
      await Photo.create({
        filename,
        url: `http://localhost:3000/uploads/${filename}`,
      })
    ).toJSON();
  }



}

module.exports = { photoRepository: new PhotoRepository() };

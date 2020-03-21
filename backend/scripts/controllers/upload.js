const fs = require("fs");

exports.uploadImage = async (file) => {
    const {stream, filename, mimetype, encoding} = await file;
    if (mimetype !== "image/jpeg") {
        const error = new Error("File type forbidden");
        error.status = 403;
        throw error;
    }
    const name = Date.now() + ".jpg";
    const filePath = "uploads/" + name;
    // The following code was copied from stackoverflow.com and may cause bugs
    await new Promise((resolve, reject) =>
        stream
            .on('error', error => {
                if (stream.truncated)
                // delete the truncated file
                    fs.unlinkSync(filePath);
                reject(error);
            })
            .pipe(fs.createWriteStream(filePath))
            .on('error', error => reject(error))
            .on('finish', () => resolve({filePath}))
    );
    return name
};

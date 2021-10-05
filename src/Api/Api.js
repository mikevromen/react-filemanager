import config from './../config.js';

/**
 * Fetch API to list files from directory
 * @param {String} path
 * @returns {Object}
 */
export function list(path) {
    return fetch(config.url_list + '?path=' + (encodeURIComponent(path) || '/'));
};


/**
 * Fetch API to create a directory
 * @param {String} path
 * @param {String} directory
 * @returns {Object}
 */
export function createDirectory(path, directory) {
    return fetch(config.url_create_folder, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, directory
        })
    });
};


/**
 * Fetch API to get file body
 * @param {String} path
 * @returns {Object}
 */
export function getFileContent(path) {
    return fetch(config.url_get_content + '?path=' + (encodeURIComponent(path) || '/'));
};


/**
 * Fetch API to remove a file or folder
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function remove(path, filenames, recursive = true) {
    return fetch(config.url_remove, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, filenames, recursive
        })
    });
};

/**
 * Fetch API to move files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function move(path, destination, filenames) {
    console.log(`path: ${path} -- destination: ${destination} -- filenames: ${filenames}`);
    return fetch(config.url_move, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, destination, filenames
        })
    });
};

/**
 * Fetch API to move files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function rename(path, destination) {
    return fetch(config.url_rename, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, destination
        })
    });
};

/**
 * Fetch API to copy files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function copy(path, destination, filenames) {
    return fetch(config.url_copy, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, destination, filenames
        })
    });
};

/**
 * Fetch API to copy files
 * @param {String} path
 * @param {Object<FileList>} fileList
 * @returns {Object}
 */
export function upload(path, fileList) {
    let formData = new FormData();
    formData.append("name", "imageUpload");
    for (let i = 0; i < fileList.length; i++) {
        console.log(fileList[i]);
        console.log(fileList[i].name);
        formData.append('photo', fileList[i], fileList[i].name);
    }
    console.log(config.url_upload);
    return fetch(config.url_upload, {
        method: "POST",
        body: formData
    });
};

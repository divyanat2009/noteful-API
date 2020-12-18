function makeFoldersArray() {
    return[
        {
            folderid: 1,
            name: 'Folder 1',
            date_created: '2019-01-22T16:28:32.615Z'
        }, 
        {
            folderid: 2,
            name: 'Folder 2',
            date_created: '2019-04-22T16:28:32.615Z'
        }, 
        {
            folderid: 3,
            name: 'Folder 3',
            date_created: '2019-05-22T16:28:32.615Z'
        }
    ]
}

function makeNewFolder() {
    return[
        {
            name: 'New Folder 1',
        }
    ]
}

function makeUpdatedFolder() {
    return[
        {
            folderid: 1,
            name: 'Updated folder 1',
            date_created: '2019-01-22T16:28:32.615Z'
        }    
    ]
}

function makeFakeFolder() {
    return[
        {
            folderid: 1,
            folder_age: 'fake folder'
        }
    ]
}

module.exports = {
    makeFoldersArray,
    makeNewFolder,
    makeUpdatedFolder,
    makeFakeFolder
}

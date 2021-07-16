import React from 'react'

function CatList({ catPics }) {
    return (
        <div>
            {catPics.map(imageObject => <img key={imageObject.id} src={imageObject.url} alt="cat" />)}
        </div>
    )
}

export default CatList

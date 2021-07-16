import React from 'react'

function CatList({ catPics }) {
    return (
        <>
            {
                catPics.map(imageObject => {
                    return (
                        <div className="col-md-4 col-sm-6">
                            <img 
                                key={imageObject.id}
                                src={imageObject.url}
                                alt="cat"
                                className="img-fluid"
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default CatList

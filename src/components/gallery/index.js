import React from 'react';
import gallery1 from '../../assets/images/gallery_1.png';
import gallery2 from'../../assets/images/gallery_2.png';
import gallery3  from '../../assets/images/Gallery_3.png';


class Gallery extends React.Component{
    
       
    
    render(){

        return(
            <div>
                <div className="gallery-page-wrapper">
                   <div className="gallery-wrapper">
                        <h1>Gallery</h1>
                     <div className="gallery-container">
                         <div className="row">
                            <div className="col-lg-4 d-flex  image-container">
                                <img className="gallery-photos" src={gallery1}/>
                                {/* add link to navigate to the gallery page  */}
                            </div>
                            <div className="col-lg-4 d-flex  image-container">
                                <img className="gallery-photos"  src={gallery2}/>
                            </div>
                            <div className="col-lg-4 d-flex  image-container">
                                 <img className="gallery-photos"  src={gallery3}/>
                            </div>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery;
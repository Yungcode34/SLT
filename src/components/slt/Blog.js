import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://pbs.twimg.com/media/Duq4R3dWoAEo4-J.jpg",
  caption: "Mother Seth",
  subcaption: "Passionate mellow artist, 2nd co founder of SLT",
  thumbnail: "https://pbs.twimg.com/media/Duq4R3dWoAEo4-J.jpg",
}, {
  photo: "https://pbs.twimg.com/media/Dr3pOv2VAAEVF-9.jpg",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://pbs.twimg.com/media/Dr3pOv2VAAEVF-9.jpg",
}, {
  photo: "https://pbs.twimg.com/media/Dr3pOwXVAAAT6Sf.jpg",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://pbs.twimg.com/media/Dr3pOwXVAAAT6Sf.jpg",
},{
    photo: "https://pbs.twimg.com/media/DzOn8JAU0AAS-pe.jpg",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://pbs.twimg.com/media/DzOn8JAU0AAS-pe.jpg",
  },{
    photo: "https://scontent-sea1-1.cdninstagram.com/vp/497339a9f7080c14d3f71188e0a22148/5D0435D7/t51.2885-15/e35/44492307_736852350014759_265492217782332928_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&se=7&ig_cache_key=MTkyNTA2NDk1OTM5MDM0NDAyMA%3D%3D.2",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://scontent-sea1-1.cdninstagram.com/vp/497339a9f7080c14d3f71188e0a22148/5D0435D7/t51.2885-15/e35/44492307_736852350014759_265492217782332928_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&se=7&ig_cache_key=MTkyNTA2NDk1OTM5MDM0NDAyMA%3D%3D.2",
  },{
    photo: "https://scontent-sea1-1.cdninstagram.com/vp/102e521be75a66a0496f7fe47ebe8123/5D1A925E/t51.2885-15/e35/47076381_2010295385937485_7340702116321422586_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&se=8&ig_cache_key=MTkyNTA2NDkzNjY5MDgwMjE2Mg%3D%3D.2",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://scontent-sea1-1.cdninstagram.com/vp/102e521be75a66a0496f7fe47ebe8123/5D1A925E/t51.2885-15/e35/47076381_2010295385937485_7340702116321422586_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&se=8&ig_cache_key=MTkyNTA2NDkzNjY5MDgwMjE2Mg%3D%3D.2",
  },{
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0upzQhmvtT5aUE1y2xdhkapdxLOzDKdGvpBXSmaHs9qTXQsZv",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0upzQhmvtT5aUE1y2xdhkapdxLOzDKdGvpBXSmaHs9qTXQsZv",
  },{
    photo: "https://pbs.twimg.com/media/Dr3pOv2VAAEVF-9.jpg",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://pbs.twimg.com/media/Dr3pOv2VAAEVF-9.jpg",
  }];

class Blog extends Component {
    constructor() {
        super(...arguments);
        this.state = { galleryOpened: false };
        this.toggleGallery = this.toggleGallery.bind(this);
      }
    
      toggleGallery() {
        this.setState(prevState => ({
          galleryOpened: !prevState.galleryOpened
        }));
      }
    
    render() {
        return(
            <div class='background'>
                  <button onClick={this.toggleGallery}>Open photo gallery</button>
      <ReactBnbGallery
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery} />
                </div>
        );
      }
  };

export default withRouter(Blog);
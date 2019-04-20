import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './style/Homepage.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../LayoutBody';
import vid from '../../assets/vid.mov';

const styles = theme => ({

  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});



function AutoGrid(props) {
  const { classes } = props;

  const images = [
    {
      url:'https://pbs.twimg.com/media/DzOn8JAU0AAS-pe.jpg',
      title: 'Snorkeling',
      width: '50%',
    },
    {
      url:
        'https://pbs.twimg.com/media/Duq4R3dWoAEo4-J.jpg',
      title: 'Hiking',
      width: '50%',
    },
    {
      url:
        'https://pbs.twimg.com/media/Dr3pOwXVAAAT6Sf.jpg',
      title: 'Tour',
      width: '100%',
    },
    {
      url:
        'https://pbs.twimg.com/media/Dr3pOv2VAAEVF-9.jpg',
      title: 'Fitness',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'Reading',
      width: '40%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0upzQhmvtT5aUE1y2xdhkapdxLOzDKdGvpBXSmaHs9qTXQsZv',
      title: 'Reading',
      width: '40%',
    },
  ];

        return(
<div className={classes.root}>
        <Grid item sm={12} xs={12}>
  
<header class="v-header container">
            <div class="fullscreen-video-wrap">
            <video className='videoTag' autoPlay loop muted>
            <source src={vid} type='video/mp4' />
            </video>
            </div>
            <div class="header-overlay"></div>
            <div class="header-content">
            <h1>SLT SHIT</h1>
            <p>testing this</p>
            <a href="http://localhost:3000/shop" class="btn">Shop</a>
            </div> 
</header>
    <section class="section section-a">
                <div class="container">
                  <h2>Section A</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
                </div>
    </section>

    <section class="section section-b">
                <div class="container">
                  <h2>Section B</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
                </div>
    </section>
        </Grid>
        <Grid item sm={12} xs={12}>
        <div class="box1">



        </div>
        </Grid>
      <Grid container spacing={0}>
      </Grid>

      <LayoutBody className={classes.root} component="section" width="large">
     
     <div className={classes.images}>
       {images.map(image => (
         <ButtonBase
           key={image.title}
           className={classes.imageWrapper}
           style={{
             width: image.width,
           }}
         >
           <div
             className={classes.imageSrc}
             style={{
               backgroundImage: `url(${image.url})`,
             }}
           />
           <div className={classes.imageBackdrop} />
           <div className={classes.imageButton}>
           
           </div>
         </ButtonBase>
       ))}
     </div>
   </LayoutBody>

    </div>
        );
      
  };
  AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(AutoGrid);
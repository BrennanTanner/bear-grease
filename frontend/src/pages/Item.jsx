import React, { useCallback, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
   Button,
   Box,
   Tooltip,
   Grid,
   Chip,
   CssBaseline,
   Card,
   Container,
   CardMedia,
   Radio,
   RadioGroup,
   CardContent,
   CardActionArea,
   Avatar,
   List,
   ListItemButton,
   CardActions,
   Typography,
   Divider,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, Footer } from '../components/index';
import { addToCart } from '../util/cart';

const theme = createTheme();

export default function Item() {
   const { title, id, description, images, variants, tags, options } =
      useLoaderData();

   const enabledVariants = variants.filter((variant) => variant.is_enabled);

   const filterEnabledOptions = useCallback(
      (array) => {
         // Check each array item to see if it matches an enabled variant id.
         // This filters out the colors or other things that are marked not available
         return array.filter((arrayItem) =>
            enabledVariants.some((variant) =>
               variant.options.includes(arrayItem.id)
            )
         );
      },
      [enabledVariants]
   );

   const getCategoryArray = useCallback(
      (category) => {
         const array = options.find((option) => {
            if (option.name == category || option.name == category + 's') {
               return option;
            }
         }).values;

         return filterEnabledOptions(array);
      },
      [enabledVariants]
   );

   const getCategoryIndex = useCallback((category) => {
      const indexOfCategory = options
         .map((option) => option.name)
         .indexOf(category);
      return indexOfCategory != -1
         ? indexOfCategory
         : options.map((option) => option.name).indexOf(category + 's');
   }, []);

   const [selectedColor, setSelectedColor] = useState(
      enabledVariants.filter((variant) => variant.is_default)[0].options[
         getCategoryIndex('Color')
      ]
   );
   const [selectedSize, setSelectedSize] = useState(
      enabledVariants.filter((variant) => variant.is_default)[0].options[
         getCategoryIndex('Size')
      ]
   );
   const [price, setPrice] = useState('');
   const [oldPrice, setOldPrice] = useState('');
   const [discount, setDiscount] = useState('');
   const [imageArray, setImageArray] = useState([{ src: 'na', title: 'none' }]);
   const [sizeArray, setSizeArray] = useState(getCategoryArray('Size'));
   const [colorArray, setColorArray] = useState(getCategoryArray('Color'));
   const [navBar, setNavBar] = useState(0);

   useEffect(() => {
      //when color is changed, get available sizes.
      const colorVariants = enabledVariants.filter((variant) =>
         variant.options.includes(selectedColor)
      );

      setSizeArray(
         getCategoryArray('Size').map((arrayItem) => {
            const isAvailable = colorVariants.filter((variant) => {
               return variant.options.includes(arrayItem.id);
            });

            if (isAvailable.length == 0) {
               isAvailable.push({
                  id: null,
                  sku: null,
                  cost: null,
                  price: null,
                  title: 'Not Available',
                  grams: null,
                  is_enabled: false,
                  is_default: false,
                  is_available: false,
                  options: [null, null],
                  quantity: null,
               });
            }
            arrayItem.is_available = isAvailable[0].is_available;
            return arrayItem;
         })
      );
   }, [selectedColor]);

   useEffect(() => {
      //when size is changed, get available colors.
      const sizeVariants = enabledVariants.filter((variant) =>
         variant.options.includes(selectedSize)
      );

      setColorArray(
         getCategoryArray('Color').map((arrayItem) => {
            const isAvailable = sizeVariants.filter((variant) => {
               return variant.options.includes(arrayItem.id);
            });

            if (isAvailable.length == 0) {
               isAvailable.push({
                  id: null,
                  sku: null,
                  cost: null,
                  price: null,
                  title: 'Not Available',
                  grams: null,
                  is_enabled: false,
                  is_default: false,
                  is_available: false,
                  options: [null, null],
                  quantity: null,
               });
            }
            arrayItem.is_available = isAvailable[0].is_available;
            return arrayItem;
         })
      );
   }, [selectedSize]);

   useEffect(() => {
      const colorVariants = enabledVariants.filter((variant) =>
         variant.options.includes(selectedColor)
      );

      const colorImages = images.filter((image) =>
         colorVariants.some((variant) => image.variant_ids.includes(variant.id))
      );
      let size = selectedSize - 13;

      const peopleImgs = colorImages.filter(
         (image) =>
            image.src.split('=')[1].split('-')[0] == 'person' &&
            !image.src.split('=')[1].split('-')[2]
      ).length;

      if (selectedSize == 2104) {
         size = Math.floor(Math.random() * peopleImgs) + 1;
      }

      if (size > peopleImgs) {
         size = peopleImgs;
      }
      setImageArray(
         colorImages.filter((image) => {
            const tags = image.src.split('=')[1].split('-');
            if (tags[0] != 'person') {
               return image;
            } else if (tags[1] == size) {
               return image;
            }
         })
      );
   }, [selectedColor, selectedSize]);

   // USD formatting options
   const formatting_options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
   };

   useEffect(() => {
      //when selection is changed, get price and convert to readable US format.
      const variant = enabledVariants.filter(
         (variant) =>
            variant.options.includes(selectedColor) &&
            variant.options.includes(selectedSize)
      )[0];
      setPrice(
         (variant.price / 100).toLocaleString('en-US', formatting_options)
      );
      setOldPrice(
         ((variant.cost /(1 - 0.40)) / 100).toLocaleString('en-US', formatting_options)
      );
      setDiscount(Math.round(100 - (variant.price/(variant.cost /(1 - 0.40)) * 100)));
   }, [selectedColor, selectedSize]);

   const addToCartHandler = useCallback(() => {
      const sizeVariants = enabledVariants.filter((variant) =>
         variant.options.includes(selectedSize)
      );
      const chosenVariant = sizeVariants.filter((variant) =>
         variant.options.includes(selectedColor)
      );
      const selected = {
         id: id,
         image: imageArray[0].src,
         quantity: chosenVariant[0].quantity,
         title: title,
         price: chosenVariant[0].price,
         variant: chosenVariant[0].title,
         variant_id: chosenVariant[0].id,
         sku: chosenVariant[0].sku,
      };
      addToCart(selected);
      setNavBar(navBar + 1);
   }, [selectedColor, selectedSize, imageArray, navBar]);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Navbar key={navBar} />
         <Container component='main'>
            <Card sx={{ maxWidth: '100%' }}>
               <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
                  <Grid item xs={12} sm={6}>
                     <Carousel autoPlay={false} animation='slide'>
                        {imageArray.map((image, i) => {
                           return (
                              <CardMedia
                                 component='img'
                                 image={image.src}
                                 alt={title + i}
                                 key={i}
                              />
                           );
                        })}
                     </Carousel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <CardContent sx={{ textAlign: 'left' }}>
                        <Typography gutterBottom variant='h3' component='div'>
                           {title}
                        </Typography>
                        <Typography gutterBottom variant='body' component='div'>
                           {description}
                        </Typography>
                        {discount > 1 && <Typography variant='body' sx={{ fontStyle: 'italic', textDecoration: 'line-through' }} color='gray'>{oldPrice}</Typography>}
                        {discount > 1 && <Typography variant='h5' color='secondary'>{discount + '%'}</Typography>}
                        <Typography variant='h5' color='secondary'>
                           {price} 
                        </Typography>
                        <Divider variant='middle' />
                        <Typography gutterBottom variant='h5' component='div'>
                           Colors
                        </Typography>

                        {colorArray.map((color) => {
                           const chipBackground = () => {
                              if (color.colors.length > 1) {
                                 return `linear-gradient(90deg, ${color.colors[0]} 50%, ${color.colors[1]} 50%)`;
                              } else return color.colors[0];
                           };

                           return (
                              <Tooltip arrow title={color.title} key={color.id}>
                                 <Radio
                                    disabled={!color.is_available}
                                    checkedIcon={
                                       <Box
                                          sx={{
                                             padding: '3px',
                                             borderRadius: '50%',
                                             borderStyle: 'solid',
                                             borderWidth: '2px',
                                             borderColor: 'black',
                                          }}
                                       >
                                          <Chip
                                             variant='filled'
                                             sx={{
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderColor: 'gray',
                                                background: chipBackground(),
                                                padding: '3px',
                                             }}
                                          />
                                       </Box>
                                    }
                                    icon={
                                       <Box sx={{ padding: '3px' }}>
                                          <Chip
                                             variant='filled'
                                             sx={
                                                (color.is_available && {
                                                   borderStyle: 'solid',
                                                   borderWidth: '1px',
                                                   borderColor: 'gray',
                                                   background: chipBackground(),
                                                   padding: '3px',
                                                }) ||
                                                (!color.is_available && {
                                                   borderStyle: 'solid',
                                                   borderWidth: '1px',
                                                   borderColor: 'gray',
                                                   background:
                                                      'linear-gradient(145deg, rgba(156,156,156,1) 48%, rgba(0,0,0,1) 50%, rgba(156,156,156,1) 52%)',
                                                   padding: '3px',
                                                })
                                             }
                                          />
                                       </Box>
                                    }
                                    onChange={() => {
                                       setSelectedColor(color.id);
                                    }}
                                    size='large'
                                    checked={color.id == selectedColor}
                                    sx={{
                                       padding: '4px',
                                       color: chipBackground(),
                                       '&.Mui-checked': {
                                          color: 'black',
                                       },
                                    }}
                                 />
                              </Tooltip>
                           );
                        })}

                        <Typography gutterBottom variant='h5' component='div'>
                           Sizes
                        </Typography>
                        {sizeArray.map((size) => {
                           return (
                              <Tooltip title={size.title} key={size.id}>
                                 <>
                                    <Button
                                       disabled={!size.is_available}
                                       variant={
                                          (size.id != selectedSize &&
                                             'outlined') ||
                                          (size.id == selectedSize &&
                                             'contained')
                                       }
                                       onClick={() => {
                                          setSelectedSize(size.id);
                                       }}
                                    >
                                       {size.title}
                                    </Button>
                                 </>
                              </Tooltip>
                           );
                        })}
                     </CardContent>
                     <Divider variant='middle' />
                     <CardActions>
                        <Button variant='contained' onClick={addToCartHandler}>
                           Add to Cart
                        </Button>
                     </CardActions>
                  </Grid>
               </Grid>
            </Card>
         </Container>
         <Footer sx={{ mt: 5 }} disableGutters/>
      </ThemeProvider>
   );
}

import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}

const Carousel = ({image}) => {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={image}/>
      <img src={image}/>
      <img src={image}/>
    </Flickity>
  )
}


export default Carousel;
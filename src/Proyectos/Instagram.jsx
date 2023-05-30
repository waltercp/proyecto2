import React, { useState } from 'react'
import './instagram.css'
const Instagram = () => {

  const [selectedImage, setSelectedImage] = useState(null);


   const handleImageClick = (event, imageSrc) => {
    event.preventDefault();
    setSelectedImage(imageSrc);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  const handleExpandedImageClick = (event) => {
    event.stopPropagation();
  };



  return (
    <div className='instagram-container'>
      

      <section className='post-list'>
        <a href="/" className={`post ${selectedImage === '01n.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '01n.jpg')}>
          <figure className='post-image'>
            <img src="01n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '01d.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '01d.jpg')}>

          <figure className='post-image'>
            <img src="01d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '02d.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '02d.jpg')}>

          <figure className='post-image'>
            <img src="02d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '02n.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '02n.jpg')}>

          <figure className='post-image'>
            <img src="02n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '03n.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '03n.jpg')}>

          <figure className='post-image'>
            <img src="03n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '03d.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '03d.jpg')}>

          <figure className='post-image'>
            <img src="03d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '04d.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '04d.jpg')}>

          <figure className='post-image'>
            <img src="04d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className={`post ${selectedImage === '04n.jpg' ? 'selected' : ''}`} onClick={(event) => handleImageClick(event, '04n.jpg')}>

          <figure className='post-image'>
            <img src="04n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="09d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="01n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="01d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="02d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="02n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="03n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="03d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>
        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="04d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="04n.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

        <a href="/" className='post' onClick={handleImageClick}>
          <figure className='post-image'>
            <img src="09d.jpg" alt="" />
          </figure>
          <span className='post-overlay'>
            <p>
              <span className='post-likes'>150</span>
              <span className='post-comments'>10</span>
            </p>
          </span>
        </a>

      </section>

      {selectedImage && (
        <div className='expanded-image-container' onClick={handleImageClose}>
          <img
            className='expanded-image'
            src={selectedImage}
            alt='Expanded'
            onClick={handleExpandedImageClick}
          />
        </div>
      )}
    </div>
  )
}

export default Instagram
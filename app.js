document.addEventListener('DOMContentLoaded', function () {
  const reviewsFlickity = new Flickity('.flickity-reviews', {
    cellAlign: 'left',
    contain: true,
    groupCells: false,
    pageDots: false,
    prevNextButtons: false, // Hide default buttons
    wrapAround: false
  });

  // Connect custom arrows to Flickity
  const prevBtn = document.getElementById('reviews-prev-btn');
  const nextBtn = document.getElementById('reviews-next-btn');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function () {
      reviewsFlickity.previous();
    });

    nextBtn.addEventListener('click', function () {
      reviewsFlickity.next();
    });

    // Update arrow states based on slider position
    function updateArrowStates() {
      const selectedIndex = reviewsFlickity.selectedIndex;
      const slideCount = reviewsFlickity.slides.length;

      // Update previous button opacity
      if (selectedIndex === 0) {
        prevBtn.style.opacity = '0.3';
        prevBtn.style.pointerEvents = 'none';
      } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
      }

      // Update next button opacity
      if (selectedIndex >= slideCount - 3) {
        // Since we show 3 slides at once
        nextBtn.style.opacity = '0.3';
        nextBtn.style.pointerEvents = 'none';
      } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.pointerEvents = 'auto';
      }
    }

    // Initial state update
    updateArrowStates();

    // Update states on slide change
    reviewsFlickity.on('select', updateArrowStates);
  }

  // Initialize Projects Flickity
  const projectsFlickity = new Flickity('.flickity-projects', {
    cellAlign: 'left',
    contain: true,
    groupCells: false,
    pageDots: false,
    prevNextButtons: false, // Hide default buttons
    wrapAround: false
  });

  // Connect custom arrows to Projects Flickity
  const projectsPrevBtn = document.getElementById('projects-prev-btn');
  const projectsNextBtn = document.getElementById('projects-next-btn');

  if (projectsPrevBtn && projectsNextBtn) {
    projectsPrevBtn.addEventListener('click', function () {
      projectsFlickity.previous();
    });

    projectsNextBtn.addEventListener('click', function () {
      projectsFlickity.next();
    });

    // Update arrow states based on slider position
    function updateProjectsArrowStates() {
      const selectedIndex = projectsFlickity.selectedIndex;
      const slideCount = projectsFlickity.slides.length;

      // Update previous button opacity
      if (selectedIndex === 0) {
        projectsPrevBtn.style.opacity = '0.3';
        projectsPrevBtn.style.pointerEvents = 'none';
      } else {
        projectsPrevBtn.style.opacity = '1';
        projectsPrevBtn.style.pointerEvents = 'auto';
      }

      // Update next button opacity
      if (selectedIndex >= slideCount - 3) {
        // Since we show 1 slide at once (full 3x2 grid)
        projectsNextBtn.style.opacity = '0.3';
        projectsNextBtn.style.pointerEvents = 'none';
      } else {
        projectsNextBtn.style.opacity = '1';
        projectsNextBtn.style.pointerEvents = 'auto';
      }
    }

    // Initial state update
    updateProjectsArrowStates();

    // Update states on slide change
    projectsFlickity.on('select', updateProjectsArrowStates);
  }

  // Initialize Kitchen Project Flickity
  const kitchenFlickity = new Flickity('.flickity-kitchen', {
    cellAlign: 'left',
    contain: true,
    groupCells: false,
    pageDots: false,
    prevNextButtons: false, // Hide default buttons
    wrapAround: false
  });

  // Connect custom arrows to Kitchen Flickity
  const kitchenPrevBtn = document.getElementById('kitchen-prev-btn');
  const kitchenNextBtn = document.getElementById('kitchen-next-btn');

  if (kitchenPrevBtn && kitchenNextBtn) {
    kitchenPrevBtn.addEventListener('click', function () {
      kitchenFlickity.previous();
    });

    kitchenNextBtn.addEventListener('click', function () {
      kitchenFlickity.next();
    });

    // Update arrow states based on slider position
    function updateKitchenArrowStates() {
      const selectedIndex = kitchenFlickity.selectedIndex;
      const slideCount = kitchenFlickity.slides.length;

      // Update previous button opacity
      if (selectedIndex === 0) {
        kitchenPrevBtn.style.opacity = '0.3';
        kitchenPrevBtn.style.pointerEvents = 'none';
      } else {
        kitchenPrevBtn.style.opacity = '1';
        kitchenPrevBtn.style.pointerEvents = 'auto';
      }

      // Update next button opacity based on responsive breakpoints
      let visibleSlides = 1; // Mobile default

      if (window.innerWidth >= 1280) {
        // Desktop
        visibleSlides = 5;
      } else if (window.innerWidth >= 1024) {
        // Laptop
        visibleSlides = 4;
      } else if (window.innerWidth >= 768) {
        // Tablet
        visibleSlides = 2;
      }

      if (selectedIndex >= slideCount - visibleSlides) {
        kitchenNextBtn.style.opacity = '0.3';
        kitchenNextBtn.style.pointerEvents = 'none';
      } else {
        kitchenNextBtn.style.opacity = '1';
        kitchenNextBtn.style.pointerEvents = 'auto';
      }
    }

    // Initial state update
    updateKitchenArrowStates();

    // Update states on slide change
    kitchenFlickity.on('select', updateKitchenArrowStates);

    // Update states on window resize
    window.addEventListener('resize', updateKitchenArrowStates);
  }

  // Modal Gallery Functionality
  const modal = document.getElementById('imageModal');
  const modalClose = document.getElementById('modalClose');
  const modalMainSlider = document.getElementById('modalMainSlider');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const reviewImages = document.querySelectorAll('.review-image');
  const projectImages = document.querySelectorAll('.project-image');

  // Sample gallery images for each review
  const galleryImages = [
    [
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg'
    ]
  ];

  // Sample gallery images for each project
  const projectGalleryImages = [
    [
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg',
      '/assets/images/project-1-282f27.jpg'
    ]
  ];

  let mainSliderFlickity;
  let thumbnailsFlickity;

  // Add click event to each review image
  reviewImages.forEach((image, index) => {
    image.addEventListener('click', function () {
      openModal(index, 'review');
    });
  });

  // Add click event to each project image
  projectImages.forEach((image, index) => {
    image.addEventListener('click', function () {
      openModal(index, 'project');
    });
  });

  function openModal(imageIndex, type = 'review') {
    // Get images for this gallery based on type (using same arrays for consistency)
    let images;
    if (type === 'project') {
      images = projectGalleryImages[imageIndex % projectGalleryImages.length];
    } else {
      images = galleryImages[imageIndex % galleryImages.length];
    }

    // Clear existing content
    modalMainSlider.innerHTML = '';
    modalThumbnails.innerHTML = '';

    // Create main slider slides with videos
    images.forEach((imageSrc, i) => {
      const mainSlide = document.createElement('div');
      mainSlide.className = 'carousel-cell';
      mainSlide.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%;">
          <!-- Fancy Video Loader -->
          <div class="video-loader-overlay" data-loader-index="${i}">
            <div class="video-loader-spinner"></div>
            <div class="video-loader-text">Loading Video</div>
            <div class="video-loader-dots">
              <div class="video-loader-dot"></div>
              <div class="video-loader-dot"></div>
              <div class="video-loader-dot"></div>
            </div>
          </div>
          <!-- Video Element -->
          <video 
            src="assets/video.mp4" 
            preload="metadata"
            controls
            muted
            class="w-full h-full object-cover"
            style="max-height: 80vh; background: #000;"
            data-slide-index="${i}"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      `;
      modalMainSlider.appendChild(mainSlide);

      const thumbSlide = document.createElement('div');
      thumbSlide.className = 'carousel-cell';
      thumbSlide.innerHTML = `<img src="${imageSrc}" alt="Thumbnail ${i + 1}">`;
      modalThumbnails.appendChild(thumbSlide);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize Flickity sliders
    setTimeout(() => {
      // Main slider
      mainSliderFlickity = new Flickity(modalMainSlider, {
        cellAlign: 'center',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: false,
        adaptiveHeight: false
      });

      // Thumbnails slider
      thumbnailsFlickity = new Flickity(modalThumbnails, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        asNavFor: modalMainSlider,
        percentPosition: false
      });

      // Function to reset video on slide change (no autoplay)
      function resetCurrentVideo() {
        const currentSlide = mainSliderFlickity.selectedElement;
        const currentVideo = currentSlide.querySelector('video');
        const currentLoader = currentSlide.querySelector(
          '.video-loader-overlay'
        );

        // Pause all videos and reset current video to beginning
        const allVideos = modalMainSlider.querySelectorAll('video');
        const allLoaders = modalMainSlider.querySelectorAll(
          '.video-loader-overlay'
        );

        allVideos.forEach((video) => {
          video.pause();
          if (video === currentVideo) {
            video.currentTime = 0;
            // Show loader for current video
            if (currentLoader && video.readyState < 3) {
              currentLoader.classList.remove('hidden');
            }
          }
        });

        // Hide all other loaders
        allLoaders.forEach((loader) => {
          if (loader !== currentLoader) {
            loader.classList.add('hidden');
          }
        });
      }

      // Function to setup video loading handlers
      function setupVideoLoaders() {
        const allVideos = modalMainSlider.querySelectorAll('video');

        allVideos.forEach((video, index) => {
          const loader = video.parentElement.querySelector(
            '.video-loader-overlay'
          );

          // Show loader initially if video is not ready
          if (video.readyState < 3) {
            loader.classList.remove('hidden');
          } else {
            loader.classList.add('hidden');
          }

          // Hide loader when video can play
          video.addEventListener('canplay', function () {
            if (loader) {
              loader.classList.add('hidden');
            }
          });

          // Hide loader when video is fully loaded
          video.addEventListener('canplaythrough', function () {
            if (loader) {
              loader.classList.add('hidden');
            }
          });

          // Show loader when video is waiting/buffering
          video.addEventListener('waiting', function () {
            if (loader) {
              loader.classList.remove('hidden');
            }
          });

          // Hide loader when video starts playing
          video.addEventListener('playing', function () {
            if (loader) {
              loader.classList.add('hidden');
            }
          });

          // Show loader on load start
          video.addEventListener('loadstart', function () {
            if (loader) {
              loader.classList.remove('hidden');
            }
          });

          // Handle errors
          video.addEventListener('error', function () {
            if (loader) {
              const loaderText = loader.querySelector('.video-loader-text');
              if (loaderText) {
                loaderText.textContent = 'Error Loading Video';
                loaderText.style.color = '#ff6b6b';
              }
            }
          });
        });
      }

      // Function to start first video on modal open
      function startFirstVideo() {
        const firstSlide = mainSliderFlickity.selectedElement;
        const firstVideo = firstSlide.querySelector('video');
        const firstLoader = firstSlide.querySelector('.video-loader-overlay');

        // Pause all videos first
        const allVideos = modalMainSlider.querySelectorAll('video');
        allVideos.forEach((video) => {
          video.pause();
        });

        // Show loader for first video if not ready
        if (firstLoader && firstVideo.readyState < 3) {
          firstLoader.classList.remove('hidden');
        }

        // Then start the first video
        if (firstVideo) {
          firstVideo.currentTime = 0;
          firstVideo.play().catch((e) => {
            console.log('Video autoplay prevented:', e);
            // If autoplay fails, try muted autoplay
            firstVideo.muted = true;
            firstVideo.play().catch((e2) => {
              console.log('Muted autoplay also failed:', e2);
            });
          });
        }
      }

      // Setup video loaders for all videos
      setupVideoLoaders(); // Reset video on main slider change
      mainSliderFlickity.on('select', () => {
        thumbnailsFlickity.select(mainSliderFlickity.selectedIndex);
        resetCurrentVideo();
      });

      // Handle thumbnail click to change main slider and reset video
      thumbnailsFlickity.on('select', () => {
        mainSliderFlickity.select(thumbnailsFlickity.selectedIndex);
        resetCurrentVideo();
      });

      // Start first video on modal open
      setTimeout(() => {
        startFirstVideo();
      }, 100);

      // Main navigation arrows
      const modalPrevBtn = document.getElementById('modalPrevBtn');
      const modalNextBtn = document.getElementById('modalNextBtn');

      if (modalPrevBtn && modalNextBtn) {
        modalPrevBtn.addEventListener('click', () => {
          mainSliderFlickity.previous();
        });

        modalNextBtn.addEventListener('click', () => {
          mainSliderFlickity.next();
        });
      }

      // Thumbnail navigation arrows
      const thumbnailPrevBtn = document.getElementById('modalThumbnailPrevBtn');
      const thumbnailNextBtn = document.getElementById('modalThumbnailNextBtn');

      if (thumbnailPrevBtn && thumbnailNextBtn) {
        thumbnailPrevBtn.addEventListener('click', () => {
          thumbnailsFlickity.previous();
        });

        thumbnailNextBtn.addEventListener('click', () => {
          thumbnailsFlickity.next();
        });

        // Update thumbnail arrow states
        function updateThumbnailArrowStates() {
          const selectedIndex = thumbnailsFlickity.selectedIndex;
          const slideCount = thumbnailsFlickity.slides.length;
          const visibleSlides = Math.floor(thumbnailsFlickity.size.width / 160); // Approximate visible thumbnails

          // Update previous button
          if (selectedIndex === 0) {
            thumbnailPrevBtn.style.opacity = '0.3';
            thumbnailPrevBtn.style.pointerEvents = 'none';
          } else {
            thumbnailPrevBtn.style.opacity = '1';
            thumbnailPrevBtn.style.pointerEvents = 'auto';
          }

          // Update next button
          if (selectedIndex >= slideCount - visibleSlides) {
            thumbnailNextBtn.style.opacity = '0.3';
            thumbnailNextBtn.style.pointerEvents = 'none';
          } else {
            thumbnailNextBtn.style.opacity = '1';
            thumbnailNextBtn.style.pointerEvents = 'auto';
          }
        }

        // Initial state update
        setTimeout(updateThumbnailArrowStates, 200);

        // Update states on thumbnail slide change
        thumbnailsFlickity.on('select', updateThumbnailArrowStates);
      }
    }, 100);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Pause all videos
    const allVideos = modalMainSlider.querySelectorAll('video');
    allVideos.forEach((video) => {
      video.pause();
    });

    // Destroy Flickity instances
    if (mainSliderFlickity) {
      mainSliderFlickity.destroy();
      mainSliderFlickity = null;
    }
    if (thumbnailsFlickity) {
      thumbnailsFlickity.destroy();
      thumbnailsFlickity = null;
    }
  }

  // Close modal events
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Mobile Menu Functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    mobileMenuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners for mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking on nav links
  const mobileNavLinks = document.querySelectorAll('#mobileMenu nav a');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on window resize if screen becomes large
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
});

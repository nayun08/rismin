document.addEventListener("DOMContentLoaded", function () {
  const toggleTriggerLeft = document.getElementById('toggle-trigger-left');
  const toggleTriggerRight = document.getElementById('toggle-trigger-right');
  const leftPanel = document.querySelector('.left-panel');
  const rightPanel = document.querySelector('.right-panel');

  let isActiveLeft = false;
  let isActiveRight = false;

  toggleTriggerLeft.addEventListener('click', () => {
    isActiveLeft = !isActiveLeft;

    if (isActiveLeft) {
      leftPanel.classList.add('active');
    } else {
      leftPanel.classList.remove('active');
    }
  });

  toggleTriggerRight.addEventListener('click', () => {
    isActiveRight = !isActiveRight;

    if (isActiveRight) {
      rightPanel.classList.add('active');
    } else {
      rightPanel.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxSource = document.getElementById('lightbox-source');
  const galleryImages = document.querySelectorAll('.gallery img');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;
  let imageSources = [];
  let sourceTexts = [];

  // 이미지 src와 출처 수집
  galleryImages.forEach(img => {
    imageSources.push(img.src);
    sourceTexts.push(img.dataset.source || '');
  });

  // 이미지 클릭 시 확대
  galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      currentIndex = i;
      showImage();
    });
  });

  function showImage() {
    lightboxImg.src = imageSources[currentIndex];
    lightboxSource.textContent = sourceTexts[currentIndex];
    lightbox.style.display = 'flex';
  }

  // 닫기
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-blur')) {
      lightbox.style.display = 'none';
    }
  });

  // 좌우 넘기기
  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    showImage();
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage();
  });
});
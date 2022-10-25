import * as res from '../../utils/responsive.js';

function headingSlide() {
  const mother = document.querySelector('.head-slider');
  const first = mother.querySelector('.first-image');
  const second = mother.querySelector('.second-image');
  const third = mother.querySelector('.third-image');

  const links = [
    {
      title: 'We Crashed',
      image: '/images/image-1.jpg',
      description:
        'Sit ratione optio aut velit nihil aspernatur magnam est, facere temporibus in neque necessitatibus assumenda. Aut doloremque voluptas incidunt natus itaque earum?',
    },
    {
      title: 'M. Night from Shyamalan: Servant',
      image: '/images/image-2.jpg',
      description: 'Alias beatae sapiente dignissimos ipsa excepturi laboriosam fuga nemo, quaerat nostrum ad.',
    },
    {
      title: 'For All Mankind',
      image: '/images/image-3.jpg',
      description: 'Id exercitationem illo, dolorem porro provident natus aspernatur corporis labore quas accusamus?',
    },
    {
      title: 'Tehran',
      image: '/images/image-4.jpg',
      description: 'Quia aspernatur nesciunt porro! Temporibus, ullam! Possimus, distinctio nemo. Eum, cum labore?',
    },
    {
      title: 'Black Bird',
      image: '/images/image-5.jpg',
      description: 'Cupiditate omnis placeat illum id nemo velit dolorem facere perspiciatis deserunt culpa!',
    },
    {
      title: 'Truth Be Told',
      image: '/images/image-6.jpg',
      description: 'Ea doloremque temporibus aut adipisci, velit repellat eum fugit quasi sunt recusandae?',
    },
  ];

  function shiftLinks() {
    const a = links.shift();
    links.push(a);
  }

  function swapper(box, position) {
    const ob = links[position];
    box.querySelector('img').setAttribute('src', ob.image);

    if (box.classList.contains('second-image')) {
      box.querySelector('h2').textContent = ob.title;
      box.querySelector('p').textContent = ob.description;
    }
  }

  function swapImage() {
    console.log('hitting');
    swapper(third, 0);
    setTimeout(() => {
      swapper(second, 1), 1000;
    });
    setTimeout(() => {
      swapper(first, 2), 2000;
    });
    setTimeout(() => {
      shiftLinks(), 3000;
    });
  }

  setInterval(swapImage, 5000);
}

export function initializer() {
  res.clientSearchBar(), res.cardsSlider(), res.suggestPopup();
  headingSlide();
}

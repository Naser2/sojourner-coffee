import image1 from "@/images/sojourner-coffee-served.jpeg"
import image2 from "@/images/sojourner-coffee-served-2.jpeg"
import image4 from "@/images/sojourner-coffee-served-4.png"
import Image from "next/image";
// import image1 from "./images/sojourner-coffee-served.jpeg"


const images = [
  // {
  //   id: 1,
  //   name: 'Ebbbarthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc:
  //     'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt:
  //     'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // },
  // {
  //   id: 2,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc:
  //     'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //   imageAlt:
  //     'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  {
    id: 1,
    name: 'Early Birds Muffins',
    href: '#',
    price: '$8.50',
    imageSrc:image1.src,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Signature breakfast',
    href: '#',
    price: '$12',
    imageSrc:
    image2.src,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 5,
    name: 'Croissants + Cooffee ',
    href: '#',
    price: '$14',
    imageSrc:
    image4.src,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 2,
    name: 'Signature breakfast',
    href: '#',
    price: '$17',
    imageSrc:
    image2.src,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 5,
    name: 'Croissants + Cooffee ',
    href: '#',
    price: '$16',
    imageSrc:
    image4.src,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 5,
    name: 'Croissants + Cooffee ',
    href: '#',
    price: '$11',
    imageSrc:
    image4.src,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  // More products...
];

export  const Coffees = () => {
  return (
    <div className='periwinkle'>
      <div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid gap-x-6 gap-y-10 sm:grid-cols-2 xxl:grid-cols-3 xl:gap-x-8'>
          {images.slice(0,4).map((image) => (
            <a key={image.id} href={image.href} className='group'>
              <div className='w-full overflow-hidden rounded-lg bg-gray-200'>
                <Image
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  width={200}
                  height={200}
                  className='h-64 w-64 breakfast-image xl:w-84 xl:h-84 object-cover object-center group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{image.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {image.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export  const CoffeesSM = () => {
  return (
    <div className='periwinkle'>
      <div className='mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {images.slice(0,2).map((image) => (
            <a key={image.id} href={image.href} className='group'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <Image
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  width={200}
                  height={200}
                  className='h-34  w-34 object-cover object-center group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{image.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {image.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};




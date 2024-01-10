import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
};

const client = createClient(options);

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const getAssets = async () => {
  console.log('here');
  const query = '*[_type == "product"]';
  const query2 = '*[_type == "banner"]{ ..., product-> }';
  const query3 = '*[_type == "categories"]';

  try {
    let products = await client.fetch(query);
    let banners = await client.fetch(query2);
    const categories = await client.fetch(query3);
    banners = banners.map((banner) => {
      return {
        ...banner,
        imageUrl: urlFor(banner.image).toString(),
      };
    });
    products = products.map((product) => {
      return {
        ...product,
        imageUrls: product.image?.map((image) => {
          return urlFor(image).toString();
        }),
      };
    });
    console.log('banners', banners);
    console.log('categories', categories);
    console.log('products', products);
    return { products, categories, banners };
  } catch (error) {
    console.log(error);
  }
};

export { client, urlFor, getAssets };

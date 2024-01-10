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

const getAllProducts = async () => {
  const query = '*[_type == "product"]';
  try {
    const initialProducts = await client.fetch(query);
    const products = initialProducts.map((product) => {
      return {
        ...product,
        imageUrls: product.image?.map((image) => {
          return urlFor(image).toString();
        }),
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  try {
    const initialProduct = await client.fetch(query);
    const product = {
      ...initialProduct,
      imageUrls: initialProduct.image?.map((image) => {
        return urlFor(image).toString();
      }),
    };
    return product;
  } catch (error) {
    console.log(error);
  }
};

export { client, urlFor, getAssets, getProduct, getAllProducts };

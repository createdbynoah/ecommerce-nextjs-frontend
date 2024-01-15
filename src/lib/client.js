import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { formatPrice } from './utils';

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
};

const client = createClient(options);

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const getAssets = async () => {
  try {
    const products = await getAllProducts();
    const categories = await getCategories();
    const banners = await getBanners();
    return { products, categories, banners };
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async () => {
  const query =
    '*[_type == "product" && published == true]{ ..., "category": category-> } | order(name asc)';
  try {
    const initialProducts = await client.fetch(query);
    const products = initialProducts.map((product) => {
      return {
        ...product,
        priceDisplay: formatPrice(product.price),
        imageUrls: product.images?.map((image) => {
          return { url: urlFor(image).toString(), key: image._key };
        }),
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProductsByCategory = async (category) => {
  const query = `*[_type == "categories" && name == "${category}"]{...,products[]->{...} | order(name asc)}`;
  try {
    const category = await client.fetch(query);
    if (!category.length) return [];
    const initialProducts = category[0].products;
    const products = initialProducts.map((product) => {
      return {
        ...product,
        priceDisplay: formatPrice(product.price),
        imageUrls: product.images?.map((image) => {
          return { url: urlFor(image).toString(), key: image._key };
        }),
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (slug) => {
  const query = `*[_type == "product" && published == true && slug.current == "${slug}"][0]`;
  try {
    const initialProduct = await client.fetch(query);
    const product = {
      ...initialProduct,
      priceDisplay: formatPrice(initialProduct.price),
      imageUrls: initialProduct.images?.map((image) => {
        return { url: urlFor(image).toString(), key: image._key };
      }),
    };
    return product;
  } catch (error) {
    console.log(error);
  }
};

const getBanners = async () => {
  const query = '*[_type == "banner"]{ ..., product-> }';
  try {
    const initialBanners = await client.fetch(query);
    const banners = initialBanners.map((banner) => {
      return {
        ...banner,
        imageUrls: {
          url: urlFor(banner.image).toString(),
          key: banner.image._key,
        },
      };
    });
    return banners;
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  const query = '*[_type == "categories"]{ ..., product-> }';
  try {
    const categories = await client.fetch(query);
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export {
  client,
  urlFor,
  getAssets,
  getProduct,
  getAllProducts,
  getProductsByCategory,
  getBanners,
  getCategories,
};

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
  const query = '*[_type == "product"]';
  try {
    const initialProducts = await client.fetch(query);
    const products = initialProducts.map((product) => {
      return {
        ...product,
        imageUrls: product.image?.map((image) => {
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
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  try {
    const initialProduct = await client.fetch(query);
    const product = {
      ...initialProduct,
      imageUrls: initialProduct.image?.map((image) => {
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
  const query = '*[_type == "categories"]';
  try {
    const categories = await client.fetch(query);
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export { client, urlFor, getAssets, getProduct, getAllProducts };

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
  const query = '*[_type == "product"]';
  const query2 = '*[_type == "hero"]';
  const query3 = '*[_type == "categories"]';

  try {
    const products = await client.fetch(query);
    const banners = await client.fetch(query2);
    const categories = await client.fetch(query3);
    return { products, categories, banners };
  } catch (error) {
    console.log(error);
  }
};

export { client, urlFor, getAssets };

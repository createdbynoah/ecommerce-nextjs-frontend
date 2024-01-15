import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  // Get the cart items from the request body. Need to parse the JSON body from the request.
  const { cartItems } = await req.json();
  const headersList = headers();
  const origin = headersList.get('origin');
  console.log('origin', origin);
  console.log('cartItems in API', cartItems);
  try {
    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      shipping_options: [
        {
          shipping_rate: 'shr_1OXB59EI54h92sklv3eRksVu',
        },
        {
          shipping_rate: 'shr_1OXB5zEI54h92sklL6pMD9E5',
        },
      ],
      metadata: {
        products: JSON.stringify(
          cartItems.map((item) => {
            return {
              id: item._id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            };
          })
        ),
      },
      line_items: cartItems.map((item) => {
        const img = item.imageUrls[0].url;
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [img],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: false,
          },
          quantity: item.quantity,
        };
      }),

      success_url: `${origin}/success`,
      cancel_url: `${origin}`,
    };
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);
    console.log('session', session);
    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

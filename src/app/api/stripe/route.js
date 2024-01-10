import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  // return NextResponse.json(
  //   { message: 'POST Hello from the API' },
  //   { status: 200 }
  // );
  try {
    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
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
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    };
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);
    res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

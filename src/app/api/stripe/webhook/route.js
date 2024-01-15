import { NextResponse, NextRequest } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const POST = async (req) => {
  const body = await req.text();
  const sig = headers().get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const completedSession = event.data.object;
      console.log('Checkout session was successful!');
      console.log(completedSession);
      break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log('Checkout session expired!');
      console.log(paymentIntentSucceeded);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
};

const getSessionData = (session) => {
  return {
    id: session.id,
    amount_total: session.amount_total,
    payment_status: session.payment_status,
    payment_method_types: session.payment_method_types,
    billing_address_collection: session.billing_address_collection,
    shipping_address_collection: session.shipping_address_collection,
    shipping_options: session.shipping_options,
    customer_details: session.customer_details,
    line_items: session.line_items,
    metadata: JSON.parse(session.metadata),
  };
};

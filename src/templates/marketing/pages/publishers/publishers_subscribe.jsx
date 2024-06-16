import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PublisherHeader from '../../component/layout/publisherheader';
import Footer from '../../component/layout/footer';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const plans = [
  {
    id: process.env.REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_FLAT,
    name: 'No Plan/Per Influencer',
    price: '$70 per influencer',
    description: 'Work with individual influencers on a pay-per-influencer basis.',
    influencers: 'Pay Per Influencer',
    overcharge: 'no additional influencer',
    credits: 0,
  },
  {
    id: process.env.REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN1,
    name: 'Plan 1',
    price: '$240',
    influencers: '10 Influencers Per Month',
    overcharge: '$35 per additional influencer',
    credits: 50,
  },
  {
    id: process.env.REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN2,
    name: 'Plan 2',
    price: '$450',
    influencers: '25 Influencers Per Month',
    overcharge: '$30 per additional influencer',
    credits: 100,
  },
  {
    id: process.env.REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN3,
    name: 'Plan 3',
    price: '$840',
    influencers: '40 Influencers Per Month',
    overcharge: '$20 per additional influencer',
    credits: 300,
  },
];

const PublisherSubscribePage = () => {
  const [community, setCommunity] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentSubscriptions, setCurrentSubscriptions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Glitch.api.Communities.view(id).then(response => {
      setCommunity(response.data.data);
    }).catch(error => {
      console.error(error);
    });

    Glitch.api.Subscriptions.listCommunityInfluencerSubscriptions(id).then(response => {
      setCurrentSubscriptions(response.data.data);
      const activeSubscription = response.data.data.find(subscription => 
        plans.some(plan => plan.id === subscription.stripe_price)
      );
      if (activeSubscription) {
        const matchedPlan = plans.find(plan => plan.id === activeSubscription.stripe_price);
        setSelectedPlan(matchedPlan);
      }
    }).catch(error => {
      console.error(error);
    });
  }, [id]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCancel = async (event) => {
    event.preventDefault();

    const activeSubscription = currentSubscriptions.find(subscription => 
      plans.some(plan => plan.id === subscription.stripe_price)
    );

    if (activeSubscription) {
      Glitch.api.Subscriptions.cancelCommunityInfluencerSubscription(id, activeSubscription.stripe_id).then(response => {
        setSelectedPlan(null);
        setCurrentSubscriptions([]);
        alert('Subscription canceled successfully!');
      }).catch(error => {
        console.error(error);
        alert('Failed to cancel the subscription. Please try again.');
      });
    }
  };

  const handleChangePlan = async (event, newPriceId) => {
    event.preventDefault();

    const activeSubscription = currentSubscriptions.find(subscription => 
      plans.some(plan => plan.id === subscription.stripe_price)
    );

    if (activeSubscription) {
      Glitch.api.Subscriptions.changeCommunityInfluencerSubscription(id, {
        newPriceId: newPriceId
      }).then(response => {
        setSelectedPlan(plans.find(plan => plan.id === newPriceId));
        alert('Subscription changed successfully!');
      }).catch(error => {
        console.error(error);
        alert('Failed to change the subscription. Please try again.');
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Select A Subscription | Glitch</title>
        <meta name="description" content="Choose from a list of subscriptions." />
      </Helmet>
      <PublisherHeader position={"relative"} />
      <section className="pageheader-section-min">
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <div className="pageheader-thumb mb-4">
            </div>
            <h2 className="pageheader-title">Select A Subscription</h2>
            <p className="lead">Choose from a list of subscriptions.</p>
          </div>
        </div>
      </section>

      <section className="pricing-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {plans.map(plan => (
              <div className="col-md-3" key={plan.id}>
                <div
                  className="card mb-4"
                  style={{
                    border: selectedPlan && selectedPlan.id === plan.id ? '2px solid #007bff' : '',
                    boxShadow: selectedPlan && selectedPlan.id === plan.id ? '0 0 10px rgba(0, 123, 255, 0.5)' : ''
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{plan.name}</h5>
                    <p className="card-text">{plan.price}</p>
                    <p className="card-text">{plan.influencers}</p>
                    <p className="card-text">Overcharge: {plan.overcharge}</p>
                    <p className="card-text">{plan.credits} invite credits</p>
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => handlePlanSelect(plan)}
                      >
                        {selectedPlan && selectedPlan.id === plan.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPlan && (
        <Elements stripe={stripePromise}>
          <SelectedPlanInfo 
            plan={selectedPlan} 
            communityId={id} 
            currentSubscriptions={currentSubscriptions}
            handleCancel={handleCancel}
            handleChangePlan={handleChangePlan}
          />
        </Elements>
      )}

      <Footer />
      <style jsx>{`
        .stripe-card-element {
          border: 1px solid #000;
          padding: 10px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

const SelectedPlanInfo = ({ plan, communityId, currentSubscriptions, handleCancel, handleChangePlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    Glitch.api.Subscriptions.createCommunityInfluencerSubscription(communityId, {
      priceId: plan.id,
      paymentMethod: paymentMethod.id,
      couponCode: couponCode, // Pass the coupon code to the API
    }).then(response => {
      setLoading(false);
      alert('Subscription successful!');
    }).catch(error => {
      console.error(error);
      setError('Subscription failed. Please try again.');
      setLoading(false);
    });
  };

  const activeSubscription = currentSubscriptions.find(subscription => 
    plans.some(p => p.id === subscription.stripe_price)
  );

  const cardElementOptions = {
    style: {
      base: {
        color: '#000',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
        border: '1px solid #000',
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <div className="container mb-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-black">Selected Plan</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">{plan.name}</h5>
          <p className="card-text">{plan.price}</p>
          <p className="card-text">{plan.influencers}</p>
          <p className="card-text">Overcharge: {plan.overcharge}</p>
          <p className="card-text">{plan.credits} invite credits</p>
          {activeSubscription ? (
            <>
              <button className="btn btn-danger" onClick={handleCancel}>Cancel Subscription</button>
              {plan.id !== activeSubscription.stripe_price && (
                <button className="btn btn-primary" onClick={(event) => handleChangePlan(event, plan.id)}>Change Plan</button>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmit} >
              <div className="mb-3" style={{ margin: '10px 0 10px', border: 'solid', padding: "10px" }}>
                <CardElement theme="night" options={cardElementOptions} />
              </div>
              <div className="mb-3">
                <label htmlFor="couponCode" className="form-label">Coupon Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="couponCode"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter your coupon code"
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button className="btn btn-primary" type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublisherSubscribePage;

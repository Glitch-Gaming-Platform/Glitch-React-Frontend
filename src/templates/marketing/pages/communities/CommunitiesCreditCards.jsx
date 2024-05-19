import React, { useState, useEffect } from 'react';
import Glitch from 'glitch-javascript-sdk';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PublisherHeader from '../../component/layout/publisherheader';
import Footer from '../../component/layout/footer';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CommunitiesCreditCardsPage = () => {
  const [community, setCommunity] = useState({});
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  const [defaultCardId, setDefaultCardId] = useState(null);

  useEffect(() => {
    Glitch.api.Communities.view(id).then(response => {
      setCommunity(response.data.data);
    }).catch(error => {
      console.error(error);
    });

    Glitch.api.Communities.getPaymentMethods(id).then(response => {
      setCards(response.data.data);
      const defaultCard = response.data.data.find(card => card.card.default_for_currency);
      if (defaultCard) {
        setDefaultCardId(defaultCard.id);
      }
    }).catch(error => {
      console.error(error);
    });
  }, [id]);

  const handleAddCard = async (paymentMethodId) => {
    Glitch.api.Communities.addPaymentMethod(id, { paymentMethod: paymentMethodId }).then(response => {
      setCards([...cards, response.data.data]);
    }).catch(error => {
      console.error(error);
    });
  };

  const setCardToDefault = (payment_id) => {
    Glitch.api.Communities.setDefaultPaymentMethod(id, { paymentMethod: payment_id }).then(response => {
      setDefaultCardId(payment_id);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Credit Cards | Glitch</title>
        <meta name="description" content="Manage your credit cards." />
      </Helmet>
      <PublisherHeader position={"relative"} />
      <section className="pageheader-section-min">
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <div className="pageheader-thumb mb-4">
            </div>
            <h2 className="pageheader-title">Manage Your Credit Cards</h2>
            <p className="lead">Credit cards will be used for your subscription, pay the influencers, and other charges. Manage your cards below.</p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            {cards.map(card => (
              <div className="col-md-4 mb-3" key={card.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {card.card?.brand?.toUpperCase()} **** **** **** {card.card.last4}
                    </h5>
                    <p className="card-text">Expires {card.card.exp_month}/{card.card.exp_year}</p>
                    {card.id === defaultCardId ? (
                      <span className="badge bg-success">Default Card</span>
                    ) : (
                      <button className="btn btn-primary" onClick={() => setCardToDefault(card.id)}>
                        Make Default
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <h4>Add a New Card</h4>
                </div>
                <div className="card-body">
                  <Elements stripe={stripePromise}>
                    <NewCardForm handleAddCard={handleAddCard} />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const NewCardForm = ({ handleAddCard }) => {
  const stripe = useStripe();
  const elements = useElements();
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

    await handleAddCard(paymentMethod.id);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <CardElement />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Add Card'}
      </button>
    </form>
  );
};

export default CommunitiesCreditCardsPage;

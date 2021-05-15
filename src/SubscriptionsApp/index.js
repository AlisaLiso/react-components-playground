import React from 'react'

import './index.scss'

const initialState = {
  subscriptions: []
}

export default function SubscriptionsApp() {
  return (
    <div className="subscriptions-container">
      <h1>All subscriptions</h1>
      <SubscriptionsList />
    </div>
  )
}

const SubscriptionsList = () => {
  return (
    <div className="subscriptions-container__list">
      <h1>SubscriptionsList</h1>
    </div>
  )
}

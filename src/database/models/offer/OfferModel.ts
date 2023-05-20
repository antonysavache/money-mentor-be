import { Schema, model } from 'mongoose'
import { OfferType } from './types.js'

const schema = new Schema<OfferType>(
  {
    name: {
      type: String,
      required: true,
    },
    minSum: {
      type: String,
      required: true,
    },
    minSumNum: {
      type: Number,
      required: true,
    },
    maxSum: {
      type: String,
      required: true,
    },
    maxSumNum: {
      type: Number,
      required: true,
    },
    minDays: {
      type: String,
      required: true,
    },
    maxDays: {
      type: String,
      required: true,
    },
    minBid: {
      type: String,
      required: true,
    },
    minBidNum: {
      type: Number,
      required: true,
    },
    offerUrl: {
      type: String,
      required: true,
    },
    shortPicUrl: String,
  },
  {
    timestamps: true,
  },
)

export const OfferModel = model<OfferType>('Offer', schema)

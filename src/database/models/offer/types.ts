import { Schema } from 'mongoose'

export type OfferType = {
  id: Schema.Types.ObjectId
  name: string
  minSum: string
  minSumNum: number
  maxSum: string
  maxSumNum: number
  minDays: string
  maxDays: string
  minBid: string
  shortPicUrl: string
  minBidNum: number
  offerUrl: string
}

import { Request, Response } from 'express'
import { OfferModel } from '../../database/models/offer/OfferModel.js'

export class CreditController {
  static async create(req: Request, res: Response) {
    try {
      const doc = await OfferModel.create({
        name: req.body.name,
        minSum: req.body.minSum,
        minSumNum: req.body.minSumNum,
        maxSum: req.body.maxSum,
        maxSumNum: req.body.maxSumNum,
        minDays: req.body.minDays,
        maxDays: req.body.maxDays,
        minBid: req.body.minBid,
        shortPicUrl: req.body.shortPicUrl,
        minBidNum: req.body.minBidNum,
        offerUrl: req.body.offerUrl,
      })
      const offer = await doc.save()

      res.json({
        success: true,
        data: offer,
      })
    } catch (error) {
      res.json({
        success: false,
        data: [],
      })
    }
  }
  static async getAll(req: Request, res: Response) {
    try {
      const offers = await OfferModel.find()

      res.json({
        success: true,
        data: offers,
      })
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        data: [],
      })
    }
  }
  static async getOne(req: Request, res: Response) {
    try {
      const offerId = req.params.id
      const offer = await OfferModel.findById(offerId)

      res.json({
        success: true,
        data: offer,
      })
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        data: [],
      })
    }
  }
  static async patch(req: Request, res: Response) {
    try {
      const id = req.params.id
      const offer = await OfferModel.findByIdAndUpdate(id, {
        minSum: req.body.minSum,
        minSumNum: req.body.minSumNum,
        maxSum: req.body.maxSum,
        maxSumNum: req.body.maxSumNum,
        minDays: req.body.minDays,
        maxDays: req.body.maxDays,
        minBid: req.body.minBid,
        shortPicUrl: req.body.shortPicUrl,
        minBidNum: req.body.minBidNum,
        offerUrl: req.body.offerUrl,
      })

      res.json({
        success: true,
        data: offer,
      })
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        data: [],
      })
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const offerId = req.params.id
      const offer = await OfferModel.findByIdAndDelete(offerId)

      const offersWithoutDeleted = await OfferModel.find()

      res.json({
        success: true,
        data: offersWithoutDeleted,
      })
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        data: [],
      })
    }
  }
}


import { google } from 'googleapis';
import dotenv from 'dotenv';
import twilio from 'twilio';
import Parser from './Parser';
dotenv.config();

const {
  SID: accountSid,
  KEY: TwilloAuthToken,
  APIKEY: googleApiKey,
  CX: cx
} = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
class WhatsappBot {
  /**
   * @memberof WhatsappBot
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async googleSearch(req, res, next) {
    const twiml = new MessagingResponse();
    const q = req.body.Body;
    const options = { cx, q, auth: googleApiKey };

    try {      
      await Parser.stringSplit(q).then(
        data =>  console.log("Result api"));


      if (resultApi == 'pass') {
        const result = await customsearch.cse.list(options);
        const firstResult = result.data.items[0];
        const searchData = firstResult.snippet;
        const link = firstResult.link;
  
        twiml.message(`${searchData} ${link}`);
      } else {
        twiml.message(resultApi)

      }

      res.set('Content-Type', 'text/xml');

      return res.status(200).send(twiml.toString());
    } catch (error) {
      return next(error);
    }
  }
}

export default WhatsappBot;
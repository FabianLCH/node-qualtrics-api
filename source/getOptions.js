import fetch from "./internal/fetch";
import getSurveyIds from "./getSurveyIds";

require("dotenv").config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves a question from a Survey
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to Survey Options: https://api.qualtrics.com/reference#get-options
 */

export default async function getQuestion(name) {
  const surveyId = await getSurveyIds(name);
  return fetch(qualtricsDomain + "survey-definitions/" + surveyId + "/options");
}

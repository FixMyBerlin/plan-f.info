import {
  allQuestions,
  Topic,
  Measure,
  MeasureType,
  Question,
} from './questions.const';

export const calculateScore = (answers: number[], questions: Question[]) => {
  if (answers.length !== questions.length) {
    throw Error(
      `lengths of answers (${answers.length}) and questions (${questions.length}) don't match`,
    );
  }
  const topicScores: Record<Topic, number> = Object.create(null);
  const measureScores: Record<Measure, number> = Object.create(null);
  const measureTypeScores: Record<MeasureType, number> = Object.create(null);
  const topicMaxScores: Record<Topic, number> = Object.create(null);
  const measureMaxScores: Record<Measure, number> = Object.create(null);
  const measureTypeMaxScores: Record<MeasureType, number> = Object.create(null);
  let totalScore = 0;
  let totalMaxScore = 0;
  answers.forEach((answer, i) => {
    const question = allQuestions[i];
    const optionsWeights = question.options.map((x) => x.weight);
    const score = optionsWeights[answer] * question.weight;
    const maxScore = question.weight * Math.max(...optionsWeights);
    totalScore += score;
    totalMaxScore += maxScore;
    const updateScore = <T extends string>(
      obj: Record<T, number>,
      key: T,
      val: number,
    ) => {
      if (obj[key] == null) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = val;
      } else {
        // eslint-disable-next-line no-param-reassign
        obj[key] += val;
      }
    };
    question.topics.forEach((topic: Topic) => {
      updateScore(topicScores, topic, score);
      updateScore(topicMaxScores, topic, maxScore);
    });
    question.measures.forEach((measure: Measure) => {
      updateScore(measureScores, measure, score);
      updateScore(measureMaxScores, measure, maxScore);
    });
    question.measureTypes.forEach((measureType: MeasureType) => {
      updateScore(measureTypeScores, measureType, score);
      updateScore(measureTypeMaxScores, measureType, maxScore);
    });
  });
  totalScore /= totalMaxScore;
  Object.keys(topicScores).forEach((topic: Topic) => {
    topicScores[topic] /= topicMaxScores[topic];
  });
  Object.keys(measureScores).forEach((measure: Measure) => {
    measureScores[measure] /= measureMaxScores[measure];
  });
  Object.keys(measureTypeScores).forEach((measureType: MeasureType) => {
    measureTypeScores[measureType] /= measureTypeMaxScores[measureType];
  });
  return {
    totalScore,
    topicScores,
    measureScores,
    measureTypeScores,
  };
};

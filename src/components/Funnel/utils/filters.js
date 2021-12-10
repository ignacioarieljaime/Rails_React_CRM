// COUNT FILTER

export const countProspectsByStage = (prospects, stage) => {
  return prospects.filter(prospect => prospect.stage === stage).length;
}

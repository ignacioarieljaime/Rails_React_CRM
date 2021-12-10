// COUNT FILTER

export const countProspectByStage = (prospects, stage) => {
  return prospects.filter(prospect => prospect.stage === stage).length;
}

// COUNT FILTERS
export const leadCount = (prospects) => {
  return prospects.filter(prospect => prospect.stage === "lead").length;
};

export const contactedCount = (prospects) => {
  return prospects.filter(prospect => prospect.stage === "contacted").length;
};

export const diligenceCount = (prospects) => {
  return prospects.filter(prospect => prospect.stage === "diligence").length;
};

export const closedCount = (prospects) => {
  return prospects.filter(prospect => prospect.stage === "closed").length;
};

export const rejectedCount = (prospects) => {
  return prospects.filter(prospect => prospect.stage === "rejected").length;
};


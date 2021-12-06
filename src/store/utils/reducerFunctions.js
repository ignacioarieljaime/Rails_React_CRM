// PROSPECTS

export const addProspectToStore = (state, prospect) => {
  return [prospect, ...state];
};

export const updateProspectInStore = (state, prospect) => {
  return state.map((prospectObj) => {
    if (prospectObj.id === prospect.id) {
      let prospectObjCopy = { ...prospectObj };
      prospectObjCopy = prospect;
      return prospectObjCopy;
    } else {
      return prospectObj;
    }
  });
};

export const deleteProspectFromStore = (state, id) => {
  return state.filter((prospect) => prospect.id !== id);
};

// COMPANIES

export const addCompanyToStore = (state, company) => {
  return [...state, company];
};

export const updateCompanyInStore = (state, company) => {
  return state.map((companyObj) => {
    if (companyObj.id === company.id) {
      let companyObjCopy = { ...companyObj };
      companyObjCopy = company;
      return companyObjCopy;
    } else {
      return companyObj;
    }
  });
};

export const deleteCompanyFromStore = (state, id) => {
  return state.filter((company) => company.id !== id);
};
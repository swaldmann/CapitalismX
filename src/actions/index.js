import * as types from '../constants/ActionTypes'

export const toggleMenuVisibility = () => ({ type: types.TOGGLE_MENU_VISIBILITY })

export const startSimulation = () => ({ type: types.START_SIMULATION })
export const pauseSimulation = () => ({ type: types.PAUSE_SIMULATION })

/* Finance */
export const quarterlyFinancialHistoryEntry = historyEntry => ({ type: types.DAILY_FINANCIAL_UPDATE, historyEntry: historyEntry})
export const purchase = amount => ({ type: types.PURCHASE, amount })

/* HR */
export const monthlyHRHistoryEntry = (historyEntry, jobSatisfactionPoints) => ({ type: types.MONTHLY_HR_HISTORY_UPDATE, historyEntry, jobSatisfactionPoints })
export const hireEmployee = index => ({ type: types.HIRE_EMPLOYEE, index })
export const fireEmployee = index => ({ type: types.FIRE_EMPLOYEE, index })
export const setWorkingTimeModel = model => ({ type: types.SET_WORKING_TIME_MODEL, model })
export const setWorkingHours = workingHours => ({ type: types.SET_WORKING_HOURS, workingHours })
export const setCompanyCarPolicy = companyCarPolicy => ({ type: types.SET_COMPANY_CAR, companyCarPolicy })
export const setFoodBenefits = foodBenefits => ({ type: types.SET_FOOD_BENEFITS, foodBenefits })
export const setGymMembership = gymMembership => ({ type: types.SET_GYM_BENEFITS, gymMembership })
export const trainEmployee = (index, skillIncrease, salaryIncreasePercentage) => ({ type: types.TRAIN_EMPLOYEE, index, skillIncrease, salaryIncreasePercentage })

/* Production */

// Products
export const introduceNewProduct = productTemplate => ({ type: types.INTRODUCE_NEW_PRODUCT, productTemplate })
export const deprecateProduct = productUuid => ({ type: types.DEPRECATE_PRODUCT, productUuid })
export const switchCurrentProductTemplateIndex = productCategoryTemplateIndex => ({ type: types.SWITCH_CURRENT_PRODUCT_TEMPLATE, productCategoryTemplateIndex })
export const switchCurrentComponent = (productTypeIndex, componentTypeIndex, componentIndex) => ({ type: types.SWITCH_CURRENT_COMPONENT, productTypeIndex, componentTypeIndex, componentIndex })
export const switchComponentTypeSupplier = (componentType, supplier) => ({ type: types.SWITCH_COMPONENT_TYPE_SUPPLIER, componentType, supplier })

// Manufacturing
export const buyMachine = machineTemplate => ({ type: types.BUY_MACHINE, machineTemplate })
export const sellMachine = machineUuid => ({ type: types.SELL_MACHINE, machineUuid })

// Logistics
export const buyTruck = truckTemplate => ({ type: types.BUY_TRUCK, truckTemplate })
export const sellTruck = truckUuid => ({ type: types.SELL_TRUCK, truckUuid })
export const switchLogisticPartner = logisticPartnerIndex => ({ type: types.SWITCH_LOGISTIC_PARTNER, logisticPartnerIndex })

/* Marketing */
export const startCampaign = (campaignTemplate, campaignMediaTemplate, startElapsedDays) => ({ type: types.START_CAMPAIGN, campaignTemplate, campaignMediaTemplate, startElapsedDays })
export const makePressRelease = (pressReleaseTemplate, startElapsedDays) => ({ type: types.MAKE_PRESS_RELEASE, pressReleaseTemplate, startElapsedDays })
export const doMarketResearch = (marketResearchTemplate, startElapsedDays) => ({ type: types.DO_MARKET_RESEARCHES, marketResearchTemplate, startElapsedDays })
export const hireConsultancy = consultancyIndex => ({ type: types.HIRE_CONSULTANCY, consultancyIndex })
export const hireLobbyist = lobbyistIndex => ({ type: types.HIRE_LOBBYIST, lobbyistIndex })

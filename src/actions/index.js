import * as types from '../constants/ActionTypes'

export const clearState = () => ({ type: types.CLEAR_STATE })

export const showMenu = () => ({ type: types.SHOW_MENU })
export const hideMenu = () => ({ type: types.HIDE_MENU })

export const startSimulation = () => ({ type: types.START_SIMULATION })
export const pauseSimulation = () => ({ type: types.PAUSE_SIMULATION })

/* Finance */
export const dailyFinancialUpdate = financials => ({ type: types.DAILY_FINANCIAL_UPDATE, financials: financials })
export const dailyInvestmentsUpdate = investmentEarnings => ({ type: types.DAILY_INVESTMENTS_UPDATE, investmentEarnings: investmentEarnings })
export const dailyFinancialHistoryEntry = financials => ({ type: types.DAILY_FINANCIAL_HISTORY_ENTRY, financials: financials })
export const quarterlyFinancialHistoryEntry = financials => ({ type: types.QUARTERLY_FINANCIAL_HISTORY_ENTRY, financials: financials})
export const purchase = amount => ({ type: types.PURCHASE, amount })
export const purchaseAsset = amount => ({ type: types.PURCHASE_ASSET, amount })
export const buyFund = (uuid, amount) => ({ type: types.BUY_FUND, uuid, amount })
export const sellFund = (uuid, amount) => ({ type: types.SELL_FUND, uuid, amount })

/* HR */
export const monthlyHRHistoryEntry = (historyEntry, jobSatisfactionPoints) => ({ type: types.MONTHLY_HR_HISTORY_UPDATE, historyEntry, jobSatisfactionPoints })
export const hireEmployee = index => ({ type: types.HIRE_EMPLOYEE, index })
export const fireEmployee = index => ({ type: types.FIRE_EMPLOYEE, index })
export const setWorkingTimeModelIndex = index => ({ type: types.SET_WORKING_TIME_MODEL_INDEX, index })
export const setWorkingHoursIndex = index => ({ type: types.SET_WORKING_HOURS_INDEX, index })
export const setCompanyCarPolicyIndex = index => ({ type: types.SET_COMPANY_CAR_INDEX, index })
export const setITEquipmentPolicyIndex = index => ({ type: types.SET_IT_EQUIPMENT_POLICY_INDEX, index })
export const setFoodBenefitsIndex = index => ({ type: types.SET_FOOD_BENEFITS_INDEX, index })
export const setGymMembershipIndex = index => ({ type: types.SET_GYM_BENEFITS_INDEX, index })
export const trainEmployee = (index, skillIncrease, salaryIncreasePercentage) => ({ type: types.TRAIN_EMPLOYEE, index, skillIncrease, salaryIncreasePercentage })

/* Production */
export const dailyProductUpdate = (salesFigures) => ({ type: types.DAILY_PRODUCT_UPDATE, salesFigures})
export const monthlyComponentUpdate = (elapsedMonths) => ({ type: types.MONTHLY_COMPONENT_UPDATES, elapsedMonths})

// Products
export const introduceNewProduct = productTemplate => ({ type: types.INTRODUCE_NEW_PRODUCT, productTemplate })
export const deprecateProduct = productUuid => ({ type: types.DEPRECATE_PRODUCT, productUuid })
export const switchCurrentProductTemplateIndex = productCategoryTemplateIndex => ({ type: types.SWITCH_CURRENT_PRODUCT_TEMPLATE, productCategoryTemplateIndex })
export const switchCurrentComponent = (productTypeIndex, componentTypeIndex, componentIndex) => ({ type: types.SWITCH_CURRENT_COMPONENT, productTypeIndex, componentTypeIndex, componentIndex })
export const switchComponentTypeSupplier = (componentType, supplier) => ({ type: types.SWITCH_COMPONENT_TYPE_SUPPLIER, componentType, supplier })

// Manufacturing
export const buyMachine = machineTemplate => ({ type: types.BUY_MACHINE, machineTemplate })
export const sellMachine = machineUuid => ({ type: types.SELL_MACHINE, machineUuid })
export const switchRAndDIndex = index => ({ type: types.SWITCH_R_AND_D_INDEX, index })
export const switchProcessAutomationIndex = index => ({ type: types.SWITCH_PROCESS_AUTOMATION_INDEX, index })
export const switchSystemsSecurityIndex = index => ({ type: types.SWITCH_SYSTEMS_SECURITY_INDEX, index })

// Logistics
export const buyTruck = truckTemplate => ({ type: types.BUY_TRUCK, truckTemplate })
export const sellTruck = truckUuid => ({ type: types.SELL_TRUCK, truckUuid })
export const switchLogisticPartner = logisticPartnerIndex => ({ type: types.SWITCH_LOGISTIC_PARTNER, logisticPartnerIndex })
export const buyWarehouse = warehouseTemplate => ({ type: types.BUY_WAREHOUSE, warehouseTemplate })
export const sellWarehouse = warehouseUuid => ({ type: types.SELL_WAREHOUSE, warehouseUuid })

/* Marketing */
export const startCampaign = (campaignTemplate, campaignMediaTemplate, startElapsedDays) => ({ type: types.START_CAMPAIGN, campaignTemplate, campaignMediaTemplate, startElapsedDays })
export const makePressRelease = (pressReleaseTemplate, startElapsedDays) => ({ type: types.MAKE_PRESS_RELEASE, pressReleaseTemplate, startElapsedDays })
export const doMarketResearch = (marketResearchTemplate, startElapsedDays) => ({ type: types.DO_MARKET_RESEARCHES, marketResearchTemplate, startElapsedDays })
export const hireConsultancy = consultancyIndex => ({ type: types.HIRE_CONSULTANCY, consultancyIndex })
export const hireLobbyist = lobbyistIndex => ({ type: types.HIRE_LOBBYIST, lobbyistIndex })

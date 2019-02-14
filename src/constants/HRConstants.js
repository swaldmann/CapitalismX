const ENGINEERS = [
    {index: 0, name: "Elon Musk", skill: 5, salary: 150000, happiness: 0, isEmployed: false},
    {index: 1, name: "Henry Ford", skill: 5, salary: 130000, happiness: 2, isEmployed: false},
    {index: 2, name: "Steve Wozniak", skill: 5, salary: 120000, happiness: 1, isEmployed: false},
    {index: 3, name: "Richard Taylor", skill: 4, salary: 90000, happiness: 1, isEmployed: false},
    {index: 4, name: "Ellie Mills", skill: 4, salary: 88000, happiness: 2, isEmployed: false},
    {index: 5, name: "Mark Fowler", skill: 3, salary: 78000, happiness: 1, isEmployed: false},
    {index: 6, name: "Bill Miller", skill: 3, salary: 69000, happiness: 0, isEmployed: false},
    {index: 7, name: "Brett Pratt", skill: 2, salary: 52000, happiness: 1, isEmployed: false},
    {index: 8, name: "Liliana Travis", skill: 1, salary: 44000, happiness: 2, isEmployed: false},
    {index: 9, name: "Paul Botcher", skill: 1, salary: 44000, happiness: 2, isEmployed: false},
    {index: 10, name: "Nina Screwup", skill: 1, salary: 38000, happiness: 1, isEmployed: true}
]

const SALESPEOPLE = [
    {index: 11, name: "Steve Jobs", skill: 5, salary: 150000, happiness: 2, isEmployed: false},
    {index: 12, name: "Dale Carnegie", skill: 5, salary: 140000, happiness: 2, isEmployed: false},
    {index: 13, name: "Warren Buffett", skill: 5, salary: 110000, happiness: 2, isEmployed: false},
    {index: 14, name: "John Don", skill: 4, salary: 94000, happiness: 1, isEmployed: false},
    {index: 15, name: "Alexander Robertson", skill: 3, salary: 83000, happiness: 0, isEmployed: false},
    {index: 16, name: "George Allen", skill: 3, salary: 75000, happiness: 2, isEmployed: false},
    {index: 17, name: "Lisa Su", skill: 2, salary: 60000, happiness: 1, isEmployed: false},
    {index: 18, name: "Sam Gomez", skill: 1, salary: 45000, happiness: 0, isEmployed: false},
    {index: 19, name: "Joe Gill", skill: 1, salary: 35000, happiness: 1, isEmployed: true}
]

// Types
export const ENGINEER_TYPE = "Engineers"
export const SALESPEOPLE_TYPE = "Salespeople"

// Filters
export const SHOW_HIRED = 'Hired'
export const SHOW_AVAILABLE = 'Available'

export const EMPLOYEES = {
    [ENGINEER_TYPE]: ENGINEERS,
    [SALESPEOPLE_TYPE]: SALESPEOPLE
}

// Trainings
export const TRAINING_TEMPLATES = [
    { name: "Workshop", cost: 3000, salaryIncreasePercentage: 0.15, skillIncrease: 1 },
    { name: "Course", cost: 5500, salaryIncreasePercentage: 0.3, skillIncrease: 2 }
]

// Working Time Model
export const WORKING_TIME_MODEL_FIXED = 'WORKING_TIME_MODEL_FIXED'
export const WORKING_TIME_MODEL_FLEX = 'WORKING_TIME_MODEL_FLEX'
export const WORKING_TIME_MODEL_TRUST = 'WORKING_TIME_MODEL_TRUST'

// Working Hours
export const WORKING_HOURS_10 = 'WORKING_HOURS_10'
export const WORKING_HOURS_8 = 'WORKING_HOURS_8'
export const WORKING_HOURS_6 = 'WORKING_HOURS_6'

// Company Car
export const COMPANY_CAR_SEDAN = 'COMPANY_CAR_SEDAN'
export const COMPANY_CAR_SUBCOMPACT = 'COMPANY_CAR_SUBCOMPACT'
export const COMPANY_CAR_NONE = 'COMPANY_CAR_NONE'

// Food/Coffee
export const FOOD_BENEFITS_NONE = 'FOOD_BENEFITS_NONE'
export const FOOD_BENEFITS_PAID = 'FOOD_BENEFITS_PAID'
export const FOOD_BENEFITS_FREE = 'FOOD_BENEFITS_FREE'

// Company Car
export const GYM_MEMBERSHIP_FREE = 'GYM_MEMBERSHIP_FREE'
export const GYM_MEMBERSHIP_SUBSIDIZED = 'GYM_MEMBERSHIP_SUBSIDIZED'
export const GYM_MEMBERSHIP_NONE = 'GYM_MEMBERSHIP_NONE'

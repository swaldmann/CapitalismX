// Employees
const ENGINEERS = [
    {index: 0, name: "Elon Musk", skill: 92, salary: 150000, happiness: 0, isEmployed: false},
    {index: 1, name: "Henry Ford", skill: 90, salary: 130000, happiness: 2, isEmployed: false},
    {index: 2, name: "Steve Wozniak", skill: 90, salary: 120000, happiness: 1, isEmployed: false},
    {index: 3, name: "Richard Taylor", skill: 78, salary: 90000, happiness: 1, isEmployed: false},
    {index: 4, name: "Ellie Mills", skill: 71, salary: 88000, happiness: 2, isEmployed: false},
    {index: 5, name: "Mark Fowler", skill: 58, salary: 78000, happiness: 1, isEmployed: false},
    {index: 6, name: "Bill Miller", skill: 48, salary: 69000, happiness: 0, isEmployed: false},
    {index: 7, name: "Brett Pratt", skill: 38, salary: 52000, happiness: 1, isEmployed: false},
    {index: 8, name: "Liliana Travis", skill: 30, salary: 44000, happiness: 2, isEmployed: false},
    {index: 9, name: "Paul Botcher", skill: 18, salary: 44000, happiness: 2, isEmployed: false},
    {index: 10, name: "Nina Screwup", skill: 11, salary: 38000, happiness: 1, isEmployed: false}
].map(e => ({...e, happiness: 0, jobSatisfaction: e.happiness * 3}))

const SALESPEOPLE = [
    {index: 11, name: "Steve Jobs", skill: 90, salary: 150000, happiness: 2, isEmployed: false},
    {index: 12, name: "Dale Carnegie", skill: 89, salary: 140000, happiness: 2, isEmployed: false},
    {index: 13, name: "Warren Buffett", skill: 85, salary: 110000, happiness: 2, isEmployed: false},
    {index: 14, name: "John Don", skill: 69, salary: 94000, happiness: 1, isEmployed: false},
    {index: 15, name: "Alexander Robertson", skill: 49, salary: 83000, happiness: 0, isEmployed: false},
    {index: 16, name: "George Allen", skill: 48, salary: 75000, happiness: 2, isEmployed: false},
    {index: 17, name: "Lisa Su", skill: 39, salary: 60000, happiness: 1, isEmployed: false},
    {index: 18, name: "Sam Gomez", skill: 19, salary: 45000, happiness: 0, isEmployed: false},
    {index: 19, name: "Joe Gill", skill: 17, salary: 35000, happiness: 1, isEmployed: false}
].map(e => ({...e, happiness: 0, jobSatisfaction: e.happiness * 3}))

// HR History
const historyLength = 4

const historyTemplate = {
    numberOfEmployees: 0,
    jobSatisfactionPercentages: [0, 0, 0],
}

export const HR_HISTORY = new Array(historyLength).fill(historyTemplate)

// Trainings
export const TRAINING_TEMPLATES = [
    { name: "Workshop", cost: 3000, salaryIncreasePercentage: 0.01, skillIncrease: 1 },
    { name: "Course", cost: 5500, salaryIncreasePercentage: 0.02, skillIncrease: 2 }
]

/*const TRAININGS = [
    {index: 20, name: "Hot topics in manufacturing", cost: 10, utility:10 , effectiveness:365 , department: "Production" },
    {index: 20, name: "Lean production methods", cost: 10, utility:30 , effectiveness:200 , department: ["Production","Logistics"] },
    {index: 20, name: "Psychology of work", cost: 10, utility:20 , effectiveness:200 , department: ["Sales", "Marketing"] },
    {index: 20, name: "Best practice in employer branding", cost: 10, utility:30 , effectiveness:365 , department: ["Marketing", "Sales"] },
    {index: 20, name: "AIDA principle", cost: 10, utility:10 , effectiveness:150 , department: ["Marketing", "Sales"] },
    {index: 20, name: "Environmental friendly processes", cost: 10, utility:20 , effectiveness:200 , department: ["Production","Logistics"] },
    {index: 20, name: "Sustainability in transport", cost: 10, utility:20 , effectiveness:250 , department: ["Logistics"] },
    {index: 20, name: "Persuasion techniques", cost: 10, utility:30 , effectiveness:200 , department: ["Sales"] },
    {index: 20, name: "Personality matters", cost: 10, utility:10 , effectiveness:100 , department: ["Sales"] }
]*/

// Working Time
export const WORKING_TIME_MODEL_TEMPLATES = [
    {
        index: 0,
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 0,
        description: "Fixed Hours"
    },
    {
        index: 1,
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 2,
        description: "Flextime"
    },
    {
        index: 2,
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 4,
        description: "Trust-based"
    }
]

// Working Hours
export const WORKING_HOUR_TEMPLATES = [
    {
        index: 0,
        description: "6 hours",
        monthlyCostPerEmployee: 1000,
        jobSatisfactionPoints: 0
    },
    {
        index: 1,
        description: "8 hours",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 3
    },
    {
        index: 2,
        description: "10 hours",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 5
    }
]

// Company Car
export const COMPANY_CAR_TEMPLATES = [
    {
        index: 0,
        description: "None",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 0
    },
    {
        index: 1,
        description: "Subcompact",
        monthlyCostPerEmployee: 300,
        jobSatisfactionPoints: 2
    },
    {
        index: 2,
        description: "Sedan",
        monthlyCostPerEmployee: 600,
        jobSatisfactionPoints: 4
    }
]

// IT Equipment
export const IT_EQUIPMENT_TEMPLATES = [
    {
        index: 0,
        description: "Market average",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 0
    },
    {
        index: 1,
        description: "High-end",
        monthlyCostPerEmployee: 50,
        jobSatisfactionPoints: 2
    }
]

// Food/Coffee
export const FOOD_BENEFITS_TEMPLATES = [
    {
        index: 0,
        description: "None",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 0
    },
    {
        index: 1,
        description: "Free",
        monthlyCostPerEmployee: 100,
        jobSatisfactionPoints: 5
    }
]

// Gym Membership
export const GYM_MEMBERSHIP_TEMPLATES = [
    {
        index: 0,
        description: "None",
        monthlyCostPerEmployee: 0,
        jobSatisfactionPoints: 0
    },
    {
        index: 1,
        description: "Subsidized",
        monthlyCostPerEmployee: 50,
        jobSatisfactionPoints: 2
    },
    {
        index: 2,
        description: "Free",
        monthlyCostPerEmployee: 100,
        jobSatisfactionPoints: 4
    }
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

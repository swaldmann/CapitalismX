import * as uuid from 'uuid/v4'

export const CAMPAIGN_MEDIA_TEMPLATES = [
    {
        index: 0,
        name: "Newspaper",
        reach: 1000,
        detailTitle: "$5000",
        iconPath: "icons8-news.png"
    },
    {
        index: 1,
        name: "TV",
        reach: 10000,
        detailTitle: "$50000",
        iconPath: "icons8-tv.png"
    },
    {
        index: 2,
        name: "Online",
        reach: 50000,
        detailTitle: "$100000",
        iconPath: "icons8-globe.png"
    }
].map(template => true ? { ...template, uuid: uuid() } : template)

export const CAMPAIGN_TEMPLATES = [
    {
        name: "Promoting Products",
        index: 0
    },
    {
        name: "Promoting Company",
        index: 1
    },
    {
        name: "Green Company",
        index: 2
    },
    {
        name: "Diversity",
        index: 3
    },
    {
        name: "Refugee Program",
        index: 4
    }
]

export const PRESS_RELEASE_TEMPLATES = [
    {
        name: "Privacy and Security Efforts"
    },
    {
        name: "Affordable Prices"
    },
    {
        name: "Guaranteed Delivery Times"
    },
    {
        name: "Apology"
    }
]

export const MARKET_RESEARCHES_TEMPLATES = [
    {
        name: "Price Sensitivity"
    },
    {
        name: "Company Summary"
    },
    {
        name: "Customer Satisfaction"
    },
    {
        name: "Benchmarking Statistics"
    }
]

export const CAMPAIGNS = []

export const PRESS_RELEASES = []

export const MARKET_RESEARCHES = []

export const MARKETING = {
    consultancyIndex: null,
    lobbyistIndex: null
}

export const LOBBYIST_TEMPLATES = [
    {
        title: "Senator",
        iconPath: "icons8-man_face.png",
        cost: 10000,
        taxRate: 0.1
    },
    {
        title: "Congressman",
        iconPath: "icons8-valet.png",
        cost: 5000,
        taxRate: 0.15
    },
    {
        title: "Mayor",
        iconPath: "icons8-old_man.png",
        cost: 2000,
        taxRate: 0.2
    },
    {
        title: "Worker's Union Leader",
        iconPath: "icons8-gardener.png",
        cost: 1000,
        taxRate: 0.25
    }
]

export const CONSULTANCY_TEMPLATES = [
    {
        title: "O'Reilly & Company",
        description: "World-famous firm",
        iconPath: "icons8-identity_disc.png"
    },
    {
        title: "Sinoido Consulting",
        description: "Local consultancy",
        iconPath: "icons8-less_than2.png"
    },
    {
        title: "Wannabe Consultants",
        description: "Student consultancy",
        iconPath: "icons8-multi_edit.png"
    }
]

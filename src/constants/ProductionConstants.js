function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const CPUS = [
    {index: 0, name: "1 GHz", baseUtility: 20, availabilityOffset: 0, baseCost: 0.5},
    {index: 1, name: "1.5 GHz", baseUtility: 40, availabilityOffset: 3, baseCost: 1.2},
    {index: 2, name: "3 GHz", baseUtility: 70, availabilityOffset: 7, baseCost: 2.0},
    {index: 3, name: "2x 3 GHz", baseUtility: 90, availabilityOffset: 14, baseCost: 2.5},
    {index: 4, name: "4x 3 GHz", baseUtility: 120, availabilityOffset: 19, baseCost: 3.5}
]

const STORAGES = [
    {index: 5, name: "2 GB", baseUtility: 30, availabilityOffset: 0, baseCost: 0.5},
    {index: 6, name: "10 GB", baseUtility: 60, availabilityOffset: 3, baseCost: 0.6},
    {index: 7, name: "50 GB", baseUtility: 90, availabilityOffset: 11, baseCost: 0.9},
    {index: 8, name: "200 GB", baseUtility: 120, availabilityOffset: 15, baseCost: 1.5},
    {index: 9, name: "200 GB SSD", baseUtility: 130, availabilityOffset: 24, baseCost: 2.5},
    {index: 10, name: "1 TB SSD", baseUtility: 150, availabilityOffset: 30, baseCost: 3.5}
]

const DISPLAYS = [
    {index: 11, name: "Plasma", baseUtility: 20, availabilityOffset: 0, baseCost: 0.5},
    {index: 12, name: "LCD", baseUtility: 30, availabilityOffset: 5, baseCost: 0.8},
    {index: 13, name: "LED", baseUtility: 70, availabilityOffset: 10, baseCost: 0.9},
    {index: 14, name: "OLED", baseUtility: 100, availabilityOffset: 15, baseCost: 1.2},
    {index: 15, name: "QLED", baseUtility: 120, availabilityOffset: 20, baseCost: 1.5},
]

const CAMERAS = [
    {index: 16, name: "1.2 MP", baseUtility: 20, availabilityOffset: 0, baseCost: 0.3},
    {index: 17, name: "2 MP", baseUtility: 30, availabilityOffset: 2, baseCost: 0.4},
    {index: 18, name: "5 MP", baseUtility: 100, availabilityOffset: 14, baseCost: 0.5},
    {index: 19, name: "8 MP", baseUtility: 130, availabilityOffset: 19, baseCost: 0.6},
    {index: 20, name: "12 MP", baseUtility: 150, availabilityOffset: 23, baseCost: 0.8},
]

const CPU_COMPONENT = {
    index: 0,
    imageName: "icons8-smartphone_cpu",
    typeDescription: "CPU",
    currentIndex: 0,
    allComponents: deepCopy(CPUS)
}

const STORAGE_COMPONENT = {
    index: 1,
    imageName: "icons8-ssd",
    typeDescription: "Storage",
    currentIndex: 0,
    allComponents: deepCopy(STORAGES)
}

const DISPLAY_COMPONENT = {
    index: 2,
    imageName: "icons8-color_wheel_2",
    typeDescription: "Screen",
    currentIndex: 0,
    allComponents: deepCopy(DISPLAYS)
}

const CAMERA_COMPONENT = {
    index: 3,
    imageName: "icons8-integrated_webcam",
    typeDescription: "Camera",
    currentIndex: 0,
    allComponents: deepCopy(CAMERAS)
}

const SMARTPHONE = {index: 0, productCategoryName: "Smartphone", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}, {...DISPLAY_COMPONENT}, {...CAMERA_COMPONENT}]}
//const TV         = {index: 1, productCategoryName: "TV", components: [{...CPU_COMPONENT}, {...DISPLAY_COMPONENT}]}
//const NOTEBOOK   = {index: 2, productCategoryName: "Notebook", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}, {...DISPLAY_COMPONENT}, ]}
//const SERVER     = {index: 3, productCategoryName: "Server", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}]}

export const SUPPLIER_TEMPLATES = [
    { name: "Intel", costMultiplicator: 1.3, qualityMultiplicator: 1.4 },
    { name: "AMD", costMultiplicator: 1.2, qualityMultiplicator: 1.1 },
    { name: "Micron", costMultiplicator: 1, qualityMultiplicator: 1 }
]

export const PRODUCTS = [SMARTPHONE]//, TV, NOTEBOOK, SERVER]

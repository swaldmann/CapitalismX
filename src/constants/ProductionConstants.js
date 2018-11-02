const CPUS = [
    {index: 0, name: "1 GHz", baseUtility: 20, availabilityOffset: 0},
    {index: 1, name: "1.5 GHz", baseUtility: 20, availabilityOffset: 5},
    {index: 2, name: "3 GHz", baseUtility: 30, availabilityOffset: 10},
    {index: 3, name: "2x 3 GHz", baseUtility: 10, availabilityOffset: 15},
    {index: 4, name: "4x 3 GHz", baseUtility: 10, availabilityOffset: 20}
]

const STORAGES = [
    {index: 5, name: "2 GB", baseUtility: 20, availabilityOffset: 0},
    {index: 6, name: "10 GB", baseUtility: 20, availabilityOffset: 5},
    {index: 7, name: "50 GB", baseUtility: 20, availabilityOffset: 10},
    {index: 8, name: "200 GB", baseUtility: 20, availabilityOffset: 15},
    {index: 9, name: "200 GB SSD", baseUtility: 30, availabilityOffset: 20},
    {index: 10, name: "1 TB SSD", baseUtility: 30, availabilityOffset: 20}
]

const DISPLAYS = [
    {index: 11, name: "Plasma", baseUtility: 20, availabilityOffset: 0},
    {index: 12, name: "LCD", baseUtility: 20, availabilityOffset: 5},
    {index: 13, name: "LED", baseUtility: 20, availabilityOffset: 10},
    {index: 14, name: "OLED", baseUtility: 20, availabilityOffset: 15},
    {index: 15, name: "QLED", baseUtility: 30, availabilityOffset: 20},
]

const CAMERAS = [
    {index: 16, name: "1.2 MP", baseUtility: 20, availabilityOffset: 0},
    {index: 17, name: "2 MP", baseUtility: 20, availabilityOffset: 5},
    {index: 18, name: "5 MP", baseUtility: 20, availabilityOffset: 10},
    {index: 19, name: "8 MP", baseUtility: 20, availabilityOffset: 15},
    {index: 20, name: "12 MP", baseUtility: 30, availabilityOffset: 20},
]

const CPU_COMPONENT = {
    index: 0,
    typeDescription: "CPU",
    availableIndex: 1,
    currentIndex: 0,
    allComponents: CPUS
}

const STORAGE_COMPONENT = {
    index: 1,
    typeDescription: "Storage",
    availableIndex: 1,
    currentIndex: 1,
    allComponents: STORAGES
}

const DISPLAY_COMPONENT = {
    index: 2,
    typeDescription: "Screen",
    availableIndex: 2,
    currentIndex: 2,
    allComponents: DISPLAYS
}

const CAMERA_COMPONENT = {
    index: 3,
    typeDescription: "Camera",
    availableIndex: 2,
    currentIndex: 2,
    allComponents: CAMERAS
}

const SMARTPHONE = [CPU_COMPONENT, STORAGE_COMPONENT, DISPLAY_COMPONENT, CAMERA_COMPONENT]
const TV         = [CPU_COMPONENT, DISPLAY_COMPONENT]
const NOTEBOOK   = [CPU_COMPONENT, DISPLAY_COMPONENT, STORAGE_COMPONENT]
const SERVER     = [CPU_COMPONENT, STORAGE_COMPONENT]

export const PRODUCTS = [SMARTPHONE, TV, NOTEBOOK, SERVER]

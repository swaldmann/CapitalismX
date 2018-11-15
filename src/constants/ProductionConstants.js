function copy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const CPUS = [
    {index: 0, name: "1 GHz", baseUtility: 20, availabilityOffset: 0},
    {index: 1, name: "1.5 GHz", baseUtility: 40, availabilityOffset: 5},
    {index: 2, name: "3 GHz", baseUtility: 70, availabilityOffset: 10},
    {index: 3, name: "2x 3 GHz", baseUtility: 90, availabilityOffset: 15},
    {index: 4, name: "4x 3 GHz", baseUtility: 120, availabilityOffset: 20}
]

const STORAGES = [
    {index: 5, name: "2 GB", baseUtility: 30, availabilityOffset: 0},
    {index: 6, name: "10 GB", baseUtility: 60, availabilityOffset: 5},
    {index: 7, name: "50 GB", baseUtility: 90, availabilityOffset: 10},
    {index: 8, name: "200 GB", baseUtility: 120, availabilityOffset: 15},
    {index: 9, name: "200 GB SSD", baseUtility: 130, availabilityOffset: 20},
    {index: 10, name: "1 TB SSD", baseUtility: 150, availabilityOffset: 20}
]

const DISPLAYS = [
    {index: 11, name: "Plasma", baseUtility: 20, availabilityOffset: 0},
    {index: 12, name: "LCD", baseUtility: 30, availabilityOffset: 5},
    {index: 13, name: "LED", baseUtility: 70, availabilityOffset: 10},
    {index: 14, name: "OLED", baseUtility: 100, availabilityOffset: 15},
    {index: 15, name: "QLED", baseUtility: 120, availabilityOffset: 20},
]

const CAMERAS = [
    {index: 16, name: "1.2 MP", baseUtility: 20, availabilityOffset: 0},
    {index: 17, name: "2 MP", baseUtility: 30, availabilityOffset: 5},
    {index: 18, name: "5 MP", baseUtility: 100, availabilityOffset: 10},
    {index: 19, name: "8 MP", baseUtility: 130, availabilityOffset: 15},
    {index: 20, name: "12 MP", baseUtility: 150, availabilityOffset: 20},
]

const CPU_COMPONENT = {
    index: 0,
    imageName: "icons8-smartphone_cpu",
    typeDescription: "CPU",
    availableIndex: 1,
    currentIndex: 0,
    allComponents: copy(CPUS)
}

const STORAGE_COMPONENT = {
    index: 1,
    imageName: "icons8-ssd",
    typeDescription: "Storage",
    availableIndex: 1,
    currentIndex: 1,
    allComponents: copy(STORAGES)
}

const DISPLAY_COMPONENT = {
    index: 2,
    imageName: "icons8-color_wheel_2",
    typeDescription: "Screen",
    availableIndex: 2,
    currentIndex: 2,
    allComponents: copy(DISPLAYS)
}

const CAMERA_COMPONENT = {
    index: 3,
    imageName: "icons8-integrated_webcam",
    typeDescription: "Camera",
    availableIndex: 2,
    currentIndex: 2,
    allComponents: copy(CAMERAS)
}

const SMARTPHONE = {index: 0, productCategoryName: "Smartphone", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}, {...DISPLAY_COMPONENT}, {...CAMERA_COMPONENT}]}
const TV         = {index: 1, productCategoryName: "TV", components: [{...CPU_COMPONENT}, {...DISPLAY_COMPONENT}]}
const NOTEBOOK   = {index: 2, productCategoryName: "Notebook", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}, {...DISPLAY_COMPONENT}, ]}
const SERVER     = {index: 3, productCategoryName: "Server", components: [{...CPU_COMPONENT}, {...STORAGE_COMPONENT}]}

export const PRODUCTS = [SMARTPHONE]//, TV, NOTEBOOK, SERVER]

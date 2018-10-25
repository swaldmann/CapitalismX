import React from "react"

const MenuField = ({ numberOfEmployees }) => (
    <span>{numberOfEmployees.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</span>
)

export default MenuField

import React from 'react'
import VisibleMarketResearchesPopover from '../../../containers/VisibleMarketResearchesPopover'

const MarketResearchesList = ({ marketResearches, elapsedDays }) => (
    <div className="third column-flexbox">
        <h3>Market Researches</h3>
        <div className="borderedList remaining-size">
            <ul>
                {
                    marketResearches.map(marketResearch =>
                        <li>
                            <img className="icon" alt="" src={require('../../../static/icons/icons8-microscope.png')} />{marketResearch.marketResearchTemplate.name}
                            <div className="detailTitle">{elapsedDays >= marketResearch.startElapsedDays + 5 ? (elapsedDays - marketResearch.startElapsedDays) + " days ago" : "Underway"}</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisibleMarketResearchesPopover />
    </div>
)

export default MarketResearchesList

import React from 'react'
import VisibleMarketResearchesPopover from '../../../containers/VisibleMarketResearchesPopover'

const MarketResearchesList = ({ marketResearches }) => (
    <div className="third column-flexbox">
        <h3>Market Researches</h3>
        <div className="borderedList remaining-height">
            <ul>
                {
                    marketResearches.map(marketResearch =>
                        <li>
                            {marketResearch.marketResearchTemplate.name}
                            <div className="detailTitle">30 days ago</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisibleMarketResearchesPopover />
    </div>
)

export default MarketResearchesList

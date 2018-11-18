import React from 'react'
import VisiblePressReleasesPopover from '../../../containers/VisiblePressReleasesPopover'

const PressReleasesList = ({ pressReleases }) => (
    <div className="third column-flexbox">
        <h3>Press Releases</h3>
        <div className="borderedList remaining-height">
            <ul>
                {
                    pressReleases.map(pressRelease =>
                        <li>
                            <img className="icon" alt="" src={require('../../../static/icons/icons8-microphone2.png')} />{pressRelease.pressReleaseTemplate.name}
                            <div className="detailTitle">30 days ago</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisiblePressReleasesPopover />
    </div>
)

export default PressReleasesList

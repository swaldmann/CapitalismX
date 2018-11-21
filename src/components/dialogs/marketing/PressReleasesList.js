import React from 'react'
import VisiblePressReleasesPopover from '../../../containers/VisiblePressReleasesPopover'

const PressReleasesList = ({ pressReleases, elapsedDays }) => (
    <div className="third column-flexbox">
        <h3>Press Releases</h3>
        <div className="borderedList remaining-size">
            <ul>
                {
                    pressReleases.map(pressRelease =>
                        <li>
                            <img className="icon" alt="" src={require('../../../static/icons/icons8-microphone2.png')} />{pressRelease.pressReleaseTemplate.name}
                            <div className="detailTitle">{elapsedDays >= pressRelease.startElapsedDays + 1 ? (elapsedDays - pressRelease.startElapsedDays) + " days ago" : "Underway"}</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <VisiblePressReleasesPopover />
    </div>
)

export default PressReleasesList

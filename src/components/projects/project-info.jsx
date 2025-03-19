import Image from 'next/image';
import React from 'react';

export default function ProjectInfo({
    name,
    description,
    location,
    scope,
    itemNumber,
    imageSrc,
    projectLink,
}) {
    return (
        <div className="project-wrapper-v2 margin-top-70px">
            <div className="project-collection-list-wrapper w-dyn-list">
                <div role="list" className="project-collection-list w-dyn-items">
                    <div
                        id={`project-${itemNumber}`}
                        role="listitem"
                        className="project-collection-item position-sticky w-dyn-item"
                    >
                        <div className="project-item-block">
                            <div className="project-item-content-wrap">
                                <div className="project-content-header">
                                    <div className="project-item-count">
                                        [{itemNumber < 10 ? `0${itemNumber}` : itemNumber}]
                                    </div>
                                    <div className="project-header-name-block">
                                        <a href={projectLink} className="project-item-name-link w-inline-block">
                                            <h3 className="project-item-title-name">{name}</h3>
                                        </a>
                                        <div className="project-description">{description}</div>
                                    </div>
                                </div>
                                <div className="project-item-divider"></div>
                                <div className="project-location-block">
                                    <div className="project-specific-item-title">Location:</div>
                                    <div className="project-speacific-item-detail">{location}</div>
                                </div>
                                <div className="project-item-divider"></div>
                                <div className="project-scope-block">
                                    <div className="project-specific-item-title">Scope:</div>
                                    <div className="project-speacific-item-detail">{scope}</div>
                                </div>
                                <div className="project-item-divider"></div>
                                <div className="project-content-footer">
                                    <div className="button-block">
                                        <a href={projectLink} className="primary-button-block w-inline-block">
                                            <div className="button-text">See Details</div>
                                            <div className="button-overly-color-1"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item-image-block">
                                <div className="project-thumbnail-image-wrap">
                                    <Image
                                        src={imageSrc}
                                        loading="lazy"
                                        alt={`Thumbnail of ${name}`}
                                        className="project-thumbnail-image"
                                    />
                                    <div className="image-bg-overly-color"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

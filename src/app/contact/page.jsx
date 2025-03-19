import ContactDetails from '@/components/contact/ContactDetails'
import ContactHero from '@/components/contact/ContactHero'
import Footer from '@/components/footer/footer'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="main-wrapper">
                <ContactHero />
                <ContactDetails />
                <section className="map-section">
                    <div className="map w-widget w-widget-map" data-widget-style="roadmap"
                        data-widget-latlng="40.6779935,-73.7542699" data-enable-scroll="false" role="region" title=""
                        data-enable-touch="true" data-widget-zoom="12" data-widget-tooltip=""></div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default page

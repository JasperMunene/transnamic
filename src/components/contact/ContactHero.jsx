import React from 'react'

const ContactHero = () => {
  return (
      <section className="breadcrumb-section contact">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-header-block">
              <div className="overflow-hiden-block">
                <div className="breadcrumb-sub-title-block">
                  <div className="breadcrumb-sub-title">[</div>
                  <a href="/"
                     className="breadcrumb-sub-title link">Home</a>
                  <div className="breadcrumb-sub-title primary-color-2">/</div>
                  <div className="breadcrumb-sub-title primary-color-2">Contact Us</div>
                  <div className="breadcrumb-sub-title">]</div>
                </div>
              </div>
              <div className="overflow-hiden-block">
                <h1 className="breadcrumb-title">Build Your Future with Us.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactHero

import { Image } from "@radix-ui/react-avatar";

export default function Contact() {
  return (
    <section className="contact-us-section padding-top-140px">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-us-block">
          <div className="contact-us-banner-block">
            <Image
              src="/Nairobi.jpeg"
              loading="lazy"
              alt="Banner Image"
              className="contact-us-banner-image"
            />
            <div className="contact-us-banner-overly"></div>
            <div className="contact-us-banner-content-block">
              <div className="contact-us-banenr-hader-wrap">
                <div className="overflow-hiden-block">
                  <div
                    data-w-id="21b55d95-01c9-5388-7523-486096f5cc4c"
                    className="section-subtitle"
                  >
                    [Contact Us]
                  </div>
                </div>
                <div className="overflow-hiden-block">
                  <h2
                    data-w-id="3e765245-b7f9-c9d8-a4ee-2726e4707c7e"
                    className="section-title contact-us"
                  >
                    Start Your Project with Us.
                  </h2>
                </div>
              </div>
              <div
                data-w-id="a32669a3-d61b-995d-4ed2-70bdc5bf13f1"
                className="contact-us-banenr-footer-wrap"
              >
                <div className="overflow-hiden-block">
                  <div className="contact-us-excerpt">
                    Ready to streamline your logistics operations? Let’s discuss
                    your transportation needs and explore how our expertise can
                    help turn your vision into reality.
                  </div>
                </div>
                <div className="overflow-hiden-block margin-top-32px">
                  <div className="social-media-wrapper">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="social-link-block w-inline-block"
                    >
                      <div className="social-icon-text">IG</div>
                    </a>
                    <a
                      href="https://x.com/"
                      target="_blank"
                      className="social-link-block w-inline-block"
                    >
                      <div className="social-icon-text">TW</div>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="social-link-block w-inline-block"
                    >
                      <div className="social-icon-text">FB</div>
                    </a>
                    <a
                      href="https://web.whatsapp.com/"
                      target="_blank"
                      className="social-link-block w-inline-block"
                    >
                      <div className="social-icon-text">WS</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us-form-block">
            <div className="contact-form-subtitle margin-bottom-4px">
              Send a message
            </div>
            <h3 className="contact-us-form-title">Request a call back</h3>
            <div className="contact-input-form-block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="contact-us-input-form"
                data-wf-page-id="66d7d8619d8389f532ad1373"
                data-wf-element-id="57621885-90dd-c5fd-5955-2e13f220c49f"
              >
                <input
                  className="contact-us-input-form-text-field w-input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Full Name"
                  type="text"
                  id="name"
                />
                <input
                  className="contact-us-input-form-text-field w-input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Email Address"
                  type="email"
                  id="Email"
                  required=""
                />
                <input
                  className="contact-us-input-form-text-field w-input"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone Number"
                  type="tel"
                  id="Phone"
                  required=""
                />
                <textarea
                  placeholder="Message"
                  maxLength="5000"
                  id="field"
                  name="field"
                  data-name="Field"
                  className="input-tex-area-field w-input"
                ></textarea>
                <label className="w-checkbox checkbox-field">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    required=""
                    className="w-checkbox-input checkbox"
                  />
                  <span
                    className="checkbox-label w-form-label"
                    htmlFor="checkbox"
                  >
                    I agree to the terms of service.
                  </span>
                </label>
                <div className="button-block margin-top-52px">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit-button w-button"
                    value="Submit"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

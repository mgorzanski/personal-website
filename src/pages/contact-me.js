import React from 'react'
import Layout from './../components/layout'

const ContactMePage = () => (
  <Layout>
    <main className="site-content empty-space">
      <div className="row center-lg center-md center-sm center-xs">
        <div className="col-lg-7 col-md-11 col-sm-11 col-xs-11">
          <div className="box">
            <section className="contact-me">
              <h2 className="section-title">Contact me</h2>
              <div className="row center-xs">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-me_description">
                  <div className="box">
                    <p className="contact-me_text text-space">
                      If you want to contact me, please fill the form bellow, or
                      just write an email to: <b>gorzanski.mateusz@gmail.com</b>
                      .
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-me_form">
                  <div className="box">
                    <form action="" method="post">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 start-lg start-md start-sm start-xs">
                          <div className="box contact-me_margin-right">
                            <label className="contact-me_label" htmlFor="nameInput">
                              Your Name:
                            </label>
                            <input
                              className="contact-me_input"
                              type="text"
                              name="name"
                              id="nameInput"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 start-lg start-md start-sm start-xs">
                          <div className="box contact-me_margin-left">
                            <label
                              className="contact-me_label"
                              htmlFor="emailInput"
                            >
                              Your Email:
                            </label>
                            <input
                              className="contact-me_input"
                              type="email"
                              name="email"
                              id="nameInput"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
                          <div className="box">
                            <label
                              className="contact-me_label"
                              htmlFor="subjectInput"
                            >
                              Subject:
                            </label>
                            <input
                              className="contact-me_input"
                              type="text"
                              name="subject"
                              id="nameInput"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
                          <div className="box">
                            <label
                              className="contact-me_label"
                              htmlFor="messageTextarea"
                            >
                              Message:
                            </label>
                            <textarea
                              className="contact-me_textarea"
                              name="message"
                              id="messageTextarea"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
                          <div className="box">
                            <button
                              type="submit"
                              className="contact-me_submit-btn"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default ContactMePage

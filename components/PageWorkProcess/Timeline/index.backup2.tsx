import React, { useState } from 'react'
import styled from 'styled-components'
import ItemTimeline from './ItemTimeline'
const MainTimeline = styled.div`
  #process {
    margin-bottom: 40px;
    overflow-x: hidden;
  }

  #process .section-heading {
    margin-bottom: 40px;
  }

  .steps-pane img {
    height: 100px;
    margin-top: 18px;
    -ms-transform: skewX(-15deg);
    /* IE 9 */
    -webkit-transform: skewX(-15deg);
    /* Safari */
    -o-transform: skewX(-15deg);
    /* Standard syntax */
    -moz-transform: skewX(-15deg);
  }

  .pane-warp {
    height: 140px;
    width: 25px;
    margin-left: 20%;
    margin-top: 20px;
    -ms-transform: skewX(15deg);
    /* IE 9 */
    -webkit-transform: skewX(15deg);
    /* Safari */
    -o-transform: skewX(15deg);
    /* Standard syntax */
    -moz-transform: skewX(15deg);
  }

  .steps-pane {
    height: 140px;
    width: 140px;
    margin-left: 30px;
    box-shadow: 7px 0px 5px #bcbcbc;
  }

  .inverted-pane-warp {
    height: 140px;
    width: 25px;
    /* margin-left: 20%; */
    /* -ms-transform: skewX(-15deg); */
    /* IE 9 */
    /* -webkit-transform: skewX(-15deg); */
    /* Safari */
    /* -o-transform: skewX(-15deg); */
    /* Standard syntax */
    /* -moz-transform: skewX(-15deg); */
  }

  .inverted-steps-pane {
    height: 140px;
    width: 140px;
    background: #bcbcbc;
    margin-left: 30px;
    box-shadow: 7px 0px 5px #bcbcbc;
  }

  .inverted-steps-pane p {
    /* -ms-transform: skewX(15deg); */
    /* IE 9 */
    /* -webkit-transform: skewX(15deg); */
    /* Safari */
    /* -o-transform: skewX(15deg); */
    /* Standard syntax */
    /* -moz-transform: skewX(15deg); */
    padding: 20px 10px 10px 10px;
  }

  @media (min-width: 900px) {
    .steps-timeline {
      border-top: 5px double #fc6429;
      padding-top: 20px;
      margin-top: 40px;
      margin-left: 3%;
      margin-right: 3%;
    }
    .steps-one,
    .steps-two,
    .steps-three,
    .steps-four,
    .steps-five {
      float: left;
      width: 20%;
      margin-top: -50px;
    }
    .step-wrap {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: transparent;
      margin-left: 39%;
      border: 2px solid transparent;
    }
    .verticle-line {
      position: absolute;
      height: 57px;
      width: 5px;
      margin-left: 10px;
      marker-top: 10px;
    }
    .steps-stops {
      height: 25px;
      width: 25px;
      margin: 11px 10.1px;
      border-radius: 50%;
      background: #fc6429;
    }
    .end-circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      position: absolute;
      margin-top: 19px;
      margin-left: -10px;
    }
    .inverted-end-circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      position: absolute;
      margin-top: 19px;
      margin-left: 18.1%;
    }
  }

  @media (max-width: 899px) {
    #process .container-fluid {
      width: 50%;
    }
    .steps-timeline {
      border-left: 5px double #fc6429;
      margin-left: 35px;
    }
    .steps-one,
    .steps-two,
    .steps-three,
    .steps-four,
    .steps-five {
      margin-left: -25px;
    }
    .step-wrap,
    .steps-stops {
      float: left;
    }
    .steps-timeline {
      border-left: 2px solid $brand-primary;
      margin-left: 30px;
    }
    .pane-warp {
      margin-left: 30%;
    }
    .inverted-pane-warp {
      margin-left: 30%;
    }
    .verticle-line {
      position: absolute;
      width: 125px;
      height: 5px;
      margin-left: 5px;
      margin-top: 10px;
    }
    .steps-stops {
      height: 25px;
      width: 25px;
      margin: 11px 10px;
      border-radius: 50%;
      background: #fc6429;
    }
    .step-wrap {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: transparent;
      margin-top: 125px;
      margin-left: -2px;
      border: 2px solid #fc6429;
    }
    .end-circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      position: absolute;
      margin-top: -45px;
      margin-left: 15px;
    }
    .inverted-end-circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      position: absolute;
      margin-top: 280px;
      margin-left: 15px;
    }
  }

  @media (max-width: 600px) {
    #process .container-fluid {
      width: 90%;
    }
  }

  @media (max-width: 400px) {
    .verticle-line {
      width: 105px;
    }
  }

  .back-orange {
    background: #fc6429;
  }

  .back-blue {
    background: rgb(59, 37, 132);
  }
`
const Timeline = (): React.FC => {
  return (
    <MainTimeline>
      <section id="process">
        <div className="container-fluid">
          <div className="row">
            <div className="steps-timeline text-center">
              <div className="steps-one">
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange" />
                  </div>
                </div>
                <div className="inverted-pane-warp back-blue">
                  <div className="inverted-steps-pane">
                    <p>Analysis</p>
                  </div>
                </div>
              </div>

              <div className="steps-two">
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange" />
                  </div>
                </div>

                <div className="inverted-pane-warp back-orange">
                  <div className="inverted-steps-pane">
                    <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                  </div>
                </div>
              </div>

              <div className="steps-three">
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange" />
                  </div>
                </div>

                <div className="inverted-pane-warp back-blue">
                  <div className="inverted-steps-pane">
                    <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                  </div>
                </div>
              </div>

              <div className="steps-four">
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange" />
                  </div>
                </div>

                <div className="inverted-pane-warp back-orange">
                  <div className="inverted-steps-pane">
                    <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                  </div>
                </div>
              </div>

              <div className="steps-five">
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange" />
                  </div>
                </div>

                <div className="inverted-pane-warp back-blue">
                  <div className="inverted-steps-pane">
                    <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainTimeline>
  )
}

export default Timeline

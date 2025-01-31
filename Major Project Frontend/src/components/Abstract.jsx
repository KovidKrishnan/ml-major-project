import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function Abstract() {
  return (
    <div>
        <div className="mt-5">
        <div className="mt-4 d-flex justify-content-around flex-wrap">
          <Col xs={10} md={5}>
            <img
              className="d-block w-100 rounded-4 shadow-lg"
              src="https://cdn.arstechnica.net/wp-content/uploads/2018/01/android-malware.jpg"
              alt="Left Image"
            />
          </Col>
          <Col xs={10} md={6}>
            <div className="mt-3">
              <h2>Abstract</h2>
              <p>
                The Android Operating System's exponential growth in user
                adoption has concurrently heightened its vulnerability to
                malicious intrusions. The inherent user-friendliness of Android
                smartphones has, unfortunately, attracted the attention of
                intruders, thereby necessitating the development of cutting-edge
                malware detection methodologies. This paper responds to this
                imperative by introducing a sophisticated approach grounded in
                the static analysis of Android Application Package (APK) files.
                The crux of the proposed methodology lies in the extraction of
                pertinent features such as API Calls, Intents, Permissions, and
                Command signatures.
              </p>
            </div>
          </Col>
        </div>
      </div>

      {/* Data with Image on the Right */}
      <div className="mt-lg-4 mb-4">
        <div className="mt-lg-5 mb-4 d-flex justify-content-around flex-wrap">
          <Col xs={10} md={6}>
            <p className="mt-4">
              To rigorously validate and refine the proposed approach, the study
              draws upon the Drebin and Twomer datasets. These datasets,
              renowned for their extensive collections of both benign
              applications and malware specimens, serve as crucial training
              grounds for machine learning classifiers. The experiments
              conducted encompass a comprehensive consideration of combined
              features, incorporating the amalgamation of API Calls, Intents,
              Permissions, and Command signatures. Additionally, a nuanced
              exploration involves the creation of twosome combinations of
              permissions, aiming to discern potential synergies between these
              crucial Android application elements.
            </p>
          </Col>
          <Col xs={11} md={5}>
            <img
              className="d-block w-100 rounded-4 shadow-lg"
              src="https://cdn.hexnode.com/blogs/wp-content/uploads/2023/01/27182326/Android-malware-cover-image.png"
              alt="Right Image"
            />
          </Col>
        </div>
      </div>
    </div>
  )
}

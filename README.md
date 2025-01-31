# Android Malware detection using Machine Learning

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
<br><br>

<h2>Dataset </h2>
<p className="mt-4">
              The Drebin Dataset is a huge dataset, that comprises
              <strong>5560</strong> malign samples and <strong>9476</strong>
              benign samples, collected from 179 different Android applications
              from <code>2010 - 2018.</code> <br />
              This dataset consists of <strong>215</strong> attributes/features/
              parameters out of which: <br />
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <b>114</b> are Permissions
                </li>
                <li>
                  <b>72</b> are API calls
                </li>
                <li>
                  <b>29</b> are Intents
                </li>
              </ul>
            </p>
<br>
<h2>Algorithm 1</h2>
            <p>
                Here we have selected all the features i.e. <code>114 Permissions, 72 API calls, and 29 Intents </code> to build the Machine Learning models. <br />
                Because of the usage of all the features, this algorithm works well and works as a diversified use of features and creates higher accuracy. <br />
                We create a Feature Vector of an application based on all the 215 features in the <strong>Drebin Dataset</strong>. <br />
                And the classification of the applications is based upon the extracted feature vector.
            </p>

<br>
<h2>Algorithm 2</h2> 
            <p>
                Here we have considered only the <code>114 Permissions</code> and made <code><sup>114</sup>C<sub>2</sub></code> Twomer Permission combinations. Then the Machine Learning models are                 built on the dataset of those Twomer combination dataset. <br />
                This showcases that the potential attribute of an application's maliciousness is it's Permissions list. <br />
                This makes note of permissions that an application uses and classifies an application based on their usage. <br />
                This Algorithm gives better results becuase permissions are crucial in <strong>Android&trade;</strong> security.
            </p>
<br>

<h2>Classification Process</h2>
            <ol>
              <li>Analyze the dataset, understanding its features.</li>
              <li>
                Build a Machine Learning classification model based on the
                selected features.
              </li>
              <li>
                Decompile Android APK files (using tools like AndroGuard) to
                extract features like Permissions, Intents, and API calls.
              </li>
              <li>
                Create an application's feature vector based on the extracted
                features and the trained model.
              </li>
              <li>
                Predict the maliciousness of the application by predicting the
                class of the feature vector of the decompiled application.
              </li>
            </ol>

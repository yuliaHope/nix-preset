import './index.css';

export function InstructionsPage() {
  return (
    <>
      <div className="app-container instructions">
        <h2 className="section-title">HOW TO INSTALL</h2>
        <h4 className="hti-sub-title">MOBILE PRESET INSTALL GUIDE</h4>

        <section>
          <h3 className="step-header"><span className="step-number">STEP 1:</span> DOWNLOAD THE .ZIP FILES </h3>
          <p>
            Our Mobile Presets come with DNG files for mobile or sometimes visible as “Camera Raw Images”. After your
            purchase our Presets you should be forwarded to this page. On your iPhone, click "Download Now".
          </p>
        </section>
        <section>
          <h3 className="step-header"><span className="step-number">STEP 2:</span> FIND THE ZIP FOLDER IN YOUR "FILES" APP AND EXTRACT</h3>
          <p>
            Once downloaded, the zip folder should be located in your "Files" app. If you can't find this on your phone
            try searching for it using the search function on your home screen.
          </p>
          <p>
            Once you find the Files app, navigate to the iCloud Drive and then Downloads. You should see a .zip file
            named after the product you purchased ending in .zip. Click on it to extract all of the files into a folder.
          </p>
        </section>
        <section>
          <h3 className="step-header"><span className="step-number">STEP 3:</span> SAVE THE .DNG FILES TO YOUR IPHONE</h3>
          <p>
            Once you've extracted the .zip file into a folder click on the folder, you will see 8 separate files, click
            "Select" and tap on all of the images you see (SOMETIMES IT WON’T SHOW THE IMAGES AND WILL JUST SAY “CAMERA
            RAW IMAGE”), or .DNG files. After all 4 photos are selected tap on the icon at the bottom left-hand corner
            that has an arrow pointing up in a box. Then click "Save 4 Images".
          </p>
        </section>
        <section>
          <h3 className="step-header"><span className="step-number">STEP 4:</span> IMPORT .DNG FILES INTO LIGHTROOM (LR)</h3>
          <p>
            Once you've saved the 4 .DNG images, open Lightroom. On the bottom part of the home screen, you should see
            an "Albums" section. Tap the plus sign or "Create an Album" button to create a new album. Name this album
            whatever you'd like! Open that album and tap the icon at the bottom right-hand corner that has a plus on an
            image. Import the 4 images you previously downloaded.
          </p>
        </section>
        <section>
          <h3 className="step-header"><span className="step-number">STEP 5:</span> CREATE THE PRESET WITHIN LIGHTROOM</h3>
          <p>
            Once you've imported the 4 photos into Lightroom go into the new folder you created and tap on the first
            image.
          </p>
          <p>
            Once you've opened the first image tap the 3 dots in a circle at the top right-hand corner and select
            "Create Preset" then "Create New Preset Group". Name the new group after the name of the pack you
            downloaded. Name the "Preset Name" and then click "Done". You've now added your first preset into Lightroom
            Mobile! Repeat these steps for the rest of the photos. Once you've completed all of these steps your presets
            will be installed and ready to use!
          </p>
        </section>
        <p>
          Once you've completed all of these steps your presets will be installed and ready to use! Thank you for
          purchasing from ONE Preset!
        </p>
      </div>
    </>
  );
}

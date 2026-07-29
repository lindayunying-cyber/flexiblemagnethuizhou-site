====================================================
  FLEXIMAG VIDEO ASSETS - UPLOAD INSTRUCTIONS
====================================================

STEP 1. Prepare your two videos:

  [1] hero-factory.mp4  (Hero background, top of homepage)
      - 1920x1080 (16:9 landscape)
      - MP4 (H.264)
      - 8-15 seconds, loop-friendly
      - <= 5MB
      - Will be auto-darkened by CSS overlay (so dont pre-darken)

  [2] factory-live.mp4  (Right-side video card, See Your Factory section)
      - 1920x1080 (16:9 landscape)
      - MP4 (H.264)
      - 10-20 seconds, loop-friendly
      - <= 6MB
      - NO filter / NO overlay - shown crisp & clear

STEP 2. Drop both files into THIS folder:
  assets/video/hero-factory.mp4
  assets/video/factory-live.mp4

STEP 3. Enable the videos in HTML:

  In index.html, find these comment blocks and UNCOMMENT them
  (delete the surrounding <!-- and -->):

  (a) Hero section, look for: TO ENABLE VIDEO: uncomment below
  (b) Factory Live section, same TO ENABLE VIDEO marker

STEP 4. The placeholder gray block will be replaced automatically
        once <video> tag has a real src file behind it.

COMPRESS TOOLS:
  - HandBrake (free desktop): https://handbrake.fr/
  - Online: https://www.freeconvert.com/video-compressor

====================================================

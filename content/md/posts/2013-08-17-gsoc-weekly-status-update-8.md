{:title "GSoC Weekly update #8"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
I have changed the framework interface from its previous form, although the previous front end automated\_rendering\_testing.py is still present in the repo. Now the new interface, rendering\_testing.py, need all the file names to be provided as command line arguments. The user gets the convenience  of using the tab completion this way. The user will have to give as command line arguments 6 files (font  file, test cases file, reference file, rendering output and files to store output) and an optional directory name(if the engine is harfbuzz).

 If the rendering engine is harfbuzz, user can run the script generate\_hb\_rendering.py  along with the test cases file and font file as parameters, to create the rendered output file. If that is not the case, the user will have to create this file as well in the prescribed form.

Now, the algorithm that actually test the rendering was a bit buggy and was giving certain wrong outputs for words with multiple rendering engines and I have cleared this error. This feature gives correct output now for the files I tried it with.

The next thing I am working on is the web interface and I am using Flask framework. Will make this code public as soon as I get the script running from the page.

Find the code here: [https://github.com/nandajavarma/Automated-Rendering-Testing](https://github.com/nandajavarma/Automated-Rendering-Testing)

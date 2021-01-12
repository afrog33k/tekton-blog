{:title "GSoC Weekly update #2"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
Coding period for GSoC has started the past week and I have been working on a very simple implementation of the proposal in C and two tiny bash scripts. My code is available here: https://github.com/nandajavarma/Automated-Rendering-Testing

The first thing to be done to test using these scripts is create a file that contains a set of words to be tested to see if their rendering is correct. Here I have taken a sample test data file created by SMC a while ago (ml-harfbuzz-testdata,txt). Now pass this file through the script render\_test.sh along with the necessary font file. That is:

./render\_test.sh ml-harfbuzz-testdata.txt /path/to/fontfile

This will create a file named rendered\_glyphs.txt that contains the output of hb-shape function of harfbuzz, i.e. the glyph name followed by some additional numbers (which will be ignored for now).

Now create a file that contains the actual glyph names of the words in the the test data wordfile. I got the data from font forge. This has to be created manually and, as of now, obeying the following structure:

\[glyph11,glyph12,glyph13,...,glyph1n\]

\[glyph21,glyph22,glyph33,....,glyph2n\]

.

.

.

Also make sure that glyph names of each word is in the same order as that of the corresponding words in the test data file. I have named it orig\_glyphs.txt Once this is done, we can pass the above two files through the executable of the script rendering\_testing.c, say rendering\_testing. That is:

./rendering\_testing orig\_glyphs.txt rendered\_glyphs.txt

This script will compare the glyphs in order and if it find any pairs that doesn't match, it will write to a file, result.txt, the line number in which the word appears in the test data file. Otherwise it will tell you the renderings are perfect.

Once this is done, to see the words with wrong renderings we will have to run the third script show\_rendering.sh. It takes as input the result.txt file, the test data file and also the font file. That is:

./show\_rendering.sh result.txt ml-harfbuzz-testdata.txt /path/to/fontfile

This script will create png images of the wrongly rendered words in the current directory.

That is all about my scripts. But the C code is very much inefficient. It even spits segmentation faults with some files. Once I make sure that I am on the right path after discussing with my mentor, I will be working on improving my algorithm and making this code better. That would be my next week's work.

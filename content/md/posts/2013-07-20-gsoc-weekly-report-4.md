{:title "GSoC Weekly update #4"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
This week my main task was to migrate my code to Python. As of now I have implemented my algorithm in Python. Here is the link to the repo : https://github.com/nandajavarma/Automated-Rendering-Testing

I have expanded my test cases' list a bit. Now it has 243 Malayalam words. I have manually created files with glyph names of these test cases in four fonts: Rachana, Meera, Suruma and Lohith-Malayalam in files names rachana-glyph.txt,  meera-glyph.txt etc. (It is still a bit buggy, so haven't pushed the latest commit of this yet).

What the code basically does is, it will ask the tester which font she/he wants to test in. Say it is Meera. The code will look for the reference file which we manually create and the file with harfbuzz rendering of the test cases, names as hb\_meera\_rendering.txt. This file can be created by running harfbuzzrendering.py script with proper font files in the current directory. The main script rendering\_testing.py will scan both these files and compare the glyph name corresponding to each word and stores the wrongly rendered words to a new list. Finally hb-view will be executed on the words inside this list and a file named output.png will be generated in the same directory that contains all the wrongly rendered words.

The baseline glyph names' files aren't ready yet with complete glyph names of all the 243 words. Will be able to complete it within 1-2 days.

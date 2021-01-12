{:title "GSoC Weekly update #5"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
The works this week has been a little slow with college exams and assignments. This is what I have done so far this week.

I have completed the list of reference files containing glyph names of 243 words from four fonts each. Fonts being: Rachana, Meera, Suruma and Lohit-Malayalaam.

The code has been modified to equip not only harfbuzz renderings but renderings from other engines line Uniscribe, provided the user will produce the output of the rendering engine herself/himself. I have created a Python package containing 2 modules each for testing and creating output. The main script automated\_rendering\_testing.py  will make use of this package to test and give the final result. To test the framework, one can just run ./automated\_rendering\_testing and then provide the necessary  information, when asked.

Coming to the tester, first it will compare the reference file and the rendering output. The it will create a file named result.txt containing the wrongly rendered words along with the number corresponding to the word in test cases' file. This file is used only to create the png file of the wrongly rendered words, if the engine is harfbuzz. Other wise this file is ignored. Now the actual output is a file test\_result.txt with the format:

Sl.No Word Rendering status(correct/wrong)

User can view this file, see the status and see the wrongly rendered word.

The framework works this way now: [![Image]({{ site.baseurl }}/assets/screenshot-from-2013-07-28-155652.png?w=650)](http://nandajavarma.files.wordpress.com/2013/07/screenshot-from-2013-07-28-155652.png)

And this would be the output.png file. (As I chose harfbuzz here)

[![Image]({{ site.baseurl }}/assets/screenshot-from-2013-07-28-155950.png?w=158)](http://nandajavarma.files.wordpress.com/2013/07/screenshot-from-2013-07-28-155950.png)

And the test\_result.txt file would look like this:

[![Image]({{ site.baseurl }}/assets/screenshot-from-2013-07-28-160136.png?w=569)](http://nandajavarma.files.wordpress.com/2013/07/screenshot-from-2013-07-28-160136.png)

The agenda for this week is to re-write the whole code in C.

My code is available here: [https://github.com/nandajavarma/Automated-Rendering-Testing](https://github.com/nandajavarma/Automated-Rendering-Testing)

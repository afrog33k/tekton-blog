{:title "GSoC Weekly update #3"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
This week I've been working on generating a baseline glyphs file for 4 fonts: Rachana, Meera, Suruma and Lohith-Malayalam. I have selected some malayalam words from harfbuzz tree and Santhosh Thottingal's test cases which I thought would be enough to test rendering problems. Then I started listing the glyph names of these files for each fonts in separate text files. To get the corresponding Unicode code point of each word, I wrote a small Java code. So I executed the script on each word, found all the code points and made 4 text files that contains the corresponding glyph names of the four fonts I mentioned earlier. 

Although my mentor did tell me that it is not possible to generate glyph names automatically, I wasted more than a couple of days on a Font Forge script to make it automatically output the glyph names. But that gives the glyph name only if we click on each character, which became terribly disappointing. So instead I used it to make the baseline glyphs file in the structure I want if I click on the necessary characters. But this code is trivial as far as rendering testing is concerned and will leave it out from now (Just noting it down as it wasted a very non-trivial amount of my time ;-) ).

I have modified the main C code such that it will ask the tester which font she wants and after choosing the one she needs it will output the result based on the words I have given.

But my mentor pointed out that it looks quite messy looking at codes in 3 different languages for a single framework so I'll be re-writing my code in Python this week.

You can find my code here: [https://github.com/nandajavarma/Automated-Rendering-Testing](https://github.com/nandajavarma/Automated-Rendering-Testing) (although the README is not up-to-date)

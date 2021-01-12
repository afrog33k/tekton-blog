{:title "GSoC - Community engagement period"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true
}
GSoC 2013 approved project list was published on May 27th and the community engagement period was started from May 29th onwards. During this period the students are supposed to bond with their mentors, read the documentations and finalize your plans so you can have a head start with your project. The project topic for which I have got accepted for is "Automated rendering testing" and I will be completing that project under Swathanthra Malayalam Computing. I could learn a lot a new stuff so far during this community bonding period with a heavy deal of help from my mentor Rajeesh K Nambiar, although I haven't started actual coding yet. I will try to explain my proposal status and further steps here, in detail.

Basically, my project idea is to create an automated way to test the rendering of Indic fonts by rendering engines like harfbuzz. The procedure I wish to follow here is quite simple. Create a test file that contains a set of words, mostly characters with ligatures that will be used for testing the rendering. Along with that I will be maintaining a file that contain the glyph infos of the words/characters in the test file for a particular font, say Malayalam font Rachana. As of now I am preparing it manually, can switch to font forge scripts if required.

Once I have got all the test data, my main script will accept the entries in the test file and render it using Harfbuzz for the font Rachana. The words will be rendered using hb-shape and the output glyph values will be compared with the original glyph indices of these words that I have collected manually. If the glyph indices doesn't match, an error flag will be set for that particular word. At the end of the comparisons, the words with error flag set can be rendered using hb-view and stored in another html file. This file can be looked up to see for rendering issues.

This is what I will be implementing first. Depending on its efficiency, will move to any other solutions. In the above procedure, the most inefficient step, I think, is collecting the test file step and collecting the glyph index step. We can resolve the latter by, may be, using a scripts for extraction or using the .ttx file of the font (which is quite complex). But the former is a real issue. If the user wants to check for rendering issues in a font, she will have to create this file with a set of words manually. Will have to think of a way to overcome this issue.

That's it for now!

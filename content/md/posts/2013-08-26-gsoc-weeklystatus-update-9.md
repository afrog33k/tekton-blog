{:title "GSoC Weekly update #9"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
The work of mine has been correcting the reference glyph files and developing a web interface for the proposed framework. I had tried and made the reference files least buggy as possible. I have gone through the glyph names of almost all the 243 words in 4 fonts. I had to invest a lot of time on this especially due to one minor misunderstanding of mine on the multiple correct renderings of the words. And I hope it will get much refined after Rajeeshettan proof read it for 2 fonts as he has suggested.  
(I have changed the renderings of words with repham in Rachana such that the dotreph comes first. So words like these http://troll.ws/image/2e3a872e, http://troll.ws/image/469dd87a, http://troll.ws/image/5838dbec although looks correct, will be in the wrongly rendered words list by harfbuzz.)

The next part of this weeks work was developing the web interface (Excuse my poor design, I am cleaning it up as I write). It doesn't actually spits output to the user now or doesn't make it easier for the user to open files. I am hoping to make it run the script well in a week's time and don't think it is ready yet for the review. So I would like another week to make it ready for reviewing.

And finally about the C code I have added to the repo. I will start working on a new code in C++ once I am done with the webpage as I find the present code massively buggy and really inefficient. I hope I'll be able to update it the week after next.

My code here: [https://github.com/nandajavarma/Automated-Rendering-Testing](https://github.com/nandajavarma/Automated-Rendering-Testing)

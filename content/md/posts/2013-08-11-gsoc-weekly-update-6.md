{:title "GSoC Weekly update #6"
:layout :post
:tags  ["gsco" "nlp" "smc"]
:toc true}
The past two weeks has been a blur with a lot of travelling and minimal Internet access. The following are the works I have been doing so far:

The following modifications were asked to be made on the existing framework by my mentor after a Hangout session as part of the evaluations:

1\. Modify the comparison algorithm so as to show positive results for the words with multiple correct renderings - This modification is made. Now, the user can give multiple glyph names separated by comma in the reference file and if the rendering matches any one of these, the framework will return a positive response.

2\. Modify the reference glyph file, adding the glyph names of words with multiple correct renderings. Also some corrections were asked to be made in the existing reference file.

3\. Modify the framework such that the user can even test by giving the file names as parameters. This one needs a little more work as I didn't give options in argument parser for all the necessary file inputs. Will update this soon.

Along with these some minor fixes were asked to be done on the script and all those are taken care of.

As for the further developments, planned to create a web interface for this framework. I am trying to create this interface using Flask and I am currently working on it.

After that, the framework will be implemented in C. I have added a partially working implementation of this in the repo.

After the completion of all these, if time permits, references for other fonts are also planned to be made.

Will keep posted on further developments.

Thanks!

Find my code here: [https://github.com/nandajavarma/Automated-Rendering-Testing](https://github.com/nandajavarma/Automated-Rendering-Testing)[  
](https://gitlab.com/gem/automated-rendering-testing/tree/master)

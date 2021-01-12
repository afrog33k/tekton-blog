{:title "perl: warning: Setting locale failed. - Fixed"
:layout :post
:tags  ["terminal"]
:toc true}
<!-- date: 2012-12-02 17:58:42.000000000 +05:30 -->
Today when I was trying to build a package on a Debian VPS, It started reporting really annoying messages like these:

perl: warning: Setting locale failed.  
perl: warning: Please check that your locale settings:  
LANGUAGE = (unset),  
LC\_ALL = (unset),  
LANG = "en\_US.UTF-8"  
are supported and installed on your system.  
perl: warning: Falling back to the standard locale ("C").

Then I was trying to install a new package, I got them again. Eventhough it doesn't cause any harm, a screen full of such messages really is annoying. I googled it and found out that I am not the only person with this problem. I could find a couple of solutions for this and the easiest one worked for me. Run the following command in your terminal:

export LC\_ALL=C

Now it has stopped complaining. :-)
